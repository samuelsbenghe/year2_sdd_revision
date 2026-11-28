import { redirect } from '@sveltejs/kit';
import { modules } from '$lib/modules';

export function load() {
	redirect(308, modules.appliedAi.href);
}
