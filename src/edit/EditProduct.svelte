<script>
    import { box } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    export let currentRoute;

    const id = parseInt(currentRoute.namedParams.id, 10);
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";

    let product;

    let removed = false;
    let updated = false;
    //updating product from store when component is injected in DOM
    onMount(() => {
        product = $box.find((item) => item.id === id);
    });

    //deleting product from store

    const deleteProduct = () => {
        box.update((products) => {
            return products.filter((product) => product.id != id);
        });
        removed = true;
    };

    const updateProduct = () => {
        box.update((products) => {
            let itemIndex = products.findIndex((item) => item.id == id);
            products[itemIndex] = product;
            return products;
        });
        updated = true;
    };
</script>

<body>
    {#if removed}
        <div class="w3-panel w3-grey">
            <h3>Product removed!</h3>
        </div>
    {/if}
    {#if updated}
        <div class="w3-panel w3-grey">
            <h3>Product updated!</h3>
        </div>
    {/if}
    {#if !removed}
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
                    <div class="w3-bar">
                        <a class="w3-button" id="1" on:click={updateProduct}
                            >Submit</a
                        >
                        <a
                            class="w3-button"
                            id="cart-button"
                            on:click={deleteProduct}>Delete</a
                        >
                        <a class="w3-button" href="/products/{product.id}"
                            >Back</a
                        >
                    </div>
                </form>
            </body>
        {/if}
    {:else}
        <a class="w3-button" href="/products/{product.id}">Back</a>
    {/if}
</body>

<style>
    form {
        max-width: 400px;
        width: auto;
        margin-left: 25%;
    }

    h3 {
        color: #e3e8eb;
    }

    .w3-bar {
        background-color: #474745;
        margin: 0 auto;
        max-width: auto;
        width: 100%;
        height: auto;
    }
    .w3-bar > a {
        display: inline-block;
        color: rgb(230, 218, 218);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        padding: 8px 24px;
    }

    /* Change the link color to #111 (black) on hover */
    .w3-bar > a:hover {
        background-color: rgb(97, 89, 113);
        border-radius: 1px;
    }
    #cart-button {
        background-color: #e3e8eb;
        color: #474745;
    }
    textarea {
        height: 250px;

        resize: none;
    }
</style>
