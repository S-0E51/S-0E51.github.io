<script lang="ts">
	import type { Project } from '#lib/data/portfolio.js';
	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<div class="project-art" aria-hidden="true">
		<div class="art-topline"><span>{project.category}</span><span>{project.status}</span></div>
		<div class="art-title">{project.coverTitle}</div>
		<div class="art-bottomline">
			<span>{project.title}</span>{#if project.repositoryUrl}<span>↗</span>{/if}
		</div>
	</div>
	<div class="project-copy">
		<div class="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
		<h3>{project.title}</h3>
		{#if project.subtitle}<p class="project-subtitle">{project.subtitle}</p>{/if}
		<p class="project-period">{project.period}</p>
		<p>{project.description}</p>
		<ul class="project-highlights">
			{#each project.highlights as highlight (highlight)}<li>{highlight}</li>{/each}
		</ul>
		<div class="project-technology-groups">
			{#each project.technologyGroups as group (group.title)}
				<div>
					<h4>{group.title}</h4>
					<ul class="project-technologies" aria-label={`${project.title}: ${group.title}`}>
						{#each group.items as technology (technology)}<li>{technology}</li>{/each}
					</ul>
				</div>
			{/each}
		</div>
		{#if project.repositoryUrl}
			<a class="text-link" href={project.repositoryUrl} rel="external"
				>Explore repository <span aria-hidden="true">↗</span></a
			>
		{:else}
			<p class="repository-pending">Repository pending</p>
		{/if}
	</div>
</article>
