import {zod} from "sveltekit-superforms/adapters";
import {superValidate} from "sveltekit-superforms";
import {loginFormSchema} from "./schema";
import type {PageServerLoad} from "./$types";

export const load: PageServerLoad = async () => {
    return {
        loginForm: await superValidate(zod(loginFormSchema))
    };
};

export const actions = {
    login: async () => {


    }
};