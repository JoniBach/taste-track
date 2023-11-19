<script>
    import coffeeTastingWheel from "$lib/flavours.json";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    let details = {
        store: "",
        description: "",
        opened: "",
        price: "",
        weight: "",
        finished: "",
    };

    function submit() {
        dispatch("submit", {
            details,
        });
    }
</script>

<div>Coffee Details</div>
<input type="string" placeholder="store" bind:value={details.store} />

<input type="string" placeholder="price" bind:value={details.price} />
<input type="string" placeholder="weight" bind:value={details.weight} />
<button on:click={() => submit()}>Add details coffee</button>
<hr />
