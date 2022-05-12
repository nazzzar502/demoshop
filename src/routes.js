//Import some Sveltve components
import Products from "./shared/Products.svelte";
import EditProducts from "./edit/EditProducts.svelte";
import Notfound from "./shared/Notfound.svelte";

//Route dictionary
export default {
    '/': Products,
    '/product/:id': EditProducts,
    //Eror handler and catcher, if nothing match values than not foud wil appear
    '*': Notfound

}