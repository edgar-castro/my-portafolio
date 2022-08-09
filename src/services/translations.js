// @ts-nocheck
import { writable, derived} from "svelte/store";
import { translations } from "../assets/localdata";

export const lang = writable('en');

export const translate = (lang, key, variable) => {

    let text = translations[lang][key];

    Object.keys(variable).map((k) => {
        const regex = new RegExp(`{{${k}}}`, "g");
        text = text.replace(regex, variable[k]);
    });

    return text;
}

export const t = derived(lang, ($lang) => (key, variable = {}) => 
    translate($lang, key, variable)
);
