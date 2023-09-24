<script lang="ts">
	import { getContext } from 'svelte';

	const setIsOpen = (getContext('dropdown') as { setIsOpen: (value: boolean) => void }).setIsOpen!;
	if (!setIsOpen) console.error('Dropdown component not parent');
</script>

<button class="dropdown-button" on:click={() => setIsOpen(true)}><slot /></button>

<style lang="scss">
	button.dropdown-button {
		box-sizing: content-box;
		padding: 1rem;
		width: 16px;
		height: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: inherit;
		border: none;
		&:hover {
			background-color: #555;
		}
	}
</style>
