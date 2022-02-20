<script lang="ts">
	import ForgotPassword from './routes/ForgotPassword.svelte';
	import SignIn from './routes/SignIn.svelte';
	import SignUp from './routes/SignUp.svelte';
	import Router from 'svelte-spa-router';
	
	const routes = 	{
		"/": SignUp,
		"/signin": SignIn,
		"/forgotpassword": ForgotPassword
	};

</script>

<main>
	<Router {routes}/>	
</main>

