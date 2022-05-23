<script>
    import { createEventDispatcher } from "svelte";
    import { category } from "../store.js";
    import { onMount } from "svelte";
    let class1;
    let class2;
    let toggle = true;
    $: {
        if (toggle == true) {
            class1 = "main-button-enabled";
            class2 = "main-button-disabled";
        } else {
            class1 = "main-button-disabled";
            class2 = "main-button-enabled";
        }
    }
</script>

<body>
    <input type="search" id="search" placeholder="search" />
    <a
        id="first"
        class={class1}
        href="/products/view"
        on:click={() => {
            toggle = true;
        }}
    >
        <span class="material-symbols-outlined"> shop </span>
        Products
    </a>
    <a
        id="second"
        class={class2}
        href="/product/create"
        on:click={() => {
            toggle = false;
        }}
    >
        <span class="material-symbols-outlined"> extension </span>
        Create
    </a>
    <hr />
    <div>
        {#each $category as item (item.id)}
            <a href="/products/view" onclick=""> {item.name} </a>
        {/each}
        <hr />
    </div>
</body>

<style>
    a > span {
        display: inline;
        float: left;
    }
    #search {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80%;
    }
    .main-button-disabled,
    .main-button-enabled {
        width: 80%;
        border-radius: 0px 20px 20px 0px;
        display: inline-block;
        text-align: center;
    }

    .main-button-disabled {
        color: #727575;
        background-color: #ffffff;
    }
    .main-button-disabled:hover {
        color: rgb(115, 122, 202);
    }

    .main-button-enabled {
        background: #4b57d6;
        color: #ffffff;
    }
    .main-button-enabled:hover {
        color: #ffffff;
    }
    a {
        display: block;
        width: 90%;
        margin: 5px;
        padding: 5px;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 1 rem;
        overflow: hidden;
        margin: 1px;
        text-align: left;
        color: #727575;

        text-decoration: none;
    }
    a:hover {
        color: rgb(115, 122, 202);
    }
    body {
        background-color: rgb(242, 246, 246);
        height: auto;
        width: 90%;
    }
</style>
