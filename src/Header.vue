<template>
    <header class="header">
        <img src="./assets/img/Logo.svg" alt="">
        <nav class="navigation__header">
            <router-link :to="'/'">
                Форма
            </router-link>
            <router-link :to="'/Preview'">
                Превью
            </router-link>
        </nav>
    </header>
</template>

<script>
import './assets/css/Header.css';
export default {
    name: "Header"
}
</script>

<style>
    .navigation__header{
        margin: 0px auto;
        display: flex;
        column-gap: 10px;
    }

    .navigation__header a{
        text-decoration: none;
        color: #1111117A;
        font-family: 'Montserrat', sans-serif;
    }
</style>