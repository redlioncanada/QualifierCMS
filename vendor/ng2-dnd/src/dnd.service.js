"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const lang_1 = require('@angular/common/src/facade/lang');
const dnd_config_1 = require('./dnd.config');
let DragDropService = class DragDropService {
    constructor() {
        this.allowedDropZones = [];
    }
};
DragDropService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], DragDropService);
exports.DragDropService = DragDropService;
let DragDropSortableService = class DragDropSortableService {
    constructor(_config) {
        this._config = _config;
    }
    get elem() {
        return this._elem;
    }
    markSortable(elem) {
        if (lang_1.isPresent(this._elem)) {
            this._elem.classList.remove(this._config.onSortableDragClass);
        }
        if (lang_1.isPresent(elem)) {
            this._elem = elem;
            this._elem.classList.add(this._config.onSortableDragClass);
        }
    }
};
DragDropSortableService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [dnd_config_1.DragDropConfig])
], DragDropSortableService);
exports.DragDropSortableService = DragDropSortableService;
