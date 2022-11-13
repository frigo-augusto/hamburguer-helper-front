<template>
  <main>
    <section id="center-container">
      <h1>Hamburguer helper</h1>
      <div id="buttons-container">
        <button type="button" @click="$router.push('GerenciadorDePedidos')" class="btn btn-primary">Atendente</button>
        <button type="button" class="btn btn-primary">Cozinheiro</button>
        <button type="button" class="btn btn-primary">Caixa</button>
        {{this.msg}}
      </div>
    </section>

  </main>
</template>

<script>
import { isProxy } from 'vue';
import axios from 'axios';
export default {

  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
    
  },

  mounted(){
    
  }
}
</script>

<style scoped>
main{
  background-color: gray;
  text-align: center;
  justify-content: center;
  display: flex;
  min-height: 700px;
}

h1, h2 {
  font-weight: normal;
}

#center-container{
  width: 30%;
  background-color: yellow;
  margin-top: 150px;
  margin-bottom: 150px;
  border-radius: 25px;
}

#buttons-container{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button{
  width: 150px;
  padding: 30px;
  margin: 10px;
}

a {
  color: #42b983;
}
</style>
