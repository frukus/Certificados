<template>
  <div>
    <h1>Lista</h1>
    <div>
      {{ $route.params }}
    </div>
    <router-link :to="{ name:'certificado', params: {id: item.id, nombre: item.name} }" v-for="(item,index) of certis" :key="index">
      <button>{{ item.name }}</button>
    </router-link>
    <caertificado/>
  </div>
</template>

<script>
import caertificado from '@/components/certificado.vue'
import { mapState } from 'vuex'
export default {
  components: {
    caertificado
  },
  computed: {
    ...mapState(['certis'])
  }

}
</script>

<style>

</style>
