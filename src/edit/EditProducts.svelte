<script>
    import { box } from "../store.js";
    export let params = {};
    const id = parseInt(params.id, 10);
</script>

<body>
    <h1>{id}</h1>
    {#if $box}
        {#each $box as item (item.id)}
            {#if item.id === id}
                <h1>{item.name}</h1>
                <h1>{item.description}</h1>
            {/if}
        {/each}
    {/if}
</body>

<style>
</style>
