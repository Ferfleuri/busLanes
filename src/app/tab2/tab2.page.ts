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
  linha6: any[] = [];
  linha7: any[] = [];
  linha8: any[] = [];
  linha10: any[] = [];
  linha11: any[] = [];
  linha15: any[] = [];
  linha19: any[] = [];
  linha1horario1: any[] = [];
  linha1horario2: any[] = [];
  linha2horario1: any[] = [];
  linha2horario2: any[] = [];
  linha2horario3: any[] = [];
  linha2horario4: any[] = [];
  linha5horario1: any[] = [];
  linha5horario2: any[] = [];
  linha5horario3: any[] = [];
  linha6horario1: any[] = [];
  linha6horario2: any[] = [];
  linha6horario3: any[] = [];
  linha6horario4: any[] = [];
  linha6horario5: any[] = [];
  linha6horario6: any[] = [];
  linha6horario7: any[] = [];
  linha7horario1: any[] = [];
  linha7horario2: any[] = [];
  linha7horario3: any[] = [];
  linha7horario4: any[] = [];
  linha8horario1: any[] = [];
  linha8horario2: any[] = [];
  linha8horario3: any[] = [];
  linha8horario4: any[] = [];
  linha8horario5: any[] = [];
  linha8horario6: any[] = [];
  linha8horario7: any[] = [];
  linha10horario1: any[] = [];
  linha10horario2: any[] = [];
  linha11horario1: any[] = [];
  linha15horario1: any[] = [];
  linha15horario2: any[] = [];
  linha15horario3: any[] = [];
  linha15horario4: any[] = [];
  linha19horario1: any[] = [];




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
    this.linha5horario2 = this.linha5.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha5horario3 = this.linha5.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Júlio Ferrari")

    this.linha6 = this.linhas.filter((e: any) => e.linhas === "Linha 6")
    this.linha6horario1 = this.linha6.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Monte Azul")
    this.linha6horario2 = this.linha6.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha6horario3 = this.linha6.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Júlio Ferrari")
    this.linha6horario4 = this.linha6.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Monte Azul")
    this.linha6horario5 = this.linha6.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Terminal Urbano (centro)")
    this.linha6horario6 = this.linha6.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Júlio Ferrari")
    this.linha6horario7 = this.linha6.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")

    this.linha7 = this.linhas.filter((e: any) => e.linhas === "Linha 7")
    this.linha7horario1 = this.linha7.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")
    this.linha7horario2 = this.linha7.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha7horario3 = this.linha7.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Cacap")


    this.linha8 = this.linhas.filter((e: any) => e.linhas === "Linha 8")
    this.linha8horario1 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")
    this.linha8horario2 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha8horario3 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Cecap")
    this.linha8horario4 = this.linha8.filter((e: any) => e.horarios.semana === "Domingo e Feriado - ETEC")
    this.linha8horario5 = this.linha8.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Terminal Urbano (centro)")
    this.linha8horario6 = this.linha8.filter((e: any) => e.horarios.semana === "Domingo e Feriado - Júlio Ferrari")
    this.linha8horario7 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Fórum")

    this.linha10 = this.linhas.filter((e: any) => e.linhas === "Linha 10")
    this.linha10horario1 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Fórum")
    this.linha10horario1 = this.linha8.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")

    this.linha11 = this.linhas.filter((e: any) => e.linhas === "Linha 11")
    this.linha11horario1 = this.linha11.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")

    this.linha15 = this.linhas.filter((e: any) => e.linhas === "Linha 15")
    this.linha15horario1 = this.linha15.filter((e: any) => e.horarios.semana === "Segunda á Sábado - Terminal Urbano (centro)")
    this.linha15horario2 = this.linha15.filter((e: any) => e.horarios.semana === "Segunda á Sexta - Distrito Industrial")
    this.linha15horario3 = this.linha15.filter((e: any) => e.horarios.semana === "Segunda á Sexta - Senai")
    this.linha15horario4 = this.linha15.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")

    this.linha19 = this.linhas.filter((e: any) => e.linhas === "Linha 19")
    this.linha19horario1 = this.linha19.filter((e: any) => e.horarios.semana === "Segunda á Sábado - ETEC")











  })

}



}
