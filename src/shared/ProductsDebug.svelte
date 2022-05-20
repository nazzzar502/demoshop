<script>
    import { box, testbox } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    import { Router } from "svelte-router-spa";
    import { Navigate } from "svelte-router-spa";
    import StarWidget from "./StarWidget.svelte";
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
    let rating = 250;
    let maxRating = 500;
</script>

<body>
    {#if $testbox}
        {#each $testbox as box (box.id)}
            <hr style="color:black;" />
            <div class="w3-panel">
                <div>
                    <h3 class="list-header">{box.name}</h3>
                    <h3 class="list-description">{box.description}</h3>
                </div>
                <span>
                    {#each box.products as item (item.id)}
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
                </span>
            </div>
        {/each}
    {/if}
</body>

<style>
    .list-header {
        font-size: x-large;
        font-weight: 500;
        color: black;
    }
    .list-description {
        font-size: larger;
        font-weight: 500;
        color: #484a4a;
    }
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
