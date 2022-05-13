<script>
	import Header from "./shared/Header.svelte";
	import Sidebar from "./shared/Sidebar.svelte";
	import Products from "./shared/Products.svelte";
	import CreateProduct from "./create/CreateProduct.svelte";
	import Footer from "./shared/Footer.svelte";
	import Router from "svelte-spa-router";
	import routes from "./routes.js";

	let tabType;
	//tabs
	let tabs = [`Current products`, `Create new product`]; //Edit will be opend when i click on product
	let activeTab = `Current products`;
	const changeTab = (e) => {
		tabType = e.detail;
		activeTab = tabType;
		console.log(tabType);
	};
	//products
	let products = [];
	//routng implementation
	//Checkout stores
</script>

<main>
	<div class="row"><Header /></div>
	<Sidebar {tabs} on:changeTab={changeTab} />
	<div class="content">
		<!--Move style from tag to some class-->
		{#if activeTab === "Current products"}
			<Router {routes} />
		{:else}
			<CreateProduct {products} />
		{/if}
	</div>
</main>

<style>
	.content {
		margin-left: 15%;
		margin-right: 10%;
	}
</style>
