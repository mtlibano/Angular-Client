import { EventEmitter, Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  public emitEvent = new EventEmitter();
  public emitClient = new EventEmitter();
  clientSelected: Client = {
    name: '',
    email: '',
    password: '',
    dateBirth: new Date(''),
  };

  constructor() {}

  clients: Client[] = [
    {
      name: 'Max',
      email: 'maxtlac@trier.com',
      password: 'qwerty',
      dateBirth: new Date('10/10/1992'),
    },
    {
      name: 'Niki',
      email: 'niki@trier.com',
      password: '123456',
      dateBirth: new Date('10/10/1997'),
    },
  ];

  public addClient(
    name: string,
    email: string,
    password: string,
    dateBirth: Date
  ) {
    this.clients.push({
      name: name,
      email: email,
      password: password,
      dateBirth: dateBirth,
    });
    this.emitEvent.emit(this.clients.length);
    return this.clients;
  }

  public getListAll() {
    return this.clients;
  }

  public removeClient(index: number) {
    return this.clients.splice(index, 1);
  }

  public getClient(index: number) {
    this.clientSelected = this.clients[index];
    this.emitClient.emit(this.clientSelected);
  }
}
