<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AboutUs",
  data() {
    return {
      store,
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods:{
    sendEmail(){
      // console.log(this.formData);
      axios.post(`${this.store.api_url}/contact-form`, {
        name: this.formData.name,
        email: this.formData.email,
        message: this.formData.message,
      })
      .then((res) => {
          console.log(res.data);
      });
    },
  },

};
</script>

<template>
  <div class="container">
    <h5>Contattaci</h5>
    <div class="container">
      <form @submit.prevent="sendEmail()">
        <div class="mt-3">
          <label for="name">Nome</label>
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="Inserisci il tuo nome"
            v-model="formData.name"
          />
        </div>
        <div class="mt-3">
          <label for="email">Email</label>
          <input
            class="form-control"
            id="email"
            type="email"
            placeholder="Inserisci la tua email"
            v-model="formData.email"
          />
        </div>
        <div class="mt-3">
          <label for="message">Messaggio</label>
          <textarea
            class="form-control"
            id="message"
            cols="30"
            rows="10"
            placeholder="Inserisci il messaggio*"
            v-model="formData.message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Invia messaggio
        </button>
      </form>
    </div>
    
  </div>
</template>

<style lang="scss" scoped></style>