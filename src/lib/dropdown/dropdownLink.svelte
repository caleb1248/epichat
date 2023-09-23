<script lang="ts">
	import { getContext } from 'svelte';

	const setIsOpen = (getContext('dropdown') as { setIsOpen: (value: boolean) => void }).setIsOpen!;
	if (!setIsOpen) console.error('Dropdown component not parent');
</script>

<div class="link-container">
	<button
		on:click={() => {
			setIsOpen(true);
		}}
	>
		<slot />
	</button>
</div>

<style lang="scss">
	div.link-container {
		background-color: #555;
		padding: 1rem;
		display: flex;
		a {
			color: inherit;
			background-color: inherit;
			text-decoration: none;
		}
	}
</style>
