import * as FormatUtil from "@/common/FormatUtil";
import * as Highcharts from "highcharts";
import { CustomHighChartsOptions } from "@/common/TypeDef";

export function getYAxisOptions(text = ""): Highcharts.YAxisOptions {
    return {
        endOnTick: false,
        labels: {
            formatter: function() {
                return FormatUtil.getNumberStringWithComma(this.value);
            },
            x: 5,
            y: -5
        },
        title: {
            text,
            x: 5
        }
    };
}

export function getChartOptions(
    o: CustomHighChartsOptions
): Highcharts.Options {
    return {
        plotOptions: {
            series: {
                animation: false
            }
        },
        series: o.series,
        title: {
            text: ""
        },
        tooltip: { enabled: false },
        xAxis: o.xAxisOptions,
        yAxis: getYAxisOptions(o.yAxisTitle)
    };
}
