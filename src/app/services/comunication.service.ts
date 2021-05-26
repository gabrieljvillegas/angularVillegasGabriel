import { Injectable } from '@angular/core';
import { Mensaje } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class ComunicationService {
  receivedMessages: Mensaje[] = [
    {
      remitent: 'Gabriel Villegas',
      destinatary: 'Jose ',
      content: 'Este es un mensaje de prueba',
    },
  ];

  constructor() {}
}
