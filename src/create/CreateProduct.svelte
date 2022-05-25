<script>
    import { category, currentUser } from "../store.js";
    import { onMount } from "svelte";
    import Editor from "@tinymce/tinymce-svelte";
    //export let products;
    let products = [];
    let name;
    let description;
    let shortDesc;
    let imageSource;
    let userId = $currentUser.id;
    let productCategory;

    function uniqueId() {
        return Date.now();
    }
    const createProduct = () => {
        console.log(description);
        let list = $category.find((n) => n.id === productCategory.id);
        const product = {
            name,
            description,
            shortDesc,
            imageSource,
            id: uniqueId(),
            userId: userId,
        };
        list.products.push(product);
    };
</script>

<body>
    <form on:submit|preventDefault={createProduct}>
        <label for="categories">Category:</label>
        <select name="categories" id="categories" bind:value={productCategory}>
            {#each $category as category (category.id)}
                <option value={category}>{category.name}</option>
            {/each}
        </select>
        <br />
        <label for="fname">Product name:</label>
        <input type="text" id="fname" name="fname" bind:value={name} /><br /><br
        />
        <label for="desc">Product description:</label>
        <Editor
            apiKey="0qvesdf8cerju08tig425usiegdr2hbtwgdknq463vtagfus"
            bind:value={description}
        />
        <label for="short-desc">Short description:</label>
        <textarea
            class="w3-input w3-border"
            id="short-desc"
            name="short-desc"
            bind:value={shortDesc}
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
