// import { tweened } from 'svelte/motion';
import { writable } from "svelte/store"

const currentScrollY = writable(0);

export { currentScrollY }
