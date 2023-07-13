import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ReadClientComponent } from './components/read-client/read-client.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FormClientComponent,
    HomeComponent,
    ReadClientComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
