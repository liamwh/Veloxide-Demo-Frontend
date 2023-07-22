<script lang="ts">
	import { onMount } from 'svelte';
	import { getBankAccount } from '$lib/getBankAccount';
	import type { BankAccountView } from '../bindings/BankAccountView';

	export let accountId = '123';
	let account: BankAccountView;

	onMount(async () => {
		account = await getBankAccount(accountId);
	});
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Account: {accountId}</h2>
		<div class="card-actions justify-end">
			{#if account}
				<p>EUR: {account.balance}</p>
			{:else}
				<p>Balance loading...</p>
			{/if}
			<a href="/payments/{accountId}">
				<button class="btn btn-primary">View</button>
			</a>
		</div>
	</div>
</div>
