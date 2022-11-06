<template>
    <main>
        <h1>Teste</h1>
        <h2>{{this.anotherVariable}}</h2>
        <h2>{{this.count}}</h2>
        <button @click="increment()">increment</button>
    </main>
</template>

<script>
    export default{
        name: 'test',
        data(){
            return{
                count: 0,
                anotherVariable: "asdasdadasd"
            }
        },

        methods:{
            increment(){
                this.count++;
            }
        },

        mounted(){
            //esse bloco de codigo executa antes de tudo
            console.log("dsfsafsafsadfsfsf");
        }
    }
</script>

<style>
main{
    background-color: yellow;
}
</style>