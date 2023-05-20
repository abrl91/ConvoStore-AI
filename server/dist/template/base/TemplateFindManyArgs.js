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
exports.TemplateFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const TemplateWhereInput_1 = require("./TemplateWhereInput");
const class_transformer_1 = require("class-transformer");
const TemplateOrderByInput_1 = require("./TemplateOrderByInput");
let TemplateFindManyArgs = class TemplateFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => TemplateWhereInput_1.TemplateWhereInput,
    }),
    graphql_1.Field(() => TemplateWhereInput_1.TemplateWhereInput, { nullable: true }),
    class_transformer_1.Type(() => TemplateWhereInput_1.TemplateWhereInput),
    __metadata("design:type", TemplateWhereInput_1.TemplateWhereInput)
], TemplateFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [TemplateOrderByInput_1.TemplateOrderByInput],
    }),
    graphql_1.Field(() => [TemplateOrderByInput_1.TemplateOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => TemplateOrderByInput_1.TemplateOrderByInput),
    __metadata("design:type", Array)
], TemplateFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TemplateFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], TemplateFindManyArgs.prototype, "take", void 0);
TemplateFindManyArgs = __decorate([
    graphql_1.ArgsType()
], TemplateFindManyArgs);
exports.TemplateFindManyArgs = TemplateFindManyArgs;
//# sourceMappingURL=TemplateFindManyArgs.js.map