<template>
    <main>
        <h1>Teste</h1>
        <h2>{{this.msg}}</h2>
        <h2>{{this.count}}</h2>
        <button @click="increment()">increment</button>
        <button @click="callAxios()"> hello-world</button>
        <button @click="sendExampleDto()">request com parametros</button>
    </main>
</template>

<script>
    import axios from 'axios';
    export default{
        name: 'test',
        data(){
            return{
                count: 0,
                anotherVariable: "asdasdadasd",
                msg: "initialValue"
            }
        },

        methods:{
            increment(){
                this.count++;
            },
            callAxios(){
                axios.get("/hello-world").then(response => this.msg = response.data);
            },

            sendExampleDto(){
                axios({
                    method: 'post',
                    url: '/print-example-dto',
                    data: {
                        name: "jonas",
                        age: 17,
                        cellphone: "9999999"
                    }
                });

                axios({
                    method: 'post',
                    url: '/insert-order',
                    params:{
                        name: "name"
                    }
                });
            }
        },

        mounted(){
            //esse bloco de codigo executa antes de tudo
            console.log("dsfsafsafsadfsfsf");
        }
    }
</script>

<style scoped>
main{
    background-color: yellow;
}
</style>