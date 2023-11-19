<script>
    import coffeeTastingWheel from "$lib/flavours.json";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function flattenArray(data) {
        let result = [];

        function recurse({
            id,
            name,
            definition,
            explanation,
            value,
            children,
        }) {
            result.push({ id, name, definition, explanation, value });

            if (children && children.length) {
                children.forEach((child) => {
                    recurse(child);
                });
            }
        }

        recurse(data); // Start the recursion with the initial data
        return result;
    }

    let drink = {
        profile: "",
        notes: "",
        method: "",
    };

    // let public = false;

    let profiles = flattenArray(coffeeTastingWheel);

    function submit() {
        dispatch("submit", {
            drink,
        });
    }
</script>

<br />
<label>
    Label
    <input type="string" placeholder="label" bind:value={drink.label} />
</label>

<label>
    Profile
    <select bind:value={drink.profile}>
        {#each profiles as value}<option {value}>{value.name}</option>{/each}
    </select>
</label>

<button on:click={() => submit()}>Add coffee</button>
