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
exports.CategoryUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const NoteUpdateManyWithoutCategoriesInput_1 = require("./NoteUpdateManyWithoutCategoriesInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const EnumCategoryOptions_1 = require("./EnumCategoryOptions");
let CategoryUpdateInput = class CategoryUpdateInput {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => NoteUpdateManyWithoutCategoriesInput_1.NoteUpdateManyWithoutCategoriesInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => NoteUpdateManyWithoutCategoriesInput_1.NoteUpdateManyWithoutCategoriesInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => NoteUpdateManyWithoutCategoriesInput_1.NoteUpdateManyWithoutCategoriesInput, {
        nullable: true,
    }),
    __metadata("design:type", NoteUpdateManyWithoutCategoriesInput_1.NoteUpdateManyWithoutCategoriesInput)
], CategoryUpdateInput.prototype, "notes", void 0);
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
    __metadata("design:type", Object)
], CategoryUpdateInput.prototype, "options", void 0);
CategoryUpdateInput = __decorate([
    graphql_1.InputType()
], CategoryUpdateInput);
exports.CategoryUpdateInput = CategoryUpdateInput;
//# sourceMappingURL=CategoryUpdateInput.js.map