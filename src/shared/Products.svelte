<script>
    import { box } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
</script>

<body>
    {#if $box}
        {#each $box as item (item.id)}
            <div class="w3-col s4 w3-center">
                <div class="w3-card-2">
                    <header class="w3-container w3-grey">
                        <h3>{item.name}</h3>
                    </header>
                    <a href="#/product/{item.id}">
                        <img
                            class="w3-image"
                            src={placeholder}
                            alt="TestImage"
                        /></a
                    >
                </div>
            </div>
        {/each}
    {/if}
</body>

<style>
    .w3-col {
        padding: 3px;
        max-width: 400px;
        height: auto;
        padding: 10px;
    }
    h3 {
        color: #e3e8eb;
    }
</style>
