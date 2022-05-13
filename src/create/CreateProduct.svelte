<script>
    import { box } from "../store.js";
    export let products;

    let name;
    let description;
    let imageSource;

    let testvalue;

    function uniqueId() {
        return Date.now();
    }

    const createProduct = () => {
        const product = {
            name,
            description,
            imageSource,
            id: uniqueId(),
        };

        products.push(product);
        console.log(products);

        box.update((n) => products);
    };
</script>

<body>
    <form on:submit|preventDefault={createProduct}>
        <label for="fname">Product name:</label>
        <input type="text" id="fname" name="fname" bind:value={name} /><br /><br
        />
        <label for="desc">Product description:</label>
        <textarea
            class="w3-input w3-border"
            style="resize:none"
            id="desc"
            name="desc"
            bind:value={description}
        />
        <br /><br />
        <label for="imgsrc">imageSource</label>
        <input
            type="file"
            id="imgsrc"
            name="imgsrc"
            bind:value={imageSource}
        /><br /><br />
        <input type="submit" value="Submit" />
    </form>
</body>

<style>
    form {
        margin-left: 15%;
        margin-right: 10%;
    }
</style>
