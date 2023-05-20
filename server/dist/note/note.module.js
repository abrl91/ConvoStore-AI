"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModule = void 0;
const common_1 = require("@nestjs/common");
const note_module_base_1 = require("./base/note.module.base");
const note_service_1 = require("./note.service");
const note_resolver_1 = require("./note.resolver");
let NoteModule = class NoteModule {
};
NoteModule = __decorate([
    common_1.Module({
        imports: [note_module_base_1.NoteModuleBase],
        providers: [note_service_1.NoteService, note_resolver_1.NoteResolver],
        exports: [note_service_1.NoteService],
    })
], NoteModule);
exports.NoteModule = NoteModule;
//# sourceMappingURL=note.module.js.map