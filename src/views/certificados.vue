<template>
  <div>
    <h1>Lista</h1>
    <ul v-for="item of certis" :key="item.id">
      <li>
        <h1> {{item.id}} {{item.name}} </h1>
      </li>
    </ul>
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
