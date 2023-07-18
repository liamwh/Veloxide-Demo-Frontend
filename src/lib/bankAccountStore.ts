// bankStore.ts
import { writable } from 'svelte/store';
import type { BankAccountView } from '../bindings/BankAccountView';

export const bankAccountStore = writable({
	account_id: '',
	balance: 0,
	written_checks: [],
	account_transactions: []
});