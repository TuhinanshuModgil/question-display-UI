import { writable } from "svelte/store";

export const questionPaper = writable({
    loading: true,
    data: []
})