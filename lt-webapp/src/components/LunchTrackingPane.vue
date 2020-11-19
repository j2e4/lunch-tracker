<template>
    <div class="lt-lunch-tracking-pane">
        <AgGridVue
            class="ag-theme-balham lt-grid-size"
            :grid-options="gridOptions"
            @grid-ready="onGridReady"
        />
    </div>
</template>

<script lang="ts">
    import AgGridVue from "@/common/AgGridVue.ts";
    import Vue from "vue";
    import * as DataLoader from "@/common/DataLoader.ts";
    import { NumberKeyObject, Place } from "@/common/TypeDef";
    import {
        AgGridEvent,
        ColDef,
        GridApi,
        GridOptions
    } from "@ag-grid-community/all-modules";

    const columnDefs: Array<ColDef> = [
        { headerName: "일시", field: "date" },
        { headerName: "메뉴", field: "name" },
        { headerName: "가격", field: "price" },
        { headerName: "식당", field: "place" }
    ];
    const placeMapById: NumberKeyObject =
        DataLoader.place.reduce((res: NumberKeyObject, p: Place) => {
            res[p.id] = p;
            return res;
        }, {});

    export default Vue.extend({
        name: "LunchTrackingPane",
        components: {
            AgGridVue
        },
        data() {
            return {
                gridApi: {} as GridApi,
                gridOptions: {} as GridOptions
            };
        },
        created() {
            this.gridOptions = {
                defaultColDef: {
                    suppressMovable: true
                },
                columnDefs,
                rowData: []
            };
        },
        methods: {
            onGridReady(grid: AgGridEvent): void {
                this.gridApi = grid.api;
                this.setLunchData();
                this.$nextTick(() => {
                    this.gridApi.sizeColumnsToFit();
                });
            },
            setLunchData(): void {
                const rowData = DataLoader.lunch.map(l => ({
                    date: l.date,
                    name: l.menu,
                    price: l.price,
                    place: placeMapById[l.placeId] ?
                        placeMapById[l.placeId].name : l.placeId
                }));
                this.gridApi.setRowData(rowData);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .lt-lunch-tracking-pane {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;

        > .lt-grid-size {
            flex: 1 0 auto;
        }
    }
</style>
