<script>
	import { goto } from '$app/navigation';
	import { signInWithGoogle } from '$lib/auth';
	import { auth } from '$lib/firebase';
	import { onMount } from 'svelte';

	import './homepage.css';
	onMount(() => setTimeout(() => (auth.currentUser ? goto('/app') : null), 500));
</script>

<svelte:head>
	<title>Chat thingy</title>
</svelte:head>
<main>
	<h1>Chat app</h1>
	<button class="btn glow" on:click={() => goto('/auth/login')}>Log in</button>
	<button class="btn glow" on:click={() => goto('/auth/signup')}>Sign up</button>
</main>

<style>
	:global(main) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
