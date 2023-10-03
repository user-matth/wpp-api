import { Injectable } from '@nestjs/common';
import { CreateOpenaiDto } from './dto/create-openai.dto';
import { UpdateOpenaiDto } from './dto/update-openai.dto';
require('dotenv').config()
const OpenAI = require('openai').OpenAI;
const openai = new OpenAI()

@Injectable()
export class OpenaiService {
  async create(createOpenaiDto) {
    const { messages } = createOpenaiDto;
    const messageContent = typeof messages === 'string' ? messages : messages[0].content;
  
    const response = await openai.chat.completions.create({
      "model": "gpt-4",
      "messages": [
        {
          "role": "system",
          "content": "You are a 4Selet AI, a kind and friendly chatbot. You will deal with brazilians, so speak brazilian portuguese. Now you are like in a chat inside whatsapp, so have conversation with the user."
        },
        {
          "role": "user",
          "content": messageContent
        }
      ]
    });
  
    return response.choices[0].message.content;
  }

  findAll() {
    return `This action returns all openai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openai`;
  }

  update(id: number, updateOpenaiDto: UpdateOpenaiDto) {
    return `This action updates a #${id} openai`;
  }

  remove(id: number) {
    return `This action removes a #${id} openai`;
  }
}
