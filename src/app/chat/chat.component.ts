import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: { user: string, text: string }[] = [];
  userInput: string = '';

  constructor() { }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ user: 'user', text: this.userInput });

      let botResponse = this.getBotResponse(this.userInput);

      setTimeout(() => {
        this.messages.push({ user: 'bot', text: botResponse });
      }, 1000);

      this.userInput = '';
    }
  }

  getBotResponse(userMessage: string): string {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes('hi')) {
      return 'Hello, are you interested in the phone operating system ios or android?';
    } else if (userMessage.includes('ios')) {
      return 'Here are the iOS phone models we recommend.\n1.Iphone 15 plus \n Display: 6.7-inch Super Retina XDR\nProcessor: A16 Bionic chip\nRAM: 6 GB  \nStorage: 128 GB / 256 GB / 512 GB\nBattery: 4383 mAh \nCamera: 48MP\nOS: iOS 17 \nCost: 29,900 /33,900 /41,900 baht \nThis is the official website that sells this phone. \nhttps://www.apple.com/th/shop/buy-iphone/iphone-15';
    } else {
      return 'Sorry, I dont understand this question.';
    }
  }
}
