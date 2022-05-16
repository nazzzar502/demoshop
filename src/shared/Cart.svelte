<script>
    import { onDestroy, onMount } from "svelte";
    import { cartProducts, box } from "../store.js";

    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";

    onMount(() => {
        checkIfPresent;
    });

    const checkIfPresent = () => {
        $cartProducts.forEach((product) => {
            let checkValue = $box.find((item) => item.id === product.id);
            if (!checkValue) {
                deleteFromCart(product.id);
            }
        });
    };

    const deleteFromCart = (id) => {
        cartProducts.update((products) => {
            return products.filter((product) => product.id != id);
        });
    };
</script>

<body>
    {#if $cartProducts}
        {#each $cartProducts as item (item.id)}
            <div class="w3-col s4 w3-center">
                <div class="w3-card-2">
                    <header class="w3-container w3-grey">
                        <h3>{item.name}</h3>
                    </header>
                    <a class="w3-button" href="#/product/{item.id}">
                        <img
                            class="w3-image"
                            src={placeholder}
                            alt="TestImage"
                        />
                    </a>

                    <div class="w3-container">
                        <div class="w3-bar">
                            <a
                                class="w3-button"
                                id="cart-button"
                                on:click={deleteFromCart(item.id)}
                                >Remove from Cart</a
                            >
                        </div>
                    </div>
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

    .w3-bar {
        background-color: #e3e8eb;
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
        border-radius: 1px;
    }
    #cart-button {
        background-color: #e3e8eb;
        color: #474745;
    }
</style>
