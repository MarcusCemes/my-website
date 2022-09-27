import { isObject } from "./types";

export type ClassValue = string | null | undefined | false | { [index: string]: boolean };

/** A minimal implementation of the `classnames`/`clsx` library. */
export function classes(...classes: ClassValue[]): string {
    return classes
        .flatMap(expandObjects)
        .filter((x) => !!x)
        .join(" ");
}

function expandObjects(x: unknown) {
    if (isObject(x)) {
        return Object.entries(x).map(([key, value]) => (value ? key : undefined));
    } else {
        return x;
    }
}
