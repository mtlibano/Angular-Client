import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-read-client',
  templateUrl: './read-client.component.html',
  styleUrls: ['./read-client.component.scss'],
})
export class ReadClientComponent implements OnInit {
  list: Client[] = [];

  constructor(private service: ClientService) {}

  ngOnInit(): void {
    this.list = this.service.getListAll();
  }

  deleteClient(index: number) {
    this.service.removeClient(index);
  }

  clickClient(index: number) {
    this.service.getClient(index);
  }
}
