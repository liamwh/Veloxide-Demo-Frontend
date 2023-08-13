<script lang="ts">
	import AccountPreviewCard from '$lib/AccountPreviewCard.svelte';

	let accounts = ['123'];
	import Testbutton from '$lib/Testbutton.svelte';
</script>

<div class="flex flex-col w-screen">
	<Testbutton />
	<div class="flex flex-col w-screen items-center">
		<article class="prose lg:prose-xl">
			<h3>Overview</h3>
		</article>
		{#each accounts as accountId}
			<AccountPreviewCard {accountId} />
		{/each}
	</div>
</div>
