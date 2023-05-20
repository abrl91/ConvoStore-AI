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
exports.UserUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const NoteUpdateManyWithoutUsersInput_1 = require("./NoteUpdateManyWithoutUsersInput");
const class_transformer_1 = require("class-transformer");
const custom_validators_1 = require("../../validators");
const graphql_type_json_1 = require("graphql-type-json");
let UserUpdateInput = class UserUpdateInput {
};
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
], UserUpdateInput.prototype, "firstName", void 0);
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
], UserUpdateInput.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
        type: () => NoteUpdateManyWithoutUsersInput_1.NoteUpdateManyWithoutUsersInput,
    }),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => NoteUpdateManyWithoutUsersInput_1.NoteUpdateManyWithoutUsersInput),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => NoteUpdateManyWithoutUsersInput_1.NoteUpdateManyWithoutUsersInput, {
        nullable: true,
    }),
    __metadata("design:type", NoteUpdateManyWithoutUsersInput_1.NoteUpdateManyWithoutUsersInput)
], UserUpdateInput.prototype, "notes", void 0);
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
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({
        required: false,
    }),
    custom_validators_1.IsJSONValue(),
    class_validator_1.IsOptional(),
    graphql_1.Field(() => graphql_type_json_1.GraphQLJSON, {
        nullable: true,
    }),
    __metadata("design:type", Object)
], UserUpdateInput.prototype, "roles", void 0);
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
], UserUpdateInput.prototype, "username", void 0);
UserUpdateInput = __decorate([
    graphql_1.InputType()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
//# sourceMappingURL=UserUpdateInput.js.map