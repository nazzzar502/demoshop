<script>
    import { currentUser } from "../store.js";
</script>

<header>
    <div class="w3-bar">
        <a href="/#" class="w3-bar-item w3-button">Home</a>
        {#if $currentUser && $currentUser.email}
            <a href="/#/user/{$currentUser.id}" class="w3-bar-item w3-button"
                >{$currentUser.email}</a
            >
        {:else}
            <a href="/#/login" class="w3-bar-item w3-button">Login</a>
            <a href="/#/user/create" class="w3-bar-item w3-button">Sign in</a>
        {/if}
    </div>
</header>

<style>
    .w3-bar {
        background-color: #889293;
        margin: 0 auto;
        max-width: 960px;
        width: 100%;
        height: auto;
    }
    .w3-bar > a {
        display: flex;
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
</style>
