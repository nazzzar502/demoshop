<script>
    import { box } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    import { Router } from "svelte-router-spa";
    import { Navigate } from "svelte-router-spa";
    import StarWidget from "./StarWidget.svelte";
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
    let rating = 200;
    let maxRating = 500;
</script>

<body>
    {#if $box}
        {#each $box as item (item.id)}
            <div class="w3-col s4 w3-center">
                <div class="w3-card-2">
                    <Navigate to="/products/{item.id}">
                        <img
                            class="w3-image"
                            src={placeholder}
                            alt="TestImage"
                        />
                    </Navigate>
                    <header class="w3-container ">
                        <h3>{item.name}</h3>
                    </header>
                    <StarWidget {rating} {maxRating} />
                </div>
            </div>
        {/each}
    {/if}
</body>

<style>
    .w3-col {
        padding: 3px;
        max-width: 250px;
        height: auto;
        padding: 10px;
    }
    .w3-container {
        max-height: 50px;
        overflow: hidden;
    }
    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: medium;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        color: #484a4a;
    }
</style>
