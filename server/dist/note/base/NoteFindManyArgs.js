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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const NoteWhereInput_1 = require("./NoteWhereInput");
const class_transformer_1 = require("class-transformer");
const NoteOrderByInput_1 = require("./NoteOrderByInput");
let NoteFindManyArgs = class NoteFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => NoteWhereInput_1.NoteWhereInput,
    }),
    graphql_1.Field(() => NoteWhereInput_1.NoteWhereInput, { nullable: true }),
    class_transformer_1.Type(() => NoteWhereInput_1.NoteWhereInput),
    __metadata("design:type", NoteWhereInput_1.NoteWhereInput)
], NoteFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [NoteOrderByInput_1.NoteOrderByInput],
    }),
    graphql_1.Field(() => [NoteOrderByInput_1.NoteOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => NoteOrderByInput_1.NoteOrderByInput),
    __metadata("design:type", Array)
], NoteFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], NoteFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], NoteFindManyArgs.prototype, "take", void 0);
NoteFindManyArgs = __decorate([
    graphql_1.ArgsType()
], NoteFindManyArgs);
exports.NoteFindManyArgs = NoteFindManyArgs;
//# sourceMappingURL=NoteFindManyArgs.js.map