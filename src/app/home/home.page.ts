import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { TestModal} from '../test-modal/test-modal';

declare var window; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public modalCtrl:ModalController) { 

  }
  ngOnInit() { 
    setInterval(()=> { 
      console.log( "Window width: " +  window.innerWidth + " Window height: "  + window.innerHeight + " at " + Date());

    }, 3000); 
  }
  async startModal(){ 
    let modal = await this.modalCtrl.create({component:TestModal}); 
    modal.present(); 

    modal.onDidDismiss().then(modalDismissed=> { 
      console.log("Modal Dismissed");
    })
  }
}
