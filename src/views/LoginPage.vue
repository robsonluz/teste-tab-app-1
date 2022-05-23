<template>
 
  <ion-page>  
    <ion-header>
        <ion-toolbar color="primary">
            <ion-title>Login</ion-title>
        </ion-toolbar>
    </ion-header>    
    <ion-content :fullscreen="true">
      <!-- Conteudo aqui -->

      
      <ion-button color="primary" @click="google()">Login com Google</ion-button>

    </ion-content>  

 
  </ion-page>

</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
} from '@ionic/vue';
import { defineComponent } from 'vue';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useIonRouter } from '@ionic/vue';


export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent
  },
  setup() {
    const ionRouter = useIonRouter();
    return { ionRouter };
  },
  methods: {
      google() {
        var provider = new GoogleAuthProvider();

            var self = this;
            const auth = getAuth();
            signInWithPopup(auth, provider).then((result) => {
                console.log(result.user);
                var pass = result.user.uid;
                var email = result.user.email;
                console.log(email, pass);

                const formData = new FormData();
                formData.append('username', email);
                formData.append('password', pass);

                
                
                self.axios.post('login/', formData).then((response) => {
                  console.log('resposta do login');
                  console.log('logado', response);
                  self.ionRouter.push('/');
                  //self.duvidas = response.data;
                }).catch(function (error) {
                  console.log('error', error);
                  if (error.response && error.response.data) {
                    var user = {
                      username: email,
                      password: pass
                    };
                    self.axios.post('user-registration/', user).then((responseUr) => {
                      console.log(responseUr);
                      self.axios.post('login/', formData).then((responseLogin) => {
                        console.log('logado', responseLogin);
                        self.ionRouter.push('/');
                      });
                    });
                  }
                  
                });

            }).catch((error) => {
                console.log(error);
            });
      }
    }  
});
</script>