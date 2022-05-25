<script>
    import { onMount } from "svelte";
    import { cartProducts, box } from "../store.js";
    import StarWidget from "../shared/widgets/StarWidget.svelte";
    import HoverWidget from "../shared/widgets/HoverWidget.svelte";

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
            <!--div class="w3-col s4 w3-center">
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
            </div-->
            <hr style="color:black;" />
            <div class="w3-panel">
                <span>
                    <div class="w3-col s4 w3-center">
                        <div class="w3-card-2">
                            <div class="item-header">
                                <header class="w3-container ">
                                    <h3>{item.name}</h3>
                                </header>
                                <button
                                    class="del-button material-symbols-outlined"
                                    on:click={deleteFromCart(item.id)}
                                >
                                    delete
                                </button>
                            </div>

                            <StarWidget {item} />
                            <img
                                class="w3-image"
                                src={placeholder}
                                alt="TestImage"
                            />
                        </div>
                    </div>
                </span>
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
    .item-header {
        display: flex;
        flex-direction: row;
        flex-flow: row;
    }
    .del-button {
        padding: 2px;
        border: none;
        background-color: transparent;
    }
</style>
