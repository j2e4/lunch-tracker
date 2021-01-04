import * as Highcharts from "highcharts";

// jso
export interface Lunch {
    id: number;
    menu: string;
    price: number;
    date: Date;
    placeId: number;
}

export interface Place {
    id: number;
    name: string;
}

// util
export interface NumberKeyObject {
    [key: number]: any;
}

export interface StringKeyObject {
    [key: string]: any;
}

export interface CustomHighChartsOptions {
    series: Array<Highcharts.SeriesOptionsType>;
    xAxisOptions?: Highcharts.XAxisOptions;
    yAxisTitle?: string;
}
