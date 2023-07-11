<script>
	import '../app.scss';

	import Navbar from '$lib/Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<m class="container">
	<SvelteToast />
	<Navbar />
	<div class="content">
		<slot />
	</div>
</m>
