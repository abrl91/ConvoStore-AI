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
exports.NoteWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const CategoryListRelationFilter_1 = require("../../category/base/CategoryListRelationFilter");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const StringNullableFilter_1 = require("../../util/StringNullableFilter");
const StringFilter_1 = require("../../util/StringFilter");
const UserWhereUniqueInput_1 = require("../../user/base/UserWhereUniqueInput");
let NoteWhereInput = class NoteWhereInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => CategoryListRelationFilter_1.CategoryListRelationFilter,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => CategoryListRelationFilter_1.CategoryListRelationFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => CategoryListRelationFilter_1.CategoryListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", CategoryListRelationFilter_1.CategoryListRelationFilter)
], NoteWhereInput.prototype, "categories", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    class_transformer_1.Type(() => StringNullableFilter_1.StringNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NoteWhereInput.prototype, "content", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    class_transformer_1.Type(() => StringNullableFilter_1.StringNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NoteWhereInput.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], NoteWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringNullableFilter_1.StringNullableFilter,
    }),
    class_transformer_1.Type(() => StringNullableFilter_1.StringNullableFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringNullableFilter_1.StringNullableFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], NoteWhereInput.prototype, "slug", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: StringFilter_1.StringFilter,
    }),
    class_transformer_1.Type(() => StringFilter_1.StringFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => StringFilter_1.StringFilter, {
        nullable: true,
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], NoteWhereInput.prototype, "title", void 0);
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
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], NoteWhereInput.prototype, "user", void 0);
NoteWhereInput = __decorate([
    graphql_1.InputType()
], NoteWhereInput);
exports.NoteWhereInput = NoteWhereInput;
//# sourceMappingURL=NoteWhereInput.js.map