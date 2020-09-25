<template>
    <div class="lt-json-parsing-test-pane">
        JsonParsingTestPane
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    // import Papa from "papaparse";
    // import axios from "axios";
    import datasource from "@/data/datasource.json";


    export default Vue.extend({
        name: "JsonParsingTestPane",
        // data() {
        //     return {
        //         fileContentStr: undefined as string
        //     }
        // },
        created() {
            (async () => {
                // const test = await fetch('[filepath]/json/docs.json');
                // const test = await axios.get('@/main.ts');
                console.log(datasource);
            })();
        },
        // methods: {
        //
        // }
    });
</script>

<style lang="scss" scoped>
    .lt-json-parsing-test-pane {

    }
</style>
