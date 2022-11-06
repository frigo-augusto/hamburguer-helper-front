<template>
  <main>
    <section id="center-container">
      <h1>Gerenciador de Pedidos</h1>
      <div id="buttons-container">
        <button type="button" @click="$router.push('example')" class="btn btn-primary">Adicionar</button>
        <button type="button" class="btn btn-primary">Editar</button>
        <button type="button" class="btn btn-primary">Excluir</button>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'GerenciadorDePedidos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
main{
  background-color: yellow;
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
  margin-top: 150px;
  margin-bottom: 150px;
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
</style>
