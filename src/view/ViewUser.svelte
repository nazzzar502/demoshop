<script>
    import { currentUser, users, session } from "../store.js";
    import { onDestroy, onMount } from "svelte";

    export let currentRoute;
    let params = currentRoute;
    const id = parseInt(currentRoute.namedParams.id, 10);
    let placeHolder = "https://www.w3schools.com/w3css/img_lights.jpg";

    let user;
    let present = true;
    let persons = [];

    onMount(() => {
        user = $users.find((preson) => preson.id === id);
    });
    const logOut = () => {
        $currentUser = {};
        $session = false;
        return true;
    };
</script>

{#if !present}
    <div class="w3-panel w3-red">
        <h3>User removed!</h3>
    </div>
{/if}
{#if present}
    {#if user}
        <div class="w3-row">
            <div class="w3-col m4 l3">
                <img class="w3-image" src={placeHolder} alt="TestImage" />
            </div>
            <div class="w3-col m8 l9">
                <header class="w3-container w3-grey">
                    <h3>Name: {user.name}</h3>
                </header>
                <div class="w3-container">
                    <p>Email: {user.email}</p>
                </div>
                <div class="w3-container">
                    <p>Password: {user.password}</p>
                </div>
                <div class="w3-container">
                    <p>User id: {user.id}</p>
                </div>
                <div class="w3-container">
                    <p>User admin: {user.admin}</p>
                </div>
            </div>
        </div>
        <div class="w3-bar">
            <a class="w3-button" href="/user/edit/{user.id}">Edit</a>
            <a
                class="w3-button"
                id="cart-button"
                href="/products/view"
                on:click={() => {
                    if (logOut()) {
                    }
                }}>Log out</a
            >
            <a class="w3-button" href="/products/view">Back</a>
            <a class="w3-button" href="/myproducts">My Products</a>
        </div>
    {:else}
        <h1>There are no such users</h1>
        <a class="w3-button" href="/products/view">Back</a>
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
