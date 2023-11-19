<script>
    import db from "$lib/db";
    let value = "";
</script>

<input placeholder="email" bind:value />
<button on:click={() => db.signIn(value)}> submit </button>
