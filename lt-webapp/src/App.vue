<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Main</router-link>
            |
            <router-link to="/home">Vue</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
    #app {
        // TODO 공용으로 빼기
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-flow: column;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        text-align: center;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
