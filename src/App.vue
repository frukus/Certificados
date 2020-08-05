<template>
  <div>
    <div class="relative">
      <div class="nav">
        <router-link class="text" to="/" >Webinar</router-link>

        <router-link class="text" to="/" >Personas Certificadas</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
  html, body{
    margin: 0px;
    padding: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .full_screen{
  background-image: linear-gradient(to right, rgba(248, 27, 63, 0.8), rgb(98, 54, 153, 1)),
  url("assets/fondo.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.webinar_title{
  font-size: 20px;
  color: white;
}
.webinar_title h1{
  font-size: 4em;
  display: block;
  text-align: center;
  margin: 0;
  padding: 0;
}
.webinar_title spam{
  font-size: 2.5em;
  display: block;
  font-variant: normal;
  text-align: center;
  margin: 0;
  padding: 0;
}
.qr_container{
  width: 250px;
  background-size: cover;
  display: block;
  margin: 30px auto;
}
.img_container{
  margin: 10px auto;
  display: flex;
  justify-content: center;
}
.img_size{
  height: 50px;
  margin: 0 30px;
}
  .relative{
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .nav{
    margin-top: 20px;
  }
  .text{
    text-decoration: none;
    color: white;
    margin: 0 10px;
  }
  .text:hover{
    cursor: default;
    text-decoration: underline;
  }
  .webinar_title p{
  font-size: 1,7 em;
  display: block;
  text-align: center;
  margin: 20px auto;
  width: 70%;
}
.webinar_title table{
  margin: 30px auto;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 1,7 em;
  padding: 10px;
}
.td_iz{
  text-align: right;
}
@media (max-width: 500px){
  .text{
    display: block;
    text-align: center;
    margin-top:10px;
  }
  .webinar_title table{
    margin: 30px auto;
    width: 80%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 2 em;
  }
}
@media (max-width: 700px){
  .img_container{
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
}
.img_size{
  height: 25px;
  margin: 0 10px;
}
.webinar_title{
  margin-top: 50px;
}
}
</style>
