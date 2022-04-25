<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button>
              <img src="../assets/avatar-finn.png">
            </ion-button>
          </ion-buttons>     
          <ion-title>Título</ion-title>   
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" center>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      testesteste
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default defineComponent({
  name: 'Tab3Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
