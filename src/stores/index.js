import { writable } from "svelte/store";

export const debug = writable(false);
export const loaded = writable(false);
export const showTitle = writable(true);
