<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<li class="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50">
	<h3 class="font-semibold text-indigo-600 transition-colors group-hover:text-indigo-700">{title}</h3>
	<p class="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
</li>
