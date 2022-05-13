<script>
    import { box } from "../store.js";
    export let params = {};
    const id = parseInt(params.id, 10);
    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
</script>

<body>
    {#if $box}
        {#each $box as item (item.id)}
            {#if item.id === id}
                <div class="w3-row">
                    <div class="w3-col m4 l3">
                        <img
                            class="w3-image"
                            src={placeholder}
                            alt="TestImage"
                        />
                    </div>
                    <div class="w3-col m8 l9">
                        <header class="w3-container w3-grey">
                            <h3>{item.name}</h3>
                        </header>

                        <div class="w3-container">
                            <p>{item.description}</p>
                        </div>
                        <a class="w3-button" href="/">Back</a>
                    </div>
                </div>
            {/if}
        {/each}
    {/if}
</body>

<style>
    div {
        margin: 2px;
    }
</style>
