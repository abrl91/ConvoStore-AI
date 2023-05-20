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
exports.CategoryWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const StringFilter_1 = require("../../util/StringFilter");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const NoteListRelationFilter_1 = require("../../note/base/NoteListRelationFilter");
const EnumCategoryOptions_1 = require("./EnumCategoryOptions");
let CategoryWhereInput = class CategoryWhereInput {
};
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
], CategoryWhereInput.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => NoteListRelationFilter_1.NoteListRelationFilter,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => NoteListRelationFilter_1.NoteListRelationFilter),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => NoteListRelationFilter_1.NoteListRelationFilter, {
        nullable: true,
    }),
    __metadata("design:type", NoteListRelationFilter_1.NoteListRelationFilter)
], CategoryWhereInput.prototype, "notes", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        enum: EnumCategoryOptions_1.EnumCategoryOptions,
    }),
    class_validator_1.IsEnum(EnumCategoryOptions_1.EnumCategoryOptions),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => EnumCategoryOptions_1.EnumCategoryOptions, {
        nullable: true,
    }),
    __metadata("design:type", String)
], CategoryWhereInput.prototype, "options", void 0);
CategoryWhereInput = __decorate([
    graphql_1.InputType()
], CategoryWhereInput);
exports.CategoryWhereInput = CategoryWhereInput;
//# sourceMappingURL=CategoryWhereInput.js.map