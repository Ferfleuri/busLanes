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
  linha2: any[]= [];
  linha5: any[] = [];
  linha1horario1: any[] = [];
  linha1horario2: any[] = [];
  linha2horario1: any[] = [];
  linha2horario2: any[] = [];
  linha2horario3: any[] = [];
  linha2horario4: any[] = [];
  linha5horario1: any[] = [];
  linha5horario2: any[] = [];

  constructor(private linesService: LinesService ) { }

  async ngOnInit() {
  this.linesService.getLines().subscribe((res: any) => {
    this.linhas = (res);
    console.log(this.linhas)

    this.linha1 = this.linhas.filter((e: any) => e.linhas === "Linha 1")
    this.linha1horario1 = this.linha1.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano(centro)")
    this.linha1horario2 = this.linha1.filter((e: any) => e.horarios.semana === "Segunda á Sábado - São Judas Tadeu")

    this.linha2 = this.linhas.filter((e: any) => e.linhas === "Linha 2")
    this.linha2horario1 = this.linha2.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha2horario2 = this.linha2.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Alfredo Guedes")
    this.linha2horario3 = this.linha2.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Terminal Urbano (centro)")
    this.linha2horario4 = this.linha2.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Alfredo Guedes")

    this.linha5 = this.linhas.filter((e: any) => e.linhas === "Linha 5")
    this.linha5horario1 = this.linha5.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")
    this.linha5horario2 = this.linha5.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")
  })

}



}
