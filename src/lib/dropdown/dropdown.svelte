<script lang="ts">
	import { setContext } from 'svelte';

	let isOpen = false;

	function setIsOpen(open: boolean) {
		isOpen = open;
	}

	setContext('dropdown', { setIsOpen });
</script>

<div class="dropdown">
	<slot name="dropdownBtn" />
	<div class="dropdown-content" style="display: {isOpen ? 'block' : 'none'}">
		<slot {setIsOpen} />
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		position: absolute;
		right: 0;
		min-width: 100px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
</style>
