<script>
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";
    export let tabs;

    let tabType;
    let display = false;

    const dispatch = createEventDispatcher();

    const handleSubmit = (e) => {
        tabType = e;
        dispatch(`changeTab`, tabType);
    };

    const openSidebar = () => {
        document.getElementById("sidebar").style.display = "block";
    };

    const closeSidebar = () => {
        document.getElementById("sidebar").style.display = "none";
    };

    const toggleSidebar = () => {
        if (display === true) {
            openSidebar();
            display = false;
        } else {
            closeSidebar();
            display = true;
        }
    };
</script>

<div class="w3-container">
    <div
        class="w3-sidebar w3-bar-block w3-border-right"
        id="sidebar"
        style="display:none;"
    >
        {#each tabs as item}
            <radio
                class="w3-bar-item w3-button"
                id="First"
                on:click={() => {
                    handleSubmit(item);
                }}>{item}</radio
            >
        {:else}
            <p>No tabs</p>
        {/each}
    </div>
</div>

<i
    id="toggle"
    class="fa fa-arrow-right"
    on:click={() => {
        toggleSidebar();
    }}
    alt="Toggle menu"
/>

<style>
    i {
        border-radius: 2px;
        top: 0px;
        position: sticky;
    }
    #sidebar {
        display: "none";
    }

    radio {
        width: fit-content;
        margin-top: 3px;
        background-color: lightgrey;
        width: 100px;
        border-radius: 2px;
        font-size: small;
    }

    radio:hover,
    radio:active {
        background-color: rgb(97, 89, 113);
    }
</style>
