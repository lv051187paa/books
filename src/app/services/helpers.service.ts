import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(public flashMessage: FlashMessagesService) { }

  showFlash = (text: string, alertStyle: string) => this.flashMessage.show(text, {
    cssClass: `alert-${alertStyle}`,
    showCloseBtn: true,
    closeOnClick: true,
    timeout: 5000
  })
}
