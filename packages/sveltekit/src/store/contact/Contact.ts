import { type Writable, writable } from 'svelte/store';

export interface Contact {
	name: string;
	nameKana: string;
	email: string;
	inquiry: string;
}
export const contact: Writable<Contact> = writable({
	name: '',
	nameKana: '',
	email: '',
	inquiry: ''
});
