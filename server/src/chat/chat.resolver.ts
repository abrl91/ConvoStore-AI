import { Args, Query, Resolver } from "@nestjs/graphql";
import { ChatService } from "./chat.service";

@Resolver('chat')
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query(() => String)
  async getGpt3Response(@Args('prompt') prompt: string) {
    return this.chatService.getGpt3Response(prompt);
  }
}