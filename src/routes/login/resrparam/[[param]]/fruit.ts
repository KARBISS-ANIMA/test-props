import type { ParamMatcher } from '@sveltejs/kit';
import {goto} from "$app/navigation";

export const match = ((param: string): param is ('apple' | 'orange') => {
    if (param=='apple'){
        goto('/login/resrparam/apple')
    } else if (param=='orange'){
        goto('/login/resrparam/orange')
    }else{
        goto('/login/param/error')
    }

        return param === 'apple' || param === 'orange';

}) satisfies ParamMatcher;