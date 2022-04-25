<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button ></ion-menu-button>
        </ion-buttons>        
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
    


      <ion-button expand="block" shape="round" fill="outline">
        Right Icon x
        <ion-icon slot="end" :icon="star"></ion-icon>
      </ion-button>   


      <ion-item detail="true" href="https://www.ionicframework.com">
        <ion-label>
          Anchor Item with no Detail Arrow
        </ion-label>
      </ion-item>   

  <ion-item>
    <ion-button slot="start">
      Start
    </ion-button>
    <ion-label>Button Start/End</ion-label>
    <ion-button slot="end">
      End
    </ion-button>
  </ion-item>     

<!--
    <ion-item lines="none" detail color="primary" router-link="/tabs/tab2">
      <ion-label>
        No Lines Item
      </ion-label>
    </ion-item>  
-->    

  <ion-item button lines="none" detail color="primary" routerLink="/settings" router-link="/settings" >
    <ion-label>
      Button Item with Detail Arrow y
    </ion-label>
  </ion-item>  

<ion-button router-link="/settings">Go to detail</ion-button>     

  <router-link to="/tabs/tab2">Tab1</router-link>     
        
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import { star } from 'ionicons/icons';

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      star
    }
  }   
});
</script>
<style>

.ion-button-left {
    text-align:left;
    width:100%;
}
</style>