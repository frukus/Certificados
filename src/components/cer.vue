<template>
  <div>
    <h1>Certisss</h1>
    <h2> {{ certis.telf }} </h2>
    <p><router-link to="/">Back</router-link></p>
  </div>
</template>

<script>

export default {
  computed: {
    hhh () {
      const id = parseInt(this.$route.params.id)
      return this.$store.state.certis.filter(function (c) {
        return c.id === id
      })[0]
    }
  }
}
</script>

<style>

</style>
