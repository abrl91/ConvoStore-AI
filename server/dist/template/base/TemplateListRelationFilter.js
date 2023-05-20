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
exports.TemplateListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TemplateWhereInput_1 = require("./TemplateWhereInput");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
let TemplateListRelationFilter = class TemplateListRelationFilter {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TemplateWhereInput_1.TemplateWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TemplateWhereInput_1.TemplateWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TemplateWhereInput_1.TemplateWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TemplateWhereInput_1.TemplateWhereInput)
], TemplateListRelationFilter.prototype, "every", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TemplateWhereInput_1.TemplateWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TemplateWhereInput_1.TemplateWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TemplateWhereInput_1.TemplateWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TemplateWhereInput_1.TemplateWhereInput)
], TemplateListRelationFilter.prototype, "some", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TemplateWhereInput_1.TemplateWhereInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => TemplateWhereInput_1.TemplateWhereInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => TemplateWhereInput_1.TemplateWhereInput, {
        nullable: true,
    }),
    __metadata("design:type", TemplateWhereInput_1.TemplateWhereInput)
], TemplateListRelationFilter.prototype, "none", void 0);
TemplateListRelationFilter = __decorate([
    graphql_1.InputType()
], TemplateListRelationFilter);
exports.TemplateListRelationFilter = TemplateListRelationFilter;
//# sourceMappingURL=TemplateListRelationFilter.js.map