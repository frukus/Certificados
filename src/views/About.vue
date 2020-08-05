<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul v-for="item of certis" :key="item.id">
      <li>
        <h1> <router-link :to="'/prueba/' + item.id" exact> {{item.id}} </router-link> {{item.name}} </h1>
      </li>
    </ul>
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

</style>
