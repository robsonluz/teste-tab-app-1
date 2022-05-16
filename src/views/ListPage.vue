<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button ></ion-menu-button>
        </ion-buttons>         
        <ion-title>Listagem</ion-title>
        
        <ion-buttons slot="primary">
          <ion-button id="menu-button">
            <ion-icon slot="icon-only" :icon="ellipsisVertical" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>        

        <ion-popover trigger="menu-button" side="bottom" alignment="end">
          <ion-content>
            <ion-list>
              <ion-item :button="true" :detail="false">
                <ion-label>Option 1</ion-label>
              </ion-item>
              <ion-item :button="true" :detail="false">
                <ion-label>Option 2</ion-label>
              </ion-item>              
            </ion-list>
          </ion-content>
        </ion-popover>        
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Filmes</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-list>
        <ion-list-header> Filmes </ion-list-header>
        <ion-item v-for="(filme, index) in filmes" :key="index" :router-link="'/details/' + filme.id">
          <ion-label>
            <h2>{{filme.titulo}}</h2>
            <h3>{{filme.sinopse}}</h3>
          </ion-label>
        </ion-item>
             
      </ion-list>      
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/vue';
import { ellipsisVertical, ellipsisHorizontal } from 'ionicons/icons';


export default  defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonItem },
  data() {
      return {
          filmes: []
      }
  },  
  created() {
    var self = this;
    self.axios.get('filmes/').then((response) => {
      self.filmes = response.data;
    })
  },  
  setup() {
    return {
      ellipsisVertical, ellipsisHorizontal
    }
  }  
});
</script>
