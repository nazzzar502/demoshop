<script>
    import {
        cartProducts,
        category,
        activeCategoryId,
        users,
        activeTab,
    } from "../store.js";
    import { onMount } from "svelte";
    import NavBar from "../shared/NavBar.svelte";
    import { Route } from "svelte-router-spa";
    import Footer from "../shared/Footer.svelte";
    import StarWidget from "../shared/widgets/StarWidget.svelte";

    export let currentRoute;

    let id = parseInt(currentRoute.namedParams.id, 10);
    let iconPlaceHolder =
        "https://lh3.googleusercontent.com/QW0gZ3yugzXDvTANa5-cc1EpabQ2MGnl6enW11O6kIerEaBQGOhgyUOvhRedndD9io8RJMmJZfIXq1rMxUsFHS2Ttw=w128-h128-e365-rj-sc0x00ffffff";

    let jumbotroneImage =
        "https://lh3.googleusercontent.com/yBqsdtC-ICVazeYYYRfSzimHsIJCdEKdjyEm_qWlMJ8xaJETsyOaqRyeR27CXvJscs3cMbRWfqKYy0TiF2p8OH3olw=w640-h400-e365-rj-sc0x00ffffff";
    let userLogo =
    let product;
    let present = true;
    let list;
    let user;
    let item;

    let descStyle = "desc-block";
    let buttonText = "Read More";

    onMount(() => {
        $activeTab = "FirstTab";
        descStyle = "desc-block";
        //  console.log($activeCategoryId);
        list = $category.find((item) => item.id === $activeCategoryId);
        product = list.products.find((item) => item.id === id);
        user = $users.find((item) => item.id === product.userId);
        item = product;
        // console.log(product);
    });

    const toggleDesc = () => {
        if (descStyle === "desc-block") {
            descStyle = "desc-block-open";
            buttonText = "Read Less";
        } else {
            descStyle = "desc-block";
            buttonText = "Read More";
        }
    };

    const addToCart = () => {
        let reserveValue = $cartProducts.find((item) => item.id === id);
        // console.log(reserveValue);
        if (!reserveValue) {
            $cartProducts.push(product);
            alert("Product aded to the cart");
            //   console.log($cartProducts);
        } else {
            alert("There is such product inside the cart");
        }
    };
</script>

<body>
    {#if !present}
        <div class="w3-panel w3-red">
            <h3>Product removed!</h3>
        </div>
    {/if}
    {#if present}
        {#if product}
            <div id="link-block">
                <a href="/products/view">Home</a>
                <span>˃</span>
                <a href="/products/view">{list.name}</a>
                <span>˃</span>
                <span>{product.name}</span>
            </div>
            <div class="w3-row">
                <div class="w3-col m1" />
                <div class="w3-col m1">
                    <img
                        class="w3-image"
                        src={iconPlaceHolder}
                        alt="TestImage"
                    />
                </div>
                <div class="w3-col m8">
                    <h3>{product.name}</h3>
                    <div id="rating-block">
                        <StarWidget {item} />
                        <span>{list.name}</span>
                        <span>{user.email} </span>
                    </div>
                    <hr />
                    <NavBar />
                    {#if $activeTab === "FirstTab"}
                        <div>
                            <img
                                class="jumbotrone-image"
                                src={jumbotroneImage}
                                alt="Jumbotrone"
                            />
                        </div>
                        <div class={descStyle}>
                            <h2>Overwiev</h2>
                            {product.description}
                        </div>
                        <button
                            class="button-specified"
                            on:click={() => {
                                toggleDesc();
                            }}>{buttonText}</button
                        >
                        <div class="w3-panel">
                            <p>{product.shortDesc}</p>
                            <button
                                class="button-specified"
                                on:click={() => addToCart()}>Add to Cart</button
                            >
                        </div>
                    {/if}

                    {#if $activeTab === "SecondTab"}
                        <div style="margin:25px;">
                            <div class="comments">
                                <img
                                    class="w3-image"
                                    src={userLogo}
                                    alt="TestImage"
                                />
                                <h3>{user.name}</h3>
                            </div>
                            <div>
                                {product.shortDesc}
                            </div>
                            <div id="rating-block">
                                <StarWidget {item} />
                                <span>{product.name}</span>
                                <span>{user.email} </span>
                            </div>
                        </div>

                        <div style="margin:25px;">
                            <div class="comments">
                                <img
                                    class="w3-image"
                                    src={userLogo}
                                    alt="TestImage"
                                />
                                <h3>{user.name}</h3>
                            </div>
                            <div>
                                {product.shortDesc}
                            </div>
                            <div id="rating-block">
                                <StarWidget {item} />
                                <span>{product.name}</span>
                                <span>{user.email} </span>
                            </div>
                        </div>

                        <div style="margin:25px;">
                            <div class="comments">
                                <img
                                    class="w3-image"
                                    src={userLogo}
                                    alt="TestImage"
                                />
                                <h3>{user.name}</h3>
                            </div>
                            <div>
                                {product.shortDesc}
                            </div>
                            <div id="rating-block">
                                <StarWidget {item} />
                                <span>{product.name}</span>
                                <span>{user.email} </span>
                            </div>
                        </div>
                    {/if}
                    <Footer />
                </div>
                <div class="w3-col m3">
                    <button class="cart-button" on:click={() => addToCart()}
                        >Add to Cart</button
                    >
                </div>
            </div>
        {/if}
    {/if}
</body>

<style>
    body {
        font-family: "Google Sans", Roboto, Arial, sans-serif;
    }

    .comments {
        display: flex;
        flex-direction: row;
        justify-content: left;
    }
    .comments > h3 {
        color: #4b57d6;
        text-align: center;
        margin-left: 10px;
        font-weight: bolder;
        font-size: medium;
    }
    .button-specified,
    .cart-button {
        display: inline-block;
        text-align: center;
        border-radius: 3px;
    }
    .cart-button {
        width: 80%;
        background: #4b57d6;
        color: #ffffff;
    }
    .cart-button:hover {
        background: rgb(115, 122, 202);
    }

    .button-specified {
        width: fit-content;
        padding: 5px 10px;
        color: #4b57d6;
        background: #ffffff;
    }

    .button-specified:hover {
        background: rgb(184, 190, 236);
    }

    #rating-block {
        display: flex;
        flex-flow: left;
        flex-direction: row;
    }
    #rating-block > span {
        border-left: 1px solid #727575;
        padding-top: 10px;
        padding-left: 5px;
        padding-right: 5px;
        font-weight: bolder;
        font-size: medium;
        overflow: hidden;
        color: rgb(115, 122, 202);
    }
    img {
        max-width: 60px;
        height: auto;
    }
    #link-block {
        font-family: "Google Sans", Roboto, Arial, sans-serif;
        font-weight: bolder;
        font-size: smaller;
        overflow: hidden;
        color: rgb(115, 122, 202);
        text-align: left;
        padding: 10px;
    }
    #link-block > span {
        color: #727575;
    }
    #link-block > a {
        text-decoration: none;
    }
    .desc-block {
        text-decoration: none;
        overflow: hidden;
        max-width: 100%;
        height: 400px;
    }
    .desc-block-open {
        text-decoration: none;
        overflow: visible;
        max-width: 100%;
        height: auto;
    }

    .jumbotrone-image {
        padding-top: 20px;
        max-width: 100%;
        height: 400px;
        padding-bottom: 20px;
    }
    .w3-panel {
        background-color: #4b57d6;
        color: #ffffff;
        text-align: center;
        padding: 5px;
    }
</style>
