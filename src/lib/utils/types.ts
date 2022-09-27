export function isObject(x: unknown): x is { [index: string]: unknown } {
    return typeof x === "object" && x !== null;
}
