<script>
    import { Navigate } from "svelte-router-spa";
    import { fade } from "svelte/transition";

    //import { activeCategoryId } from "C:/Users/Dante/Documents/Work-projects/svelte/shop-demo/demoshop/src/store.js";
    import { activeCategoryId } from "../../store.js";
    export let placeholder;
    export let item;
    export let list;
    let visible = true;
    let shortDesc =
        "lorem ipsum dolor dolor lorem ipsum lorem ipsum dolor dolor lorem ipsum ...";
    const bindCathegory = () => {
        $activeCategoryId = list.id;
        console.log($activeCategoryId);
    };

    const titleHover = () => {
        visible = false;
    };
    const titleOut = () => {
        visible = true;
    };
</script>

<body>
    {#if visible}
        <div id="stable">
            <img
                class="w3-image"
                src={placeholder}
                alt="TestImage"
                on:focus
                on:mouseover={() => {
                    titleHover();
                }}
            />
        </div>
    {:else}
        <Navigate to="products/item/{item.id}">
            <div
                id="hover"
                on:blur
                on:mouseleave={() => {
                    titleOut();
                }}
                on:click={() => {
                    bindCathegory(); /// Ask a question
                }}
            >
                <img class="w3-image" src={placeholder} alt="TestImage" />

                <p in:fade={{ duration: 1000 }} class="title">
                    {item.shortDesc}
                </p>
            </div>
        </Navigate>
    {/if}
</body>

<style>
    #stable {
        opacity: 1;
    }
    #hover {
        opacity: 1;
    }
    #hover > img {
        z-index: -1;
        opacity: 0.1;
    }
    #hover > p {
        position: absolute;
        left: 2px;
        top: 2px;
        z-index: 1;
        color: #484a4a;
        opacity: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
    }
</style>
