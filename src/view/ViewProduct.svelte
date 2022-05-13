<script>
    import { box } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    export let params = {};
    const id = parseInt(params.id, 10);
    let placeHolder = "https://www.w3schools.com/w3css/img_lights.jpg";

    let product;
    let present = true;
    onMount(() => {
        product = $box.find((item) => item.id === id);
    });
</script>

{#if !present}
    <div class="w3-panel w3-red">
        <h3>Product removed!</h3>
    </div>
{/if}
{#if present}
    {#if product}
        <div class="w3-row">
            <div class="w3-col m4 l3">
                <img class="w3-image" src={placeHolder} alt="TestImage" />
            </div>
            <div class="w3-col m8 l9">
                <header class="w3-container w3-grey">
                    <h3>{product.name}</h3>
                </header>

                <div class="w3-container">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>

        <a class="w3-button" href="#/product/edit/{product.id}">Edit</a>
        <a class="w3-button" href="/#">Back</a>
    {:else}
        <h1>There are no such products</h1>
        <a class="w3-button" href="/#">Back</a>
    {/if}
{/if}

<style>
    div {
        margin: 2px;
    }
</style>
