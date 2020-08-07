<template>
  <div class="full_screen2">
    <div class="contenedor">
      <h1 style="color:white;">ID de Certificados</h1>
      <div class="arrow-up"></div>
      <div class="scroll">
        <ul style="padding:0 0 0 15px;">
          <li class="lista" v-for="item of certis" :key="item.id">
            <span> <router-link class="text" :to="'/TDCE/' + item.id" exact> {{item.id}} </router-link></span>
          </li>
        </ul>
      </div>
      <div class="arrow-down"></div>
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
.arrow-up {
  margin: 10px auto;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
.arrow-down {
  margin: 10px auto;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
}
.scroll{
  width: 250px;
  height: calc(100vh - 250px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}
/* width */
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background:rgba(255, 255, 255, 0.7);
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:rgba(255, 255, 255, 1);
}
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
  .scroll{
  height: calc(100vh - 300px);
}
}

</style>
