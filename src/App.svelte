<script>
	import Header from "./shared/Header.svelte";

	import Router from "svelte-spa-router";
	import routes from "./routes.js";

	let tabType;
	//tabs

	//products

	//routng implementation
	//Checkout stores
</script>

<main>
	<div class="row"><Header /></div>
	<div class="w3-container">
		<a href="#/" onclick="">
			<div
				class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"
			>
				Products
			</div>
		</a>
		<a href="#/create" onclick="">
			<div
				class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"
			>
				CreateProduct
			</div>
		</a>
		<a href="#/cart" onclick="">
			<div
				class="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding"
			>
				Cart
			</div>
		</a>
	</div>

	<div class="w3-container">
		<Router {routes} />
	</div>
</main>

<style>
	.w3-container {
		margin: 0 auto;
		max-width: 960px;
		width: 100%;
		height: auto;

		margin: 0 auto;
		max-width: 960px;
		width: 100%;
		height: auto;
	}
</style>
