<script>
	import { page } from '$app/stores';
	// Do url stuff with page
</script>

<main>
	<div class="sidebar">
		<a href="/settings/profile">Public profile</a>
	</div>
</main>

<style lang="scss">
	div.sidebar {
		width: 300px;
		height: 100%;
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		padding: 1rem;
		border-right: 1px solid #777;
		> a {
			text-decoration: none;
			color: white;
			padding: 0.75rem;
		}
		> a.active {
			background-color: #777;
		}
	}
</style>
