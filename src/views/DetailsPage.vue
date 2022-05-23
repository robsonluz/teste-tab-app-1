<template>
 
  <ion-page  class="bg">  
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Detalhe</ion-title>
        </ion-toolbar>
    </ion-header>    
    <ion-content style="--background: #f1453d;" :fullscreen="true">
        <h1>{{filme.titulo}}</h1>
        <h3>{{filme.sinopse}}</h3>
        <img :src="filme.fotoCapa">

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
  },
  setup() {
    return { pin, walk, warning, wifi, wine, heart };
  },
  data() {
      return {
          filme: {}
      }
  },  
  created() {
    var self = this;
    var id = this.$route.params.id;
    
    self.axios.get("filmes/" + id + "/").then((response) => {
      self.filme = response.data;
    })
  }, 
});
</script>

<style scoped>
.bg {
    background-color: aqua!important;
}
</style>