<template>
 
  <ion-page>  
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Slides</ion-title>
        </ion-toolbar>
    </ion-header>    
    <ion-content :fullscreen="true">
        <ion-slides id="slideShow" pager="false" :options="slideOpts">
            <ion-slide>
                <div class="slide">
                    <h1>Slide 1</h1>
                    <br><br>
                    <ion-list>
                        <ion-item>
                            <ion-label position="floating">Floating Label</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Floating Label</ion-label>
                            <ion-input></ion-input>
                        </ion-item>                        
                    </ion-list>
                    <br>
                    <ion-button color="primary" @click="proximoSlide()">Próximo</ion-button>
                </div>
            </ion-slide>
            <ion-slide>
                <h1>Slide 2</h1>
                <br><br><br>
            </ion-slide>
            <ion-slide>
                <h1>Slide 3</h1>
                <br><br><br>
            </ion-slide>
        </ion-slides>

    </ion-content>  
     
 
  </ion-page>

</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonBackButton,
  IonSlides,
  IonSlide

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
    IonBackButton,
    IonSlides,
    IonSlide    
  },
  setup() {
    return { pin, walk, warning, wifi, wine, heart };
  },
  methods: {
      proximoSlide:function(){
          this.$el.querySelector("#slideShow").slideNext();
      }
  } 
});
</script>