<template>
  <div>
    <h2>
      extra1
    </h2>
    <extra2
      v-for="cer in certis"
      :certis="certis"
      :key="cer.id"
    ></extra2>
  </div>
</template>

<script>
import extra2 from '@/components/extra2.vue'
export default {
  components: {
    extra2
  },
  props: ['certis']
}
</script>

<style>

</style>
