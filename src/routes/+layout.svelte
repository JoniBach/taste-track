<script>
    import Auth from "$lib/components/Auth.svelte";
    import db, { supabase } from "$lib/db";
    import { onMount } from "svelte";

    let user = db.user;

    onMount(async () => {
        supabase.auth.getSession().then(({ data }) => {
            db.user.set(data.session?.user);
        });
    });
</script>

{#if $user}
    <button on:click={() => db.signOut()}> sign out </button>
    <slot />
{:else}
    <Auth />
{/if}
