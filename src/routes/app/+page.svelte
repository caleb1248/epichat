<script>
	import { auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import DropdownMenuItem from '$lib/dropdown/dropdownMenuItem.svelte';
	import { goto } from '$app/navigation';
	import DropdownButton from '$lib/dropdown/dropdownButton.svelte';
</script>

<svelte:head>
	<title>Home | Chat thingy</title>
</svelte:head>

<nav>
	<span class="title">Chat thingy</span>
	<Dropdown --white-space="nowrap" --dropdown-top="4rem">
		<DropdownButton slot="dropdownBtn">
			<svg class="threedot" width="16" height="16" viewBox="10 4 4 16"
				><path
					d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
				/></svg
			>
		</DropdownButton>
		<DropdownMenuItem on:click={() => goto('/app/settings/profile')}>Your profile</DropdownMenuItem>
	</Dropdown>
</nav>
<main>
	<div class="sidebar">
		<button class="btn glow" on:click={() => signOut(auth)}>signout</button>
	</div>
</main>

<style lang="scss">
	nav {
		width: 100%;
		height: 3.5rem;
		background-color: #444;
		display: flex;
		justify-content: space-between;
		align-items: center;

		span.title {
			font-size: 1.5rem;
			margin-left: 1rem;
		}
		:global(button.dropdown-button) {
			box-sizing: content-box;
			padding: 1rem;
			width: 16px;
			height: 16px;
			display: flex;
			justify-content: center;
			border-radius: 1000px;
			margin-right: 1rem;
			align-items: center;
			background: inherit;
			border: none;
			&:hover {
				background-color: #555;
			}
		}
	}

	svg.threedot {
		margin: 0;
	}

	main {
		height: calc(100% - 3.4rem);
		div.sidebar {
			width: 300px;
			height: 100%;
			border-right: 1px solid #777;
		}
	}
</style>
