<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button ></ion-menu-button>
        </ion-buttons>         
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      Teste
      <!-- Datetime in overlay -->
      <ion-button id="open-modal">Open Datetime Modal</ion-button>
      <ion-modal id="modalData" trigger="open-modal"
        :swipe-to-close="true"
                  @didDismiss="setOpen(false)"
        >
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Selecione uma data</ion-title>
            
          </ion-toolbar>
        </ion-header>        
        <ion-content>
          <ion-datetime></ion-datetime>
          <ion-button @click="modalData.dismiss()">Avançar</ion-button>
        </ion-content>
      </ion-modal>   

<ion-grid>
  <ion-row>
    <ion-col >
      <div>
        <img src="../assets/madison.jpg">
        <h3 class="top-left white" style="color:white">Madison</h3>
      </div>
    </ion-col>
    <ion-col >
      <div>
        <img src="../assets/madison.jpg">
        <h3 class="top-left white" style="color:white">Madison</h3>
      </div>
    </ion-col>
  </ion-row>
</ion-grid>         

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonModal } from '@ionic/vue';


export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonModal }
});
</script>

<style scoped>
/* Top left text */
.top-left {
  position: absolute;
  top: 0px;
  left: 16px;
}
</style>