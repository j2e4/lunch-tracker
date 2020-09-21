import datasource from "@/data/datasource.json";
import { Lunch, Place } from "@/common/TypeDef";

const NullString = '';

// eslint-disable-next-line
function getValueWithDefault(value: any, defaultValue: any): any {
    if (value === null || value === undefined || value === NullString)
        return defaultValue;
    return value;
}

function substringAsNumber(
    str: string, start: number, end: number): number {
    return Number(str.substring(start, end));
}

// TODO Type을 define하는 방법도 있는지 찾아보자.
function getDateFromDateOnlyStr(dateOnlyStr: string): Date {
    if (dateOnlyStr.length !== 8)
        return new Date(-1);
    return new Date(
        substringAsNumber(dateOnlyStr, 0, 4),
        substringAsNumber(dateOnlyStr, 4, 6),
        substringAsNumber(dateOnlyStr, 6, 8),
        0,
        0,
        0
    );
}
// 여기까지 위치가 애매하다. 일단은 여기서 쓰니까 여기 둔다.

export const place: Array<Place> =
    datasource.place.map(p => ({
        id: p.no,
        name: p.name
    }));
Object.freeze(place);

export const lunch: Array<Lunch> =
    datasource.lunch.map(l => ({
        id: l.no,
        menu: l.name,
        price: getValueWithDefault(l.price, 0),
        date: new Date(getDateFromDateOnlyStr(l.date)),
        placeId: l.placeNo
    }));
Object.freeze(lunch);

console.log('# datasource', datasource);
