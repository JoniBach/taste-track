<script>
    import Wheel from "$lib/components/Wheel.svelte";
    import coffeeTastingWheel from "$lib/flavours.json";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Wheel data={coffeeTastingWheel} />
