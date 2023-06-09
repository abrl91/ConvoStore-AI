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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const chat_service_1 = require("./chat.service");
let ChatResolver = class ChatResolver {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async getGpt3Response(prompt) {
        return this.chatService.getGpt3Response(prompt);
    }
};
__decorate([
    graphql_1.Query(() => String),
    __param(0, graphql_1.Args('prompt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "getGpt3Response", null);
ChatResolver = __decorate([
    graphql_1.Resolver('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatResolver);
exports.ChatResolver = ChatResolver;
//# sourceMappingURL=chat.resolver.js.map