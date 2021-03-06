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
const core_2 = require('@angular/core');
const dnd_component_1 = require('./dnd.component');
const dnd_config_1 = require('./dnd.config');
const dnd_service_1 = require('./dnd.service');
let DroppableComponent = class DroppableComponent extends dnd_component_1.AbstractComponent {
    constructor(elemRef, dragDropService, config, cdr) {
        super(elemRef, dragDropService, config, cdr);
        this.onDropSuccess = new core_2.EventEmitter();
        this.onDragEnter = new core_2.EventEmitter();
        this.onDragOver = new core_2.EventEmitter();
        this.onDragLeave = new core_2.EventEmitter();
        this.dropEnabled = true;
    }
    set droppable(value) {
        this.dropEnabled = !!value;
    }
    set allowdrop(value) {
        this.allowDrop = value;
    }
    set dropzones(value) {
        this.dropZones = value;
    }
    set effectallowed(value) {
        this.effectAllowed = value;
    }
    set effectcursor(value) {
        this.effectCursor = value;
    }
    _onDragEnterCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragEnterClass);
            this.onDragEnter.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    _onDragOverCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.add(this._config.onDragOverClass);
            this.onDragOver.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    ;
    _onDragLeaveCallback(event) {
        if (this._dragDropService.isDragged) {
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
            this.onDragLeave.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
        }
    }
    ;
    _onDropCallback(event) {
        if (this._dragDropService.isDragged) {
            this.onDropSuccess.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            if (this._dragDropService.onDragSuccessCallback) {
                this._dragDropService.onDragSuccessCallback.emit({ dragData: this._dragDropService.dragData, mouseEvent: event });
            }
            this._elem.classList.remove(this._config.onDragOverClass);
            this._elem.classList.remove(this._config.onDragEnterClass);
        }
    }
};
__decorate([
    core_2.Input("dropEnabled"), 
    __metadata('design:type', Boolean), 
    __metadata('design:paramtypes', [Boolean])
], DroppableComponent.prototype, "droppable", null);
__decorate([
    core_2.Output(), 
    __metadata('design:type', core_2.EventEmitter)
], DroppableComponent.prototype, "onDropSuccess", void 0);
__decorate([
    core_2.Output(), 
    __metadata('design:type', core_2.EventEmitter)
], DroppableComponent.prototype, "onDragEnter", void 0);
__decorate([
    core_2.Output(), 
    __metadata('design:type', core_2.EventEmitter)
], DroppableComponent.prototype, "onDragOver", void 0);
__decorate([
    core_2.Output(), 
    __metadata('design:type', core_2.EventEmitter)
], DroppableComponent.prototype, "onDragLeave", void 0);
__decorate([
    core_2.Input("allowDrop"), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Function])
], DroppableComponent.prototype, "allowdrop", null);
__decorate([
    core_2.Input("dropZones"), 
    __metadata('design:type', Array), 
    __metadata('design:paramtypes', [Array])
], DroppableComponent.prototype, "dropzones", null);
__decorate([
    core_2.Input("effectAllowed"), 
    __metadata('design:type', String), 
    __metadata('design:paramtypes', [String])
], DroppableComponent.prototype, "effectallowed", null);
__decorate([
    core_2.Input("effectCursor"), 
    __metadata('design:type', String), 
    __metadata('design:paramtypes', [String])
], DroppableComponent.prototype, "effectcursor", null);
DroppableComponent = __decorate([
    core_2.Directive({ selector: '[dnd-droppable]' }), 
    __metadata('design:paramtypes', [core_2.ElementRef, dnd_service_1.DragDropService, dnd_config_1.DragDropConfig, core_1.ChangeDetectorRef])
], DroppableComponent);
exports.DroppableComponent = DroppableComponent;
