<template>
  <div id="TDCE0001"  class = "full_screen" >
    <div class = "webinar_title">
        <img class="qr_container" src="../assets/logo.svg">
        <h1>Certificado</h1>
        <div class="img_container">
          <img class="img_size" src="../assets/chamillo.svg">
          <img class="img_size" src="../assets/classroom.svg">
          <img class="img_size" src="../assets/moodle.svg">
        </div>
        <p>Esta página valida la emisión del certificado <strong>{{hhh.id}}</strong> emitido por Overcron, a continuación se muestra los datos de la emisión correspondiente.</p>
        <table>
          <tbody>
              <tr>
                  <td class="td_iz">
                      Receptor:
                  </td>
                  <td>
                      {{ hhh.name }}
                  </td>
              </tr>
              <tr>
                  <td class="td_iz">
                      ID:
                  </td>
                  <td>
                      {{hhh.id}}
                  </td>
              </tr>
              <tr>
                  <td class="td_iz">
                      WEBINAR:
                  </td>
                  <td>
                      Transformación digital en centros educativos.
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cer',
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
