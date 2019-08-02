<script>
	// imports
	import AsideForm from './components/AsideForm.svelte';
	import Controls from './components/Controls.svelte';
	import Graph from './components/Graph.svelte';

</script>

<style>
	header {
		display: flex;
		grid-area: header;
		align-items: center;
	}
</style>



<header>
	<Controls />
</header>

<aside>
	<AsideForm />
</aside>

<main>
	<Graph />
</main>
