<template>
  <div>
    <div id="TDCE0001"  class = "full_screen" >
        <div class = "webinar_title">
            <img class="qr_container" src="../assets/logo.svg">
            <h1>Certificado</h1>
            <div class="img_container">
              <img class="img_size" src="../assets/chamillo.svg">
              <img class="img_size" src="../assets/classroom.svg">
              <img class="img_size" src="../assets/moodle.svg">
            </div>
            <p>Esta página valida la emisión del certificado <strong>TDCE0001</strong> emitido por Overcron, a continuación se muestra los datos de la emision correspondiente.</p>
            <table>
              <tbody>
                  <tr>
                      <td class="td_iz">
                          Receptor:
                      </td>
                      <td>
                          Fulanito ssasasas
                      </td>
                  </tr>
                  <tr>
                      <td class="td_iz">
                          ID:
                      </td>
                      <td>
                          TDCE0001
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
    <h1> primer certificado {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
