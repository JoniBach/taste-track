<script>
    import Wheel from "$lib/components/Wheel.svelte";
    import CoffeeForm from "$lib/components/forms/CoffeeForm.svelte";
    import CoffeeDetailsForm from "$lib/components/forms/CoffeeDetailsForm.svelte";
    import coffeeTastingWheel from "$lib/flavours.json";
    import db from "$lib/db";
    import { onMount } from "svelte";

    let user;

    let coffees = [];

    const unsubscribe = db.user.subscribe((value) => {
        console.log(value);
        user = value;
    }); // logs 'got a subscriber', then '1'

    unsubscribe(); // logs 'no more subscribers'

    onMount(async () => {
        db.coffee.get.all().then((e) => (coffees = e));
    });
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Wheel data={coffeeTastingWheel} />

<CoffeeForm
    on:submit={(e) =>
        db.coffee.add({ ...e.detail }).then((e) => console.log(e))}
/>

{#each coffees as coffee}
    <div>{coffee.label}</div>
    <CoffeeDetailsForm on:submit={(e) => console.log(e.detail)} />
{/each}
