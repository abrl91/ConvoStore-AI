"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let ChatService = class ChatService {
    async getGpt3Response(prompt) {
        try {
            const response = await axios_1.default.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt,
                max_tokens: 60,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            });
            return response.data.choices[0].text.trim();
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to get response from GPT-3 API');
        }
    }
};
ChatService = __decorate([
    common_1.Injectable()
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map