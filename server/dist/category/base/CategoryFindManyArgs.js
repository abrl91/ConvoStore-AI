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
exports.CategoryFindManyArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const CategoryWhereInput_1 = require("./CategoryWhereInput");
const class_transformer_1 = require("class-transformer");
const CategoryOrderByInput_1 = require("./CategoryOrderByInput");
let CategoryFindManyArgs = class CategoryFindManyArgs {
};
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => CategoryWhereInput_1.CategoryWhereInput,
    }),
    graphql_1.Field(() => CategoryWhereInput_1.CategoryWhereInput, { nullable: true }),
    class_transformer_1.Type(() => CategoryWhereInput_1.CategoryWhereInput),
    __metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryFindManyArgs.prototype, "where", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: [CategoryOrderByInput_1.CategoryOrderByInput],
    }),
    graphql_1.Field(() => [CategoryOrderByInput_1.CategoryOrderByInput], { nullable: true }),
    class_transformer_1.Type(() => CategoryOrderByInput_1.CategoryOrderByInput),
    __metadata("design:type", Array)
], CategoryFindManyArgs.prototype, "orderBy", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], CategoryFindManyArgs.prototype, "skip", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: Number,
    }),
    graphql_1.Field(() => Number, { nullable: true }),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], CategoryFindManyArgs.prototype, "take", void 0);
CategoryFindManyArgs = __decorate([
    graphql_1.ArgsType()
], CategoryFindManyArgs);
exports.CategoryFindManyArgs = CategoryFindManyArgs;
//# sourceMappingURL=CategoryFindManyArgs.js.map