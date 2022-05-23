<script>
    import { category } from "../store.js";
    import Cathegories from "../view/Cathegories.svelte";
    import Sidebar from "./Sidebar.svelte";
</script>

<body>
    {#if $category}
        {#each $category as list (list.id)}
            <Cathegories {list} />
        {/each}
    {/if}
</body>

<style>
</style>
