<template>
    <div class="lt-main">
        <div class="lt-main-content-area">
            <template v-if="activePane !== undefined">
                <Component
                    class="lt-active-component"
                    :is="activePane.component"
                />
            </template>
        </div>
        <BNav
            class="lt-main-nav"
            vertical
        >
            <BNavItem
                v-for="pane in panes"
                :key="pane.id"
                @click="selectPane(pane)"
            >
                <FontAwesomeIcon :icon="pane.icon"  />
            </BNavItem>
        </BNav>
    </div>
</template>

<script lang="ts">
    import DummyPane from '@/components/DummyPane.vue';
    import JsonParsingTestPane from '@/components/test/JsonParsingTestPane.vue';
    import Vue from 'vue';
    import { VueClass } from "vue-class-component/lib/declarations";

    export interface Pane {
        id: string;
        icon: string;
        component?: VueClass<Vue>;
    }

    // this 객체 인식 문제로 Vue.extend 해줘야한다고 한다.
    // 참고: https://vuejs.org/v2/guide/typescript.html#Basic-Usage
    export default Vue.extend({
        name: 'Main',
        data() {
            return {
                panes: [] as Array<Pane>,
                activePane: {} as Pane
            }
        },
        created() {
            this.panes = [
                {
                    id: 'home',
                    icon: 'home'
                    // TODO Version이라도 보여줄지 그냥 빈 공간으로 둘지
                    // component:
                },
                {
                    id: 'grid',
                    icon: 'table',
                    component: DummyPane
                },
                {
                    id: 'data',
                    icon: 'database',
                    component: JsonParsingTestPane
                }
            ]
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

        > .lt-main-content-area {
            flex: 1 0 auto;
            position: relative;

            > .lt-active-component {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
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
