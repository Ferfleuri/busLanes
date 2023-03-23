import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RotasPage } from '../rotas/rotas.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private modalCtrl: ModalController) {}

  async openModal(rota: any) {
      const modal = await this.modalCtrl.create({
        component : RotasPage,
        componentProps: { rota: rota },
      });
      modal.present();
  }

}
