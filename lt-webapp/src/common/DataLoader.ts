import datasource from "@/data/datasource.json";
import * as FormatUtil from "@/common/FormatUtil";
import { Lunch, NumberKeyObject, Place } from "@/common/TypeDef";

const NullString = "";

// any Type을 파라미터로 쓰기 위해 disable한다.
// eslint-disable-next-line
function getValueWithDefault(value: any, defaultValue: any): any {
    if (value === null || value === undefined || value === NullString)
        return defaultValue;
    return value;
}
// 여기까지 위치가 애매하다. 일단은 여기서 쓰니까 여기 둔다.

export const place: Array<Place> = datasource.place.map(p => ({
    id: p.no,
    name: p.name
}));
Object.freeze(place);

// prettier-ignore
export const placeById: NumberKeyObject = place.reduce(
    (res: NumberKeyObject, p: Place) => {
        res[p.id] = p;
        return res;
    }, {});
Object.freeze(placeById);

export const lunch: Array<Lunch> = datasource.lunch.map(l => ({
    id: l.no,
    menu: l.name,
    price: getValueWithDefault(l.price, 0),
    date: new Date(FormatUtil.getDateFromDateOnlyStr(l.date)),
    placeId: l.placeNo
}));
Object.freeze(lunch);

console.log("# datasource", datasource);
