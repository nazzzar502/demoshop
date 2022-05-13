<script>
    import { box } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    export let params = {};
    const id = parseInt(params.id, 10);
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";

    let product;

    let present = true;
    let update = false;
    //updating product from store when component is injected in DOM
    onMount(() => {
        product = $box.find((item) => item.id === id);
    });

    //deleting product from store

    const deleteProduct = () => {
        box.update((products) => {
            return products.filter((product) => product.id != id);
        });
        present = false;
    };

    const updateProduct = () => {
        box.update((products) => {
            let itemIndex = products.findIndex((item) => item.id == id);
            products[itemIndex] = product;
            return products;
        });
        update = true;
    };
</script>

{#if !present}
    <div class="w3-panel w3-red">
        <h3>Product removed!</h3>
    </div>
{/if}
{#if update}
    <div class="w3-panel w3-green">
        <h3>Product updated!</h3>
    </div>
{/if}
{#if present}
    {#if product}
        <body>
            <form on:submit|preventDefault>
                <label for="fname">Product name:</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    bind:value={product.name}
                /><br /><br />
                <label for="desc">Product description:</label>
                <textarea
                    class="w3-input w3-border"
                    style="resize:none"
                    id="desc"
                    name="desc"
                    bind:value={product.description}
                />
                <br /><br />
                <label for="imgsrc">imageSource</label>
                <input
                    type="file"
                    id="imgsrc"
                    name="imgsrc"
                    bind:value={product.imageSource}
                /><br /><br />
                <div>
                    <button on:click={updateProduct}>Submit</button>
                    <button on:click={deleteProduct}>Delete</button>
                </div>
            </form>
            <a class="w3-button" href="/#{product.id}">Back</a>
        </body>
    {/if}
{:else}
    <a class="w3-button" href="/#{product.id}">Back</a>
{/if}

<style>
    div {
        margin: 2px;
    }
</style>
