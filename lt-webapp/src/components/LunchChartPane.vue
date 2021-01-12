<template>
    <div class="lt-lunch-chart-pane">
        <div class="lt-chart-content">
            <highcharts :options="lineChartOptions" />
            <highcharts :options="columnChartOptions" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import * as DataLoader from "@/common/DataLoader";
    import * as FormatUtil from "@/common/FormatUtil";
    import * as HighChartsUtil from "@/common/HighchartsUtil";
    import { NumberKeyObject, StringKeyObject } from "@/common/TypeDef";
    import { Chart } from "highcharts-vue";

    export default Vue.extend({
        name: "LunchChartPane",
        components: {
            highcharts: Chart
        },
        data() {
            return {
                lineChartOptions: {},
                columnChartOptions: {}
            };
        },
        created() {
            // prettier-ignore
            const lunchByDate: NumberKeyObject = DataLoader.lunch.reduce(
                (object: NumberKeyObject, l) => {
                    const time = l.date.getTime();
                    if (object[time] !== undefined) {
                        object[time] += l.price;
                    } else {
                        object[time] = l.price;
                    }
                    return object;
                }, {});
            this.lineChartOptions = HighChartsUtil.getChartOptions({
                series: [
                    {
                        type: "line",
                        name: "일별 결제 금액",
                        // prettier-ignore
                        data: Object.entries(lunchByDate).map(v =>
                            [Number(v[0]), v[1]])
                    },
                    {
                        type: "line",
                        name: "누적 결제 금액",
                        // prettier-ignore
                        data: Object.entries(lunchByDate).reduce(
                            (array, v, i) => {
                                const sum = i > 0 ? array[i - 1][1] : 0;
                                array[i] = [Number(v[0]), sum + v[1]];
                                return array;
                            }, [[0, 0]])
                    }
                ],
                xAxisOptions: {
                    type: "datetime",
                    labels: {
                        formatter: function() {
                            // prettier-ignore
                            return FormatUtil.dateToDateOnlyStr(
                                new Date(this.value), "/").substring(5);
                        }
                    }
                },
                yAxisTitle: "금액"
            });
            // prettier-ignore
            const placeByVisitCount: StringKeyObject = DataLoader.lunch.reduce(
                (o: StringKeyObject, l) => {
                    const placeName = DataLoader.placeById[l.placeId].name;
                    if (o[placeName] === undefined)
                        o[placeName] = 0;
                    o[placeName]++;
                    return o;
                }, {});
            this.columnChartOptions = HighChartsUtil.getChartOptions({
                series: [
                    {
                        type: "column",
                        name: "매장별 방문 횟수",
                        // prettier-ignore
                        data: Object.entries(placeByVisitCount).map(v => v[1])
                    }
                ],
                xAxisOptions: {
                    categories: Object.keys(placeByVisitCount)
                },
                yAxisTitle: "횟수"
            });
        }
    });
</script>

<style lang="scss" scoped>
    .lt-lunch-chart-pane {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .lt-chart-content {
            margin-top: 10px;
        }
    }
</style>
