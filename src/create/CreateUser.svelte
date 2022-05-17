<script>
    import { users } from "../store.js";
    import { Sveltik, Form, Field, ErrorMessage } from "sveltik";

    let checked = false;
    let admin = false;
    let buffer = [];

    let user = new Object();

    let initialValues = {
        name: "",
        email: "",
        password: "",
        check: "",
    };

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
        console.log(user);
        return errors;
    };

    const showContent = (id) => {
        document.getElementById(id).type = "text";
        setTimeout(() => {
            document.getElementById(id).type = "password";
        }, 800);
    };

    function uniqueId() {
        return Date.now();
    }

    const createUser = () => {
        user.password = values.password;
        user.id = uniqueId();
        user.email = values.email;
        user.login = values.name;
    };
</script>

<body>
    <Sveltik {initialValues} {validate} let:isSubmitting>
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
                    <button type="submit" on:click={createUser}>Sign In</button>
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
