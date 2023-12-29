import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  PerfectScrollbarComponent,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements AfterViewInit {
  @ViewChild('perfectScroll') perfectScroll!: PerfectScrollbarComponent;

  messages = [
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
    {
      text: 'Teste Grande de envio. teste teste teste teste testetetetedsa sadadsadas asdsadasedfsza asdasdasdasdsad dsadas adasdas adasd asd aaasdasw asd dsadsadas asdasdsa adasdasda asddasdsa dasrqwdcqdqw asdasdasdsa',
      date: new Date(),
      recived: false,
    },
    { text: 'Teste curto recibo', date: new Date(), recived: true },
  ];

  ngAfterViewInit(): void {
    this.perfectScroll.directiveRef.update(); //for update scroll
    this.perfectScroll.directiveRef.scrollToBottom(); //for update scrolll
  }
}
