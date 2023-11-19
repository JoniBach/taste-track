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

    let coffee = {
        label: "",
        producer: "",
        origin: "",
        product: "",
        roast: "",
        profile: "",
    };

    // let public = false;

    let profiles = flattenArray(coffeeTastingWheel);
    let products = ["bean", "ground", "instant", "pod", "drink"];
    let roasts = ["light", "medium", "dark"];

    function submit() {
        dispatch("submit", {
            coffee,
        });
    }
</script>

<br />
<label>
    Label
    <input type="string" placeholder="label" bind:value={coffee.label} />
</label>

<label>
    Producer
    <input type="string" placeholder="producer" bind:value={coffee.producer} />
</label>

<label>
    Origin
    <input type="string" placeholder="origin" bind:value={coffee.origin} />
</label>

<label>
    Product type
    <select bind:value={coffee.product}>
        {#each products as value}<option {value}>{value}</option>{/each}
    </select>
</label>

<label>
    Roast
    <select bind:value={coffee.roast}>
        {#each roasts as value}<option {value}>{value}</option>{/each}
    </select>
</label>

<label>
    Profile
    <select bind:value={coffee.profile}>
        {#each profiles as value}<option {value}>{value.name}</option>{/each}
    </select>
</label>

<button on:click={() => submit()}>Add coffee</button>
