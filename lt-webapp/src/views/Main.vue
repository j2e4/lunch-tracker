<template>
    <div class="lt-main">
        <div class="lt-main-content-area">

        </div>
        <BNav
            class="lt-main-nav"
            vertical
        >
            <BNavItem>
                <FontAwesomeIcon icon="home" />
            </BNavItem>
        </BNav>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Main"
    }
</script>

<style lang="scss" scoped>
    .lt-main {
        display: flex;
        flex-flow: row nowrap;
        flex: 1 0 auto;
        position: relative;

        > .lt-main-content-area {
            flex: 1 0 auto;
        }

        > .lt-main-nav {
            margin: auto 0;
            list-style: none;
            position: relative;

            a {
                color: #2c3e50;
                margin-right: 5px;
            }
        }
    }
</style>
