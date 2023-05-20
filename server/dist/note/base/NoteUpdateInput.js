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
exports.NoteUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const CategoryUpdateManyWithoutNotesInput_1 = require("./CategoryUpdateManyWithoutNotesInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const UserWhereUniqueInput_1 = require("../../user/base/UserWhereUniqueInput");
let NoteUpdateInput = class NoteUpdateInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => CategoryUpdateManyWithoutNotesInput_1.CategoryUpdateManyWithoutNotesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CategoryUpdateManyWithoutNotesInput_1.CategoryUpdateManyWithoutNotesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => CategoryUpdateManyWithoutNotesInput_1.CategoryUpdateManyWithoutNotesInput, {
        nullable: true,
    }),
    __metadata("design:type", CategoryUpdateManyWithoutNotesInput_1.CategoryUpdateManyWithoutNotesInput)
], NoteUpdateInput.prototype, "categories", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], NoteUpdateInput.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], NoteUpdateInput.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], NoteUpdateInput.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: String,
    }),
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => String, {
        nullable: true,
    }),
    __metadata("design:type", String)
], NoteUpdateInput.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => UserWhereUniqueInput_1.UserWhereUniqueInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => UserWhereUniqueInput_1.UserWhereUniqueInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], NoteUpdateInput.prototype, "user", void 0);
NoteUpdateInput = __decorate([
    graphql_1.InputType()
], NoteUpdateInput);
exports.NoteUpdateInput = NoteUpdateInput;
//# sourceMappingURL=NoteUpdateInput.js.map