<script>
	import Header from "./shared/Header.svelte";
	import { Route, Router } from "svelte-router-spa";

	import { routes } from "./routes";
	import { onDestroy, onMount } from "svelte";
	import NavBar from "./shared/NavBar.svelte";

</script>

<main>
	<div class="row"><Header /></div>
	<div class="row"><NavBar /></div>
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
