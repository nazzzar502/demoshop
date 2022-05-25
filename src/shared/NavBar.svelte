<script>
    import { activeTab } from "../store.js";
    let tabStyle1, tabStyle2, tabStyle3;
    $: {
        if ($activeTab === "FirstTab") {
            tabStyle1 = "tab-button";
        } else {
            tabStyle1 = "tab-button-disabled";
        }

        if ($activeTab === "SecondTab") {
            tabStyle2 = "tab-button";
        } else {
            tabStyle2 = "tab-button-disabled";
        }

        if ($activeTab === "ThirdTab") {
            tabStyle3 = "tab-button";
        } else {
            tabStyle3 = "tab-button-disabled";
        }
    }
</script>

<div class="w3-container">
    <a class={tabStyle1} href="" on:click={() => ($activeTab = "FirstTab")}>
        Overwiev
    </a>
    <a class={tabStyle2} href="" on:click={() => ($activeTab = "SecondTab")}>
        Reviews
    </a>
    <a class={tabStyle3} href="" on:click={() => ($activeTab = "ThirdTab")}>
        Support
    </a>
</div>

<style>
    .tab-button {
        border: 1px solid #d5d9d9;
        border-radius: 20px;
        color: #737aca;
        box-shadow: 0px 8px 4px -7px #615d61;
    }

    .tab-button-disabled {
        border: 1px solid #ffffff;
        border-radius: 20px;
        border: none;
        box-shadow: 0px 8px 4px -7px #ffffff;
        border-radius: none;
        color: #727575;
        text-decoration: none;
    }

    .tab-button-disabled,
    .tab-button {
        background-color: #ffffff;
        display: inline-block;
        cursor: pointer;
        font-family: "Google Sans", Roboto, Arial, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        padding: 5px 36px;
        text-decoration: none;
        letter-spacing: 0.05em;
    }

    .tab-button-disabled:hover,
    .tab-button:hover {
        background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
        background-color: #dfdfdf;
    }

    .tab-button {
        position: relative;
        top: 1px;
    }

    .w3-container {
        margin: 0 auto;
        max-width: 960px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-flow: left;
        justify-content: space-between;
    }
</style>
