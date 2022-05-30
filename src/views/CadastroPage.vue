<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="floating">E-mail</ion-label>
        <ion-input readonly="true" v-model="usuario.email"></ion-input>
      </ion-item>

      <ion-item >
        <ion-label position="floating">Nome</ion-label>
        <ion-input v-model="usuario.nome"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Telefone</ion-label>
        <ion-input v-model="usuario.telefone"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Cidade</ion-label>
        <ion-select v-model="usuario.cidade">
          <ion-select-option
            v-for="(cidade, index) in cidades"
            :key="index"
            :value="cidade.id"
            >{{ cidade.nome }}</ion-select-option
          >
        </ion-select>
      </ion-item>

      <br /><br />
      <ion-button color="primary" expand="block" @click="cadastrar()"
        >Cadastrar</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { useIonRouter } from "@ionic/vue";
import { useStore } from "vuex";
import { key } from "../store";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonInput,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const ionRouter = useIonRouter();
    const store = useStore(key);
    return { ionRouter, store };
  },
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        telefone: "",
        cidade: null,
      },
      currentUser: null,
      cidades: [],
    };
  },
  created() {
    var self = this;
    //Chama a api para buscar as cidades
    this.axios.get("cidades/").then((response) => {
      self.cidades = response.data;
    });

    //Busca o usuario logado para já preencher o e-mail na tela de cadastro
    this.axios.get("currentuser/").then((response) => {
      console.log(response);
      self.currentUser = response.data;
      if (response.data) {
        self.usuario.email = response.data.username;
      }
    });
  },
  methods: {
    cadastrar() {
      var self = this;
      if (this.currentUser == null) {
        self.ionRouter.push("/login");
      } else {
        //Chama a api para criar o usuário
        this.axios.post("usuarios-create/", this.usuario).then((response) => {
          console.log(response);

          //Mostra a mensagem de sucesso
          //self.$buefy.dialog.alert("Cadastro realizado com sucesso!");

          //Navega para a home após o cadastro, pode ser alterado para qualquer rota
          self.ionRouter.push("/");
        });
      }
    }
  },
});
</script>