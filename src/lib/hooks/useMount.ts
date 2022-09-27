import { onMount } from "svelte";
import { writable, type Readable } from "svelte/store";

export function useMount(): Readable<boolean> {
    const store = writable(false);

    onMount(() => {
        store.set(true);
    });

    return store;
}
