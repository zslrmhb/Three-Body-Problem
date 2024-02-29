import { writable } from "svelte/store";

export const debug = writable(true);
export const loaded = writable(false);
export const showHero = writable(true);
export const showIntro = writable(false);
export const showTwoBody = writable(false);
export const showThreeBody = writable(false);
