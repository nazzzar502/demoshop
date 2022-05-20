<script>
    import { box, currentUser } from "../store.js";
    //export let products;
    let products = [];
    let name;
    let description;
    let imageSource;
    let userId = $currentUser.id;
    let testvalue;

    function uniqueId() {
        return Date.now();
    }

    const createProduct = () => {
        products = $box;
        const product = {
            name,
            description,
            imageSource,
            id: uniqueId(),
            userId: userId,
        };
        products.push(product);

        box.update((n) => products);
        console.log($box);
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
            id="desc"
            name="desc"
            bind:value={description}
        />
        <br />
        <label for="imgsrc">Image source:</label>
        <input
            type="file"
            id="imgsrc"
            name="imgsrc"
            bind:value={imageSource}
        /><br /><br />
        <input type="submit" value="Create" />
    </form>
</body>

<style>
    form {
        max-width: 400px;
        width: auto;
        margin-left: 25%;
    }
    textarea {
        resize: none;
    }
</style>
