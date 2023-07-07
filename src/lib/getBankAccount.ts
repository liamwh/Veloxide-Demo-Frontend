import { PUBLIC_BANK_ACCOUNT_SERVICE_API_URL } from '$env/static/public';
import { toast } from '@zerodevx/svelte-toast';
import type { BankAccountView } from 'src/bindings/BankAccountView';

export async function getBankAccount(accountId: string): Promise<BankAccountView | void> {
	try {
		const response = await fetch(
			`${PUBLIC_BANK_ACCOUNT_SERVICE_API_URL}/bank-accounts/${accountId}`
		);
		switch (response.status) {
			case 200:
				const bankAccount: BankAccountView = await response.json();
				return bankAccount;
			case 204:
				return;
			case 404:
				toast.push('Account not found');
				return;
			default:
				toast.push('Error fetching account');
				return;
		}
	} catch {
		toast.push('Error fetching account');
		return;
	}
}