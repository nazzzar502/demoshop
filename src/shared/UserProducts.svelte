<script>
    import { box, currentUser } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    import { Navigate } from "svelte-router-spa";

    let placeholder = "https://www.w3schools.com/w3css/img_lights.jpg";
    let userBox = [];

    onMount(() => {
        userBox = findUserProducts(userBox);
        console.log(`User Array`);
        console.log(userBox);
    });

    const findUserProducts = (arr) => {
        $box.forEach((product) => {
            if (product.userId === $currentUser.id) {
                arr.push(product);
            }
        });
        return arr;
    };
</script>

<body
    ><div class="w3-panel w3-grey">
        <h3>User products</h3>
    </div>
    {#if userBox}
        {#each userBox as item (item.id)}
            <div class="w3-col s4 w3-center">
                <div class="w3-card-2">
                    <header class="w3-container w3-grey">
                        <h3>{item.name}</h3>
                    </header>
                    <Navigate to="/products/{item.id}">
                        <img
                            class="w3-image"
                            src={placeholder}
                            alt="TestImage"
                        />
                    </Navigate>
                </div>
            </div>
        {/each}
    {:else}
        <div class="w3-panel w3-red">
            <h3>You don`t have any products</h3>
        </div>
    {/if}
</body>

<style>
    .w3-col {
        padding: 3px;
        max-width: 400px;
        height: auto;
        padding: 10px;
    }
    h3 {
        color: #e3e8eb;
    }
</style>
