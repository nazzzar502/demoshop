<script>
	import Header from "./shared/Header.svelte";
	import Sidebar from "./shared/Sidebar.svelte";
	import Products from "./shared/Products.svelte";
	import CreateProduct from "./create/CreateProduct.svelte";
	import Footer from "./shared/Footer.svelte";
	let tabType;
	//tabs
	let tabs = [`Current products`, `Create new product`, `Edit`]; //Edit will be opend when i click on product
	let activeTab = `Create new product`;
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
	<i />
	<Sidebar {tabs} on:changeTab={changeTab} />
	<div class="content">
		<!--Move style from tag to some class-->
		{#if activeTab === "Current products"}
			<Products {products} />
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
