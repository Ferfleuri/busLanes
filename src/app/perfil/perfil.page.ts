import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../services/lines.service';

type Perfil = {
  idusuario: number
  nomeusuario: string
  telefone: number
  email: string
  cidade: string
  senha: string
  img: string
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  users: Perfil[] = []

  constructor(public linesService: LinesService) { }

  async ngOnInit() {
    this.linesService.getUsuarios().subscribe((res: any) => {
      this.users = res;
      console.log(this.users)
    })
  }

}
