import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.page.html',
  styleUrls: ['./rotas.page.scss'],
})
export class RotasPage {

  constructor() { }

  linha = {
    rua1: 'linha 1 - Terminal Urbano', horarios1: [8, 16 ] ,
    rua2: 'linha 1 - São Judas Tadeu', horarios2: [8, 17 ] ,
  };
}
