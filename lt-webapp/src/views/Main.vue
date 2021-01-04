<template>
    <div class="lt-main">
        <div class="lt-main-content-area">
            <template v-if="activePane !== undefined">
                <component :is="activePane.component" />
            </template>
        </div>
        <BNav class="lt-main-nav" vertical>
            <BNavItem
                v-for="pane in panes"
                :key="pane.id"
                @click="selectPane(pane)"
            >
                <FontAwesomeIcon :icon="pane.icon" />
            </BNavItem>
        </BNav>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    // import DummyPane from "@/components/DummyPane.vue";
    import LunchChartPane from "@/components/LunchChartPane.vue";
    import LunchGridPane from "@/components/LunchGridPane.vue";
    import { VueClass } from "vue-class-component/lib/declarations";

    export interface Pane {
        id: string;
        icon: string;
        component?: VueClass<Vue>;
    }

    // this 객체 인식 문제로 Vue.extend 해줘야한다고 한다.
    // 참고: https://vuejs.org/v2/guide/typescript.html#Basic-Usage
    export default Vue.extend({
        name: "Main",
        data() {
            return {
                panes: [] as Array<Pane>,
                activePane: {} as Pane
            };
        },
        created() {
            this.panes = [
                {
                    id: "home",
                    icon: "home"
                    // TODO 보여줄지 그냥 빈 공간으로 둘지
                    // component: DummyPane
                },
                {
                    id: "grid",
                    icon: "table",
                    component: LunchGridPane
                },
                {
                    id: "chart",
                    icon: "chart-line",
                    component: LunchChartPane
                }
            ];
        },
        methods: {
            selectPane(pane: Pane) {
                this.activePane = pane;
            }
        }
    });
</script>

<style lang="scss" scoped>
    .lt-main {
        display: flex;
        flex-flow: row nowrap;
        flex: 1 0 auto;
        position: relative;
        margin: 0 10px 10px;

        > .lt-main-content-area {
            flex: 1 0 auto;
            position: relative;
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
