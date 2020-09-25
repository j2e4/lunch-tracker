<template>
    <div class="lt-dummy-pane">
        Dummy
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: 'DummyPane',
    });
</script>

<style lang="scss" scoped>
    .lt-dummy-pane {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
