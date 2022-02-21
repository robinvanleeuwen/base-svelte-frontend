<script lang="ts">
	import ForgotPassword from './pages/signin/ForgotPassword.svelte';
	import SignIn from './pages/signin/SignIn.svelte';
	import SignUp from './pages/signin/SignUp.svelte';
	import Router from 'svelte-spa-router';
	import Menu from "./pages/menu/Menu.svelte";
	import {apiKey} from "./stores/User";
	import "main.css";

	const routes = 	{
		"/signin": SignIn,
		"/signup": SignUp,
		"/forgotpassword": ForgotPassword,
		"/main": Menu
	};

</script>

<div class="flex items-center justify-center">
	<Router {routes}/>
	{#if (!$apiKey)}
		<SignIn />
	{:else }
		<Menu />
	{/if}
</div>

