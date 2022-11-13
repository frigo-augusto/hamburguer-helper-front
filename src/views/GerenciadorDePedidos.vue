<template>
    <main>
      <section id="center-container">
        <h1>Gerenciador de pedidos</h1>
        <div id="buttons-container">
          <button type="button" @click="$router.push('adicionar-pedido')" class="btn btn-primary">Adicionar</button>
          <button type="button" @click="$router.push('editar-pedido')" class="btn btn-primary">Editar</button>
          <button type="button" @click="$router.push('remover-pedido')" class="btn btn-primary">Excluir</button>
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
  