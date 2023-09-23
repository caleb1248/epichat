<script>
	import { auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
	import './+page.css';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import DropdownLink from '$lib/dropdown/dropdownLink.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Home | Chat thingy</title>
</svelte:head>

<nav>
	<span class="title">Chat thingy</span>
	<Dropdown let:setIsOpen>
		<button slot="dropdownBtn" class="btn icon">
			<svg class="threedot" width="16" height="16" viewBox="10 4 4 16"
				><path
					d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
				/></svg
			>
		</button>
		<DropdownLink {setIsOpen} on:click={() => goto('/app/account')}>My account</DropdownLink>
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

		button.icon {
			box-sizing: content-box;
			padding: 1rem;
			width: 16px;
			height: 16px;
			border-radius: 1000px;
			margin-right: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			&:hover {
				background-color: #555;
			}
			svg.threedot {
				margin: 0;
			}
		}
	}

	main {
		height: calc(100% - 3.4rem);
	}

	div.sidebar {
		width: 300px;
		border-right: 1px solid #777;
	}
</style>
