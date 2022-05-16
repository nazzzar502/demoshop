//Import some Sveltve components
import Products from "./shared/Products.svelte";
import EditProduct from "./edit/EditProduct.svelte";
import CreateProduct from "./create/CreateProduct.svelte";
import ViewProduct from "./view/ViewProduct.svelte";
import Cart from "./shared/Cart.svelte";
import Notfound from "./shared/Notfound.svelte";

//Route dictionary
export default {
    '/': Products,
    '/create': CreateProduct,
    '/cart': Cart,
    '/product/:id': ViewProduct,
    '/product/edit/:id': EditProduct,
    '*': Notfound

}