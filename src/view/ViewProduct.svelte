<script>
    import { box, cartProducts } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    import { pop } from "svelte-spa-router";
    export let params = {};
    const id = parseInt(params.id, 10);
    let placeHolder = "https://www.w3schools.com/w3css/img_lights.jpg";

    let product;
    let present = true;
    let products = [];

    onMount(() => {
        product = $box.find((item) => item.id === id);
    });

    const addToCart = () => {
        let reserveValue = $cartProducts.find((item) => item.id === id);
        console.log(reserveValue);
        if (!reserveValue) {
            $cartProducts.push(product);
            //cartProducts.update((n) => products);
            console.log($cartProducts);
        } else {
            alert("Test");
        }
    };
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
        <div class="w3-bar">
            <a class="w3-button" href="#/product/edit/{product.id}">Edit</a>
            <a class="w3-button" id="cart-button" on:click={addToCart}
                >Add to Cart</a
            >
            <a class="w3-button" href="/#">Back</a>
        </div>
    {:else}
        <h1>There are no such products</h1>
        <a class="w3-button" href="/#">Back</a>
    {/if}
{/if}

<style>
    .w3-bar {
        background-color: #474745;
        margin: 0 auto;
        max-width: 960px;
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
</style>
