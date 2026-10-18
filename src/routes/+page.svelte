<script lang="ts">
	import { asset } from '$app/paths';
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import {
		additionalExperience,
		education,
		profile,
		projects,
		technologyGroups,
		training
	} from '#lib/data/portfolio.js';
</script>

<svelte:head>
	<title>{profile.name} — Professional Portfolio</title>
	<meta
		name="description"
		content={`${profile.name}. ${profile.introduction} Explore selected projects and professional background.`}
	/>
	<meta name="theme-color" content="#44362c" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
	<nav class="site-nav wrap" aria-label="Main navigation">
		<a href="#main">Home</a>
		<a href="#projects">Projects</a>
		<a href="#technologies">Technologies</a>
		<a href="#resume">Resume</a>
		<a href="#about">About</a>
		<a class="label-link" href="#contact">
			<span class="link-label">Contact</span>
		</a>
	</nav>
</header>

<main id="main" tabindex="-1">
	<section class="hero wrap" aria-labelledby="hero-title">
		<div class="hero-copy">
			<p class="eyebrow">
				<span class="small-square" aria-hidden="true"></span>
				Professional portfolio
			</p>
			<div class="hero-identity">
				<img
					class="hero-photo"
					src={asset('images/profile.jpg')}
					alt=""
					width="112"
					height="112"
					decoding="async"
				/>
				<h1 id="hero-title">{profile.name}</h1>
			</div>
			<p class="hero-introduction">{profile.introduction}</p>
			<div class="hero-actions">
				<a class="button button-primary" href="#projects">View projects</a>
				<a class="button button-secondary" href="#resume">View resume</a>
			</div>
			<div class="hero-profile-links" aria-label="Contact and professional profiles">
				<a class="label-link" href={`mailto:${profile.email}`} rel="external">
					<span class="link-label">Email me</span>
				</a>
				<a class="label-link" href={profile.githubUrl} rel="external">
					<span class="link-label">GitHub</span>
				</a>
				<a class="label-link" href={profile.linkedinUrl} rel="external">
					<span class="link-label">LinkedIn</span>
				</a>
			</div>
		</div>
		<aside class="hero-summary" aria-labelledby="summary-title">
			<p class="eyebrow">At a glance</p>
			<h2 id="summary-title">{education[0].qualification}</h2>
			<p class="summary-institution">{education[0].institution}</p>
			<p class="summary-detail">{education[0].detail}</p>
			<h3>Career interests</h3>
			<ul class="hero-career-list">
				{#each profile.careerInterests as interest (interest)}<li>{interest}</li>{/each}
			</ul>
		</aside>
	</section>

	<section id="projects" class="section wrap" aria-labelledby="projects-title">
		<div class="section-heading">
			<div>
				<p class="eyebrow">01 / Selected work</p>
				<h2 id="projects-title">Selected projects</h2>
			</div>
			<p class="section-note">
				Desktop and full-stack development,<br />OCR, NLP, and AI integration.
			</p>
		</div>
		<div class="project-grid">
			{#each projects as project (project.slug)}<ProjectCard {project} />{/each}
		</div>
	</section>

	<section id="technologies" class="technologies-section" aria-labelledby="technologies-title">
		<div class="wrap">
			<p class="eyebrow">02 / Technologies</p>
			<h2 id="technologies-title">Technologies I've worked with</h2>
			<div class="technology-groups">
				{#each technologyGroups as group (group.id)}
					<section class="technology-group" aria-labelledby={`${group.id}-title`}>
						<h3 id={`${group.id}-title`}>{group.title}</h3>
						<ul class="technology-list">
							{#each group.items as item (item.name)}
								<li>
									<span>{item.name}</span>
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			</div>
		</div>
	</section>

	<section id="resume" class="section wrap resume-grid" aria-labelledby="resume-title">
		<div>
			<p class="eyebrow">03 / Professional background</p>
			<h2 id="resume-title">Education &<br />experience.</h2>
			{#if profile.resumePath}
				<a class="text-link label-link" href={asset(profile.resumePath)} download>
					<span class="link-label">Download resume</span>
				</a>
			{/if}
		</div>
		<div class="resume-details">
			<section class="background-section" aria-labelledby="education-title">
				<h3 id="education-title">Education</h3>
				<ul class="background-list">
					{#each education as entry (entry.institution)}
						<li>
							<h4>{entry.qualification}</h4>
							<p class="background-employer">{entry.institution}</p>
							<p class="background-period">{entry.period}</p>
							{#if entry.detail}<p class="background-description">{entry.detail}</p>{/if}
							{#if entry.coursework?.length}
								<section
									class="coursework-section"
									aria-label={`Relevant coursework at ${entry.institution}`}
								>
									<h5>Relevant coursework</h5>
									<dl class="coursework-list">
										{#each entry.coursework as group (group.area)}
											<div>
												<dt>{group.area}</dt>
												<dd>{group.courses.join('; ')}</dd>
											</div>
										{/each}
									</dl>
								</section>
							{/if}
						</li>
					{/each}
				</ul>
			</section>
			<section class="background-section" aria-labelledby="training-title">
				<h3 id="training-title">Additional training</h3>
				<ul class="background-list training-list">
					{#each training as entry (entry.title)}
						<li>
							<h4>
								<a class="label-link" href={entry.sourceUrl} rel="external">
									<span class="link-label">{entry.title}</span>
								</a>
							</h4>
							<p class="background-employer">{entry.provider}</p>
							<p class="background-period">{entry.date}</p>
							<p class="background-description">{entry.description}</p>
						</li>
					{/each}
				</ul>
			</section>
			<section class="background-section additional-experience" aria-labelledby="experience-title">
				<h3 id="experience-title">Additional experience</h3>
				<ul class="background-list">
					{#each additionalExperience as entry (entry.role)}
						<li>
							<h4>{entry.role}</h4>
							<p class="background-employer">{entry.employer}</p>
							<p class="background-period">{entry.period}</p>
							<p class="background-description">{entry.summary}</p>
						</li>
					{/each}
				</ul>
			</section>
		</div>
	</section>

	<section id="about" class="about-section" aria-labelledby="about-title">
		<div class="wrap about-grid">
			<div>
				<p class="eyebrow">04 / About</p>
				<h2 id="about-title">A quick about me</h2>
			</div>
			<div class="about-copy">
				<p class="about-lead">Hello, I'm {profile.name}.</p>
				{#each profile.about as paragraph (paragraph)}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</section>

	<div class="contact-backdrop">
		<section id="contact" class="contact-section" aria-labelledby="contact-title">
			<div class="wrap contact-content">
				<div>
					<p class="eyebrow">05 / Keep in touch</p>
					<h2 id="contact-title">Start with<br />a conversation.</h2>
					<p>
						For professional opportunities,<br />get in touch by email or connect on LinkedIn.
					</p>
				</div>
				<ul class="contact-links" aria-label="Contact options">
					<li>
						<a class="label-link" href={`mailto:${profile.email}`} rel="external">
							<span class="contact-method link-label">Email</span>
							<span class="contact-value link-label">{profile.email}</span>
						</a>
					</li>
					<li>
						<a class="label-link" href={profile.linkedinUrl} rel="external">
							<span class="contact-method link-label">LinkedIn</span>
							<span class="contact-value link-label">View my profile</span>
						</a>
					</li>
					<li>
						<a class="label-link" href={profile.githubUrl} rel="external">
							<span class="contact-method link-label">GitHub</span>
							<span class="contact-value link-label">Explore my repositories</span>
						</a>
					</li>
				</ul>
			</div>
		</section>
	</div>
</main>

<footer class="site-footer wrap">
	<span>{profile.name} / Professional portfolio</span>
	<a class="label-link" href="#main">
		<span class="link-label">Back to top</span>
	</a>
</footer>
