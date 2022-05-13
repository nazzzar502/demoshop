//Import some Sveltve components
import Products from "./shared/Products.svelte";
import EditProduct from "./edit/EditProduct.svelte";
import ViewProduct from "./view/ViewProduct.svelte";
import Notfound from "./shared/Notfound.svelte";

//Route dictionary
export default {
    '/': Products,
    '/product/:id': ViewProduct,
    '/product/edit/:id': EditProduct,
    //'/product/:id': ViewProducts,
    //Eror handler and catcher, if nothing match values than not foud wil appear
    '*': Notfound

}