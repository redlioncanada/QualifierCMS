import {Injectable, EventEmitter} from '@angular/core'
import {Http, Headers} from '@angular/http'
import {LoggerService} from './logger.service'

@Injectable()
export class FirebaseService {
	url: string = "https://qualifier-cms.firebaseio.com"
	ref: Firebase
	endpoints: Object

	constructor(private http: Http, private logger: LoggerService) {
		this.onGetConfigs = new EventEmitter()
		this.onGetDefaultConfig = new EventEmitter()
		this.ref = new Firebase(this.url)
		this.endpoints = {
			restore: { uri: '/restore', ref: undefined },
			default: { uri: '/default', ref: undefined },
			latest: { uri: '/latest', ref: undefined }
		}

		for (let i in this.endpoints) {
			this.endpoints[i].ref = new Firebase(this.url + this.endpoints[i].uri)
		}

		this.getDefaultConfig()
	}

	public onGetConfigs: EventEmitter<any>
	public onGetDefaultConfig: EventEmitter<any>

	public saveConfig(configs: any, data: any, id: string) {
		if (typeof id === 'undefined' || !(id in configs) || !configs) {
			console.log('creating new')
			this.endpoints['restore'].ref.push({
				created: Firebase.ServerValue.TIMESTAMP,
				updated: Firebase.ServerValue.TIMESTAMP,
				data: data.data
			})
		} else if (id in configs) {
			console.log('updating existing', data)
			let ref = new Firebase(this.url + this.endpoints['restore'].uri + '/' + id)
			ref.set({
				created: configs[id].created,
				updated: Firebase.ServerValue.TIMESTAMP,
				data: data.data
			})
			ref = new Firebase(this.url + this.endpoints['latest'].uri)
			ref.set({
				created: configs[id].created,
				updated: Firebase.ServerValue.TIMESTAMP,
				data: data.data
			})
		}
	}

	public getDefaultConfig() {
		let self = this
		this.endpoints['default'].ref.on('value', function(snapshot) {
			self.onGetDefaultConfig.emit(snapshot.val())
		}, function(e) {
			self.logger.error(e)
		})
	}

	public saveDefaultConfig(data) {
		this.endpoints['default'].ref.set({
			created: Firebase.ServerValue.TIMESTAMP,
			updated: Firebase.ServerValue.TIMESTAMP,
			data: data
		})
	}

	public getConfigs() {
		let self = this
		this.endpoints['restore'].ref.on('value', function(snapshot) {
			self.onGetConfigs.emit(snapshot.val())
		}, function(e) {
			self.logger.error(e)
		})
	}
}