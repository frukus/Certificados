<template>
  <div>
    <h1>extra</h1>
    <extra1
      :certis="certis"
    ></extra1>
  </div>
</template>
<script>
import extra1 from '@/components/extra1.vue'
import { mapState } from 'vuex'
export default {
  components: {
    extra1
  },
  computed: {
    ...mapState(['certis'])
  }
}
</script>

<style>

</style>
