<script>
    import { currentUser } from "../store.js";
</script>

<header>
    <div class="w3-bar">
        <a href="/products/view" class="w3-bar-item w3-button">Home</a>
        {#if $currentUser && $currentUser.email}
            <a href="/user/{$currentUser.id}" class="w3-bar-item w3-button"
                >{$currentUser.email}</a
            >
        {:else}
            <a href="/login" class="w3-bar-item w3-button">Login</a>
            <a href="/register" class="w3-bar-item w3-button">Sign in</a>
        {/if}
        <a href="/cart" class="w3-bar-item w3-button material-symbols-outlined"
            >shopping_cart
        </a>
        <span />
    </div>
</header>

<style>
    .w3-bar {
        background-color: #889293;
        margin: 0 auto;
        max-width: 1500px;
        width: 100%;
        max-height: 400px;
        height: 100%;
    }
    .w3-bar > a {
        display: flex;
        color: rgb(230, 218, 218);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        padding: 8px 24px;
        flex-direction: row;
        justify-content: flex-start;
    }

    /* Change the link color to #111 (black) on hover */
    .w3-bar > a:hover {
        background-color: rgb(97, 89, 113);
        border-radius: 1px;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 48;
    }
</style>
