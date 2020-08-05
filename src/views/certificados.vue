<template>
  <div>
    <h1>Lista</h1>
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
