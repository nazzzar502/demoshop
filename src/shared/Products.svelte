<script>
    import { box } from "../store.js";
    import { onDestroy } from "svelte";

    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
</script>

<body>
    {#if $box}
        {#each $box as item (item.id)}
            <div class="w3-col s4 w3-center">
                <div class="w3-card-2" style="margin:5px;">
                    <header class="w3-container w3-grey">
                        <h3>{item.name}</h3>
                    </header>
                    <img
                        class="w3-image"
                        style="width:100%;max-width:200px;margin:2px"
                        src={placeholder}
                        alt="TestImage"
                    />
                    <div class="w3-container" style="max-height:200px">
                        <p>{item.description}</p>
                    </div>
                    <div class="w3-container" style="max-height:200px">
                        <p>{item.id}</p>
                    </div>
                </div>
            </div>
        {/each}
    {/if}
</body>

<style>
</style>
