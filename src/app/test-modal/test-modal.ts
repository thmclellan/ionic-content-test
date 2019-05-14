import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({
  selector: 'test-modal',
  templateUrl: 'test-modal.html',
  styleUrls: ['test-modal.scss'],
})
export class TestModal {

    constructor(public modalCtrl:ModalController) { 

    }
    close() { 
        this.modalCtrl.dismiss({});
    }
}
