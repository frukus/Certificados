<template>
  <div>
    <h1>Certisss</h1>
    <div>
      {{ hhh.name }} {{hhh.telf}}
    </div>
    <p><router-link to="/about">Back</router-link></p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['certis']),
    hhh () {
      const id = parseInt(this.$route.params.id)
      return this.certis.filter(function (c) {
        return c.id === id
      })[0]
    }
  }
}
</script>

<style>

</style>
