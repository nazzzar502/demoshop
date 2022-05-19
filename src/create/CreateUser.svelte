<script>
    import { users } from "../store.js";
    import { Sveltik, Form, Field, ErrorMessage } from "sveltik";
    import { onMount } from "svelte";

    let buffer = [];
    let admin = false;
    let checked = false;
    let message;

    let initialValues = {
        name: "",
        email: "",
        password: "",
        check: "",
    };
    //validation function
    let validate = (values) => {
        const errors = {};
        //user name validation
        if (!values.name) {
            errors.name = "Name is required";
        } else if (
            !/^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{1,15}$/i.test(
                values.name
            )
        ) {
            errors.name = "Invalid name";
        }
        //user email validation
        if (!values.email) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        //user complex password validation
        if (!values.password) {
            errors.password = "Password is required";
        } else if (
            !/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){2,32}$/gim.test(
                values.password
            )
        ) {
            errors.password =
                "password must contain numbers, uppercase and lowercase letters,special symbols.";
        } else if (values.password.length < 8) {
            errors.password =
                "Password must be at least 8 characters with no space";
        }
        if (!values.check) {
            errors.check = "Repeat Password";
        } else if (values.check != values.password) {
            errors.check = "Password didn`t match";
        }

        //if all necssary values from inputs are validated we will update initial values
        if (
            !errors.name &&
            !errors.email &&
            !errors.password &&
            !errors.check
        ) {
            initialValues.name = values.name;
            initialValues.email = values.email;
            initialValues.password = values.password;
            initialValues.check = values.check;
            checked = true;
        } else {
            checked = false;
        }
        return errors;
    };

    //function for showing password values, used  with icons
    const showContent = (id) => {
        document.getElementById(id).type = "text";
        setTimeout(() => {
            document.getElementById(id).type = "password";
        }, 800);
    };

    function uniqueId() {
        return Date.now();
    }
    //Hashing password using bcrypt

    //User object constructor function
    const generateUser = (values) => {
        let user = {};
        user.name = values.name;
        user.email = values.email;
        user.password = values.password;
        user.check = values.check;
        user.id = uniqueId();
        user.admin = admin;
        return user;
    };

    //function for finding if record about user is already present inside database or store
    const findUser = (user) => {
        let itemIndex = $users.find((n) => n.email == user.email);
        console.log(`user  -` + user.email);
        console.log(itemIndex);
        if (itemIndex) {
            return true;
        }
        return false;
    };

    //function for creating record about user inside store
    const createUser = () => {
        if (checked) {
            let user = generateUser(initialValues);

            const hashedPassword = bcrypt.hashSync(
                values.password,
                bcrypt.genSaltSync()
            );
            console.log(hashedPassword);

            if (!findUser(user)) {
                buffer.push(user);
                users.update((p) => buffer);
                message = `User ` + user.name + ` is created`;
                console.log($users);
                return true;
            } else {
                message = `User with this email is alredy registered`;
            }
        }
        return false;
    };
</script>

<body>
    {#if message}
        <div class="w3-panel w3-grey">
            <h3>{message}</h3>
        </div>
    {/if}
    <Sveltik {initialValues} {validate}>
        <Form>
            <form on:submit|preventDefault>
                <div class="w3-container">
                    <label for="name">User name:</label>
                    <Field type="text" id="name" name="name" />
                    <div class="errorMessage">
                        <ErrorMessage name="name" as="span" />
                    </div>
                </div>
                <div class="w3-container">
                    <label for="email">User email:</label>
                    <Field type="email" id="email" name="email" />
                    <div class="errorMessage">
                        <ErrorMessage name="email" as="span" />
                    </div>
                </div>

                <div class="w3-container">
                    <label for="password">Create password:</label>
                    <Field type="password" id="password" name="password" /><i
                        class="fas fa-eye"
                        on:click={() => {
                            showContent("password");
                        }}
                    />
                    <div class="errorMessage">
                        <ErrorMessage name="password" as="span" />
                    </div>
                </div>

                <div class="w3-container">
                    <label for="check">Repeat password:</label>
                    <Field type="password" id="check" name="check" /><i
                        class="fas fa-eye"
                        on:click={() => {
                            showContent("check");
                        }}
                    />
                    <div class="errorMessage">
                        <ErrorMessage name="check" as="span" />
                    </div>
                </div>

                <div class="w3-container">
                    <button
                        type="submit"
                        on:click={() => {
                            if (createUser()) {
                                window.location.href = "#/";
                            }
                        }}>Sign In</button
                    >
                </div>
            </form>
        </Form>
    </Sveltik>
</body>

<style>
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
