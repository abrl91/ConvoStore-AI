import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class ChatService {
  async getGpt3Response(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt,
          max_tokens: 60,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        },
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get response from GPT-3 API');
    }
  }
}