<template>
 
  <ion-page>  
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Configurações</ion-title>
        </ion-toolbar>
    </ion-header>    
    <ion-content :fullscreen="true">
      <!-- Conteudo aqui -->

      <ion-searchbar class="ios"></ion-searchbar>

      <ion-card class="ion-text-center">
          <img src="../assets/avatar-finn.png" style="border-radius: 50%" />

        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>Madison, WI</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
          Wisconsin Territory in 1836.
        </ion-card-content>
      </ion-card>


      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>


      <ion-card>
        <ion-item>
          <ion-icon :icon="pin" slot="start"></ion-icon>
          <ion-label>ion-item in a card, icon left, button right</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags,
          within an ion-card-content element.
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon :icon="wifi" slot="start"></ion-icon>
          <ion-label>Card Link Item 1 activated</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon :icon="wine" slot="start"></ion-icon>
          <ion-label>Card Link Item 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon :icon="warning" slot="start"></ion-icon>
          <ion-label>Card Button Item 1 activated</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon :icon="walk" slot="start"></ion-icon>
          <ion-label>Card Button Item 2</ion-label>
        </ion-item>
      </ion-card>  


      <ion-card>
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>    

      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>            


  <ion-button fill="clear">
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>

    </ion-content>  

    <ion-footer>
      <ion-toolbar>
        <ion-title>Footer</ion-title>
      </ion-toolbar>
    </ion-footer>        
 
  </ion-page>

</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonBackButton

} from '@ionic/vue';
import { defineComponent } from 'vue';
import { pin, walk, warning, wifi, wine, heart } from 'ionicons/icons';


export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonContent,
    IonBackButton
  },
  setup() {
    return { pin, walk, warning, wifi, wine, heart };
  }  
});
</script>