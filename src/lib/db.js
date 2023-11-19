import { createClient } from "@supabase/supabase-js";
import { writable } from "svelte/store";
import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_KEY,
} from "$env/static/public";

export const supabase = createClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_KEY
);

const userStore = writable();

supabase.auth.getSession().then(({ data }) => {
    userStore.set(data.session?.user)
    console.log(data.session?.user);
});

supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN" && session) {
        userStore.set(session.user);
    } else if (event == "SIGNED_OUT") {
        userStore.set(null);
    }
});

export default {
    get user() {
        return userStore;
    },
    /**
     * @param {any} email
     */
    signIn(email) {
        return supabase.auth.signInWithOtp({ email }).then((data) => console.log(data));
    },
    signOut() {
        return supabase.auth.signOut();
    },
    coffee: {
        /**
         * @param {any} coffee
         */
        async add({ coffee }) {
            const { data } = await supabase.from('coffee').insert(coffee).select().maybeSingle();

            return data;
        },
        edit() { },
        remove() { },
        get: {
            async all() {
                const { data } = await supabase.from('coffee').select('*').order('created_at');

                return data;
            },
            one() { }
        }
    },
    drink: {
        add() { },
        remove() { },
        get: {
            all() { },
            by: {
                date() { },
                profile() { },
                notes() { },
                rating() { },
                method() { },
            },
        }
    }
}


//  COFFEE
// *label: string
// *product: bean, ground, instant, pod, drink
// *producer: string
// *origin: africa, asia, central america, south america
//  roast: light, medium, dark, extra dark
//  profile: [string]
//  supplier: supplierId
//  description: string
//  purchased: date
//  opened: date
//  price: number
//  weight: number
//  finished: date
//  public: boolean

//  SUPPLIER
//  name: string
//  location: string

//  DRINK
//  coffeeId
//  supplierId
//  date
//  profile
//  notes
//  rating
//  method
//  public: boolean
