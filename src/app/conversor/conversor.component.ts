import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  BRL: number = 0;
  USD: number = 0;
  EUR: number = 0;
  GBP: number = 0;
  resposta: string = "";

  Converter(): void {
    this.resposta = "$:" + (this.BRL / this.USD).toFixed(2)
      + "\n" + "€: " + (this.BRL / this.EUR).toFixed(2)
      + "\n" + "£: " + (this.BRL / this.GBP).toFixed(2);
  }
}

