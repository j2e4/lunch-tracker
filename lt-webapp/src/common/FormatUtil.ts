function numberPadStartWithZero(number: number, length: number): string {
    return number.toString().padStart(length, "0");
}

function substringAsNumber(str: string, start: number, end: number): number {
    return Number(str.substring(start, end));
}

export function dateToDateOnlyStr(date: Date): string {
    return [
        numberPadStartWithZero(date.getFullYear(), 4),
        numberPadStartWithZero(date.getMonth() + 1, 2),
        numberPadStartWithZero(date.getDate(), 2)
    ].join("-");
}

// TODO Type을 define하는 방법도 있는지 찾아보자.
export function getDateFromDateOnlyStr(dateOnlyStr: string): Date {
    // prettier-ignore
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
