<template>
  <main id="app">
    <section id="center-container">
      <h1>Hamburguer helper</h1>
      <div id="buttons-container">
        <button type="button" class="btn btn-primary">Atendente</button>
        <button type="button" class="btn btn-primary">Cozinheiro</button>
        <button type="button" class="btn btn-primary">Caixa</button>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
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
}

#buttons-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

button{
  width: 150px;
  padding: 30px;
}

a {
  color: #42b983;
}
</style>
