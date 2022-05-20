//Import some Sveltve components
import Products from "./shared/ProductsDebug.svelte";
import UserProducts from "./shared/UserProducts.svelte";
import EditProduct from "./edit/EditProduct.svelte";
import CreateProduct from "./create/CreateProduct.svelte";
import ViewProduct from "./view/ViewProduct.svelte";
import CreateUser from "./create/CreateUser.svelte";
import EditUser from "./edit/EditUser.svelte";
import ViewUser from "./view/ViewUser.svelte";
import Cart from "./shared/Cart.svelte";
import Login from "./shared/Login.svelte";
import PublicLayout from "./PublicLayout.svelte"
import Notfound from "./shared/Notfound.svelte";
import { get, writable } from 'svelte/store';
import { currentUser, session } from "./store.js";
import { test } from "./store.js";


function userIsAdmin() {
    let t = get(session);
    console.log(`value is` + t);
    if (t) {
        return t;
    }
    return false;

}
//Route dictionary

const routes = [
    {
        name: '/',
        component: PublicLayout,
    },
    {
        name: 'cart',
        component: Cart,
    },
    {
        name: 'login',
        component: Login,
    },

    {
        name: 'register',
        component: CreateUser
    },

    {
        name: `myproducts`,
        component: UserProducts
    },

    {
        name: '/user',
        component: '',
        onlyIf: { guard: userIsAdmin, redirect: '/login' },
        nestedRoutes: [{
            name: `:id`,
            component: ViewUser
        }, {
            name: `edit/:id`,
            component: EditUser
        },]
    },

    {
        name: 'products',
        component: ``,
        nestedRoutes: [
            {
                name: 'view',
                component: Products,
                nestedRoutes: []
            },
            {
                name: `:id`,
                component: ViewProduct
            },
        ]
    },

    {
        name: `product`,
        component: ``,
        onlyIf: { guard: userIsAdmin, redirect: '/login' },
        nestedRoutes: [
            {
                name: `create`,
                component: CreateProduct
            }, {
                name: `edit/:id`,
                component: EditProduct
            }]

    }
]

export { routes }