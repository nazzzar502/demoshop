<script>
	import Header from "./shared/Header.svelte";
	import { Route, Router } from "svelte-router-spa";
	import Sidebar from "./shared/Sidebar.svelte";
	import { routes } from "./routes";
	import { onDestroy, onMount } from "svelte";
</script>

<main>
	<div class="row"><Header /></div>
	<div class="w3-row">
		<div id="placeholder" class="w3-col w3-container" />
		<div id="sidebar" class="w3-col w3-container">
			<Sidebar />
		</div>
		<div id="maincontent" class="w3-col w3-container">
			<Router {routes} />
		</div>
		<div id="placeholder" class="w3-col w3-container" />
	</div>
</main>

<style>
	#maincontent {
		width: 70%;
	}
	#sidebar {
		width: 20%;
	}
	#placeholder {
		width: 5%;
	}
</style>
