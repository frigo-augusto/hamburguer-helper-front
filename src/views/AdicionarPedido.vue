<template>
    <main>
        <section id="center-container">
            <aside id="type-selector-container">
                <div class="option">Manoel Carlos</div>
                <div class="option">Homem das cavernas</div>
                <div class="option">Faustão</div>
            </aside>
            <div id ="orders-container">
                <div class="option">Manoel Carlos</div>
                <div class="option">Homem das cavernas</div>
                <div class="option">Faustão</div>
            </div>
        </section>
    </main>
</template>

<script>

</script>

<style>
    main{
        justify-content: center;
        display: flex;
        background-color: yellow;
        height: 100%;
    }

    #center-container{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }

    .option{
        background-color: red;
        padding: 30px;
        width: 150px;
        margin: 15px;
    }

    aside{
        width: 15%;
        display: flex;
        flex-direction: column;
    }
</style>