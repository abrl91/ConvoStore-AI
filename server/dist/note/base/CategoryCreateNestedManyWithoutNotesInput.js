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
exports.CategoryCreateNestedManyWithoutNotesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const CategoryWhereUniqueInput_1 = require("../../category/base/CategoryWhereUniqueInput");
const swagger_1 = require("@nestjs/swagger");
let CategoryCreateNestedManyWithoutNotesInput = class CategoryCreateNestedManyWithoutNotesInput {
};
__decorate([
    graphql_1.Field(() => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput], {
        nullable: true,
    }),
    swagger_1.ApiProperty({
        required: false,
        type: () => [CategoryWhereUniqueInput_1.CategoryWhereUniqueInput],
    }),
    __metadata("design:type", Array)
], CategoryCreateNestedManyWithoutNotesInput.prototype, "connect", void 0);
CategoryCreateNestedManyWithoutNotesInput = __decorate([
    graphql_1.InputType()
], CategoryCreateNestedManyWithoutNotesInput);
exports.CategoryCreateNestedManyWithoutNotesInput = CategoryCreateNestedManyWithoutNotesInput;
//# sourceMappingURL=CategoryCreateNestedManyWithoutNotesInput.js.map