<script>
    import { users, currentUser, session } from "../store.js";
    // import { Sveltik, Form, Field, ErrorMessage } from "sveltik";
    import { onMount } from "svelte";
    let email;
    let password;
    let message = ``;

    const showContent = (id) => {
        document.getElementById(id).type = "text";
        setTimeout(() => {
            document.getElementById(id).type = "password";
        }, 800);
    };

    const findUser = (email) => {
        let itemIndex = $users.find((n) => n.email == email);

        if (itemIndex && itemIndex.password === password) {
            $currentUser = itemIndex;
            $session = true;
            //console.log($currentUser);
            console.log($currentUser);
            return true;
        }

        message = `Wrong email or password`;

        return false;
    };
</script>

<body>
    <form on:submit|preventDefault action="https://google.com">
        <div class="w3-container">
            <div class="errorMessage">{message}</div>
            <label for="email">User email:</label>
            <input type="email" id="email" name="email" bind:value={email} />
        </div>

        <div class="w3-container">
            <label for="password">Create password:</label>
            <input
                type="password"
                id="password"
                name="password"
                bind:value={password}
            /><i
                class="fas fa-eye"
                on:click={() => {
                    showContent("password");
                }}
            />
        </div>
        <div class="w3-container">
            <a
                class="w3-button"
                on:click={() => {
                    if (findUser(email)) {
                    }
                }}
                href="/products/view">Log In</a
            >
        </div>
    </form>
</body>

<style>
    .w3-button {
        background-color: #e3e8eb;
        color: #474745;
        text-decoration: none;
    }
    i {
        padding: 10px;
    }
    .w3-container {
        margin-bottom: 10px;
    }
    .errorMessage {
        font-weight: lighter;
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: red;
    }
    form {
        max-width: 400px;
        width: auto;
        margin-left: 25%;
    }
</style>
