import { Component, OnInit } from '@angular/core';
import { LinesService } from '../../services/lines.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  linhas = [];

  constructor(private linesService: LinesService ) { }

  async ngOnInit() {
  this.linesService.getLines('horarios').subscribe((res: any) => {this.linhas = (res.content); console.log(this.linhas)})
  }


}
