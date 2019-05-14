import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { TestModal} from '../test-modal/test-modal';

declare var window; 
declare var body; 


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  originalBodyHeight; 
  currentHeight; 
  windowBasedHeight = false; 
 
  constructor(public modalCtrl:ModalController) { 

  }
  ngOnInit() { 
    setInterval(()=> { 
      console.log( "Window width: " +  window.innerWidth + " Window height: "  + window.innerHeight + " body clientHeight " + document.body.clientHeight + " at " + Date());
  
      console.log("Document.body.clientHeight;", document.body.clientHeight);
    }, 3000); 
  }

  toggleHeight() { 
    // switch between standard body 100% height and window.innerHeight based height 
    if (this.windowBasedHeight) { 
      console.log("Remove body height style "); 
      document.body.style.height = '';
      this.windowBasedHeight = false;  

    } else { 
      console.log("Change body height to window.innerHeight"); 
      this.originalBodyHeight = document.body.clientHeight; 
      console.log("Original BodyHeight: " + this.originalBodyHeight); 
      document.body.style.height = window.innerHeight + 'px'; 
      this.windowBasedHeight = true; 
    } 
    this.currentHeight = document.body.style.height; 
    console.log("Changed document.body.style.height:", this.currentHeight ); 


  }
  async startModal(){ 
 
    let originalHeight = document.body.style.height; 
    document.body.style.height = window.innerHeight + 'px'; 
    let modal = await this.modalCtrl.create({component:TestModal}); 
    modal.present(); 

    modal.onDidDismiss().then(modalDismissed=> { 
      console.log("Modal Dismissed");

      setTimeout(()=> { 
        document.body.style.height = originalHeight; 
    
      }, 2000); 

    })
   
  }
}
