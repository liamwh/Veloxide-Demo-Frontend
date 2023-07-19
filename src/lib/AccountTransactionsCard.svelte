<script lang="ts">
	import type { BankAccountView } from '../bindings/BankAccountView';
	import { bankAccountStore } from '$lib/bankAccountStore';

	export let bankAccount: BankAccountView;

	let showTransactionsCount = 10; // Initial transactions to show

	// Function to load more transactions
	function loadMoreTransactions() {
		showTransactionsCount += 10;
	}

	// Subscribe to store
	bankAccountStore.subscribe((value) => {
		bankAccount = value;
	});
</script>

<div class="card min-w-full bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Account Transactions</h2>
		<table class="table table-compact w-full">
			<thead>
				<tr>
					<th>Description</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{#each [...bankAccount.account_transactions]
					.reverse()
					.slice(0, showTransactionsCount) as transaction}
					<tr>
						<td>{transaction.description}</td>
						<td>{transaction.amount}</td>
					</tr>
				{/each}
			</tbody>
		</table>
		{#if bankAccount.account_transactions.length > showTransactionsCount}
			<div class="justify-center w-full flex flex-auto">
				<button class="btn btn-primary w-auto" on:click={loadMoreTransactions}>Show More</button>
			</div>
		{/if}
	</div>
</div>
