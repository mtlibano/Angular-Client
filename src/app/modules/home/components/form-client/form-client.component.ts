import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  clientSelected?: Client = {
    name: '',
    email: '',
    password: '',
    dateBirth: new Date(''),
  };

  constructor(private service: ClientService) {}

  public addClientForm(
    name: string,
    email: string,
    password: string,
    dateBirth: Date
  ) {
    return this.service.addClient(name, email, password, dateBirth);
  }

  ngOnInit(): void {
    this.service.emitClient.subscribe((client: Client) => {
      this.clientSelected = client;
    });
  }
}
