<script>
    import { users } from "../store.js";
    import { onDestroy, onMount } from "svelte";
    export let currentRoute;
      const id = parseInt(currentRoute.namedParams.id, 10);
    let avatar;
    let fileinput;

    let user;
    let removed = false;
    let updated = false;
    let admin;
    //updating product from store when component is injected in DOM
    onMount(() => {
        user = $users.find((person) => person.id === id);
    });

    //deleting product from store

    const deleteUser = () => {
        users.update((users) => {
            return users.filter((user) => user.id != id);
        });
        removed = true;
    };

    const updateUser = () => {
        user.admin = admin;
        users.update((users) => {
            let itemIndex = users.findIndex((person) => person.id == id);
            users[itemIndex] = user;
            return users;
        });
        updated = true;
    };

    const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
}
</script>

{#if removed}
    <div class="w3-panel w3-grey">
        <h3>User removed!</h3>
    </div>
{/if}
{#if updated}
    <div class="w3-panel w3-grey">
        <h3>User updated!</h3>
    </div>
{/if}
{#if !removed}
    {#if user}
        <body>
            <form on:submit|preventDefault>
                <label for="fname">User name:</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    bind:value={user.name}
                /><br /><br />
                <label for="desc">User email:</label>
                <input
                    type="email"
                    class="w3-input w3-border"
                    id="desc"
                    name="desc"
                    bind:value={user.email}
                />
                <br /><br />
                <label for="desc">User password:</label>
                <input
                    type="email"
                    class="w3-input w3-border"
                    id="desc"
                    name="desc"
                    bind:value={user.password}
                />
                <br /><br />
                {#if user.admin}
                    <label for="desc">User status:</label>
                    <label>
                        <input
                            type="radio"
                            bind:group={admin}
                            name="scoops"
                            value={true}
                        />
                        Admin
                    </label>
                    <label>
                        <input
                            type="radio"
                            bind:group={admin}
                            name="scoops"
                            value={false}
                        />
                        User
                    </label>
                    <br /><br />
                {/if}
                <div class="w3-bar">
                    <a class="w3-button" id="1" on:click={updateUser}>Submit</a>
                    <a class="w3-button" id="cart-button" on:click={deleteUser}
                        >Delete</a
                    >
                    <a class="w3-button" href="/user/{user.id}">Back</a>
                </div>
            </form>
        </body>
    {/if}
{:else}
    <a class="w3-button" href="/user/{user.id}">Back</a>
{/if}

<style>
    form {
        max-width: 400px;
        width: auto;
        margin-left: 25%;
    }

    h3 {
        color: #e3e8eb;
    }

    .w3-bar {
        background-color: #474745;
        margin: 0 auto;
        max-width: auto;
        width: 100%;
        height: auto;
    }
    .w3-bar > a {
        display: inline-block;
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
    #cart-button {
        background-color: #e3e8eb;
        color: #474745;
    }
</style>
