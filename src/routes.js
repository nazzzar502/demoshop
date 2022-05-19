//Import some Sveltve components
import Products from "./shared/Products.svelte";
import EditProduct from "./edit/EditProduct.svelte";
import CreateProduct from "./create/CreateProduct.svelte";
import ViewProduct from "./view/ViewProduct.svelte";
import CreateUser from "./create/CreateUser.svelte";
import EditUser from "./edit/EditUser.svelte";
import ViewUser from "./view/ViewUser.svelte";
import Cart from "./shared/Cart.svelte";
import Login from "./shared/Login.svelte";
import Notfound from "./shared/Notfound.svelte";

//Route dictionary
export default {
    '/': Products,
    '/create': CreateProduct,
    '/product/:id': ViewProduct,
    '/product/edit/:id': EditProduct,
    '/cart': Cart,
    '/login': Login,
    '/user/create': CreateUser,
    '/user/:id': ViewUser,
    '/user/edit/:id': EditUser,
    '*': Notfound
}

export const routes = {
    '/book/:id': wrap({
        asyncComponent: () => import('./Book.svelte')
    })
}