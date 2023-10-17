import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../services/lines.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  linhas: any[] = [];
  linha1: any[] = [];
  linha1horario1: any[] = [];

  constructor(private linesService: LinesService ) { }

  async ngOnInit() {
  this.linesService.getLines().subscribe((res: any) => {
    this.linhas = (res);
    console.log(this.linhas)

    this.linha1 = this.linhas.filter((e: any) => e.linhas === "Linha 1")
    this.linha1horario1 = this.linha1.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano(centro)")
  })

}



}
