export class CreateOpenaiDto {
  model: string;
  messages: MessageDto[];
}

export class MessageDto {
  role: string;
  content: string;
}

