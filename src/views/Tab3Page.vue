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


    <ion-row>
      <ion-col size="6" router-link="/settings">
        <img src="../assets/avatar-finn.png">
      </ion-col>
      <ion-col size="6">
        <img src="../assets/avatar-finn.png">
      </ion-col>
      <ion-col size="6">
        <img src="../assets/avatar-finn.png">
      </ion-col>
      <ion-col size="6">
        <img src="../assets/avatar-finn.png">
      </ion-col>                  
    </ion-row>      
      

    <!-- Use a trigger -->
    <ion-button @click="setOpen(true)">Show Modal</ion-button>
    <ion-modal trigger="trigger-button" :is-open="isOpenRef" :swipe-to-close="true">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Modal Content</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="setOpen(false)">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>Modal Content</ion-content>
    </ion-modal>


    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref  } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonModal, IonButton } from '@ionic/vue';


export default defineComponent({
  name: 'Tab3Page',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCol, IonModal, IonButton },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => {
      isOpenRef.value = state;
      console.log('fechando');

    };
    return { isOpenRef, setOpen }
  },
});
</script>
