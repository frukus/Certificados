<template>
  <div class="full_screen2">
    <div class="contenedor">
      <h1 style="color:white;">ID de Certificados</h1>
      <ul style="padding:0;">
        <li class="lista" v-for="item of certis" :key="item.id">
          <spam> <router-link class="text" :to="'/prueba/' + item.id" exact> {{item.id}} </router-link></spam>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['certis'])
  }
}
</script>

<style>
.full_screen2{
  background-image: linear-gradient(to right, rgba(248, 27, 63, 0.8), rgb(98, 54, 153, 1)),
  url("../../src/assets/fondo.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
  margin: 0;
  padding: 0;
}
.lista{
  list-style-type: none;
  text-align: center;
  font-size: 1em;
}
.contenedor{
  margin-top: 50px;
}

@media (max-width: 700px){
  .contenedor{
    margin-top: 100px;
  }
}

</style>
