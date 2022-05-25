<script>
    import StarWidget from "../shared/widgets/StarWidget.svelte";
    import HoverWidget from "../shared/widgets/HoverWidget.svelte";
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
    import { onMount, onDestroy } from "svelte";
    import { category } from "../store.js";

    export let currentRoute;

    let id = parseInt(currentRoute.namedParams.id, 10);
    let list = $category.find((item) => item.id === id);
</script>

<body>
    {#if list}
        <hr style="color:black;" />
        <div class="w3-panel">
            <div>
                <h3 class="list-header">{list.name}</h3>
                <h3 class="list-description">{list.description}</h3>
            </div>
            <span>
                {#each list.products as item (item.id)}
                    <div class="w3-col s4 w3-center">
                        <div class="w3-card-2">
                            <HoverWidget {placeholder} {item} {list} />
                            <header class="w3-container ">
                                <h3>{item.name}</h3>
                            </header>

                            <StarWidget {item} />
                        </div>
                    </div>
                {/each}
            </span>
        </div>
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
        text-decoration: none;
    }
    .w3-container {
        max-height: 50px;
        overflow: hidden;
    }
    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: small;
        overflow: hidden;
        margin: 1px;
        text-overflow: ellipsis;
        text-align: left;
        color: #484a4a;
    }
</style>
