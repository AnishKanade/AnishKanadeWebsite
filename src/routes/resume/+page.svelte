<script>
	// Update the path to where the resume PDF is stored in your project
	export const data = 'Resume.pdf'; // Adjust if necessary
	export const title = 'Resumé';
	import { description } from '@data/resume';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if description}
			<p class="resume-description">{description}</p>
		{/if}

		{#if data}
			<a href={data} target="_blank">
				<Chip size="1.25em">View Resumé</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;

		& > a {
			color: inherit;
			margin-top: 1rem; /* Add space between description and button */
		}
	}

	.resume-description {
		font-size: 1.1em;
		font-weight: 300;
		color: var(--secondary-text);
		text-align: center;
		max-width: 600px;
	}
</style>
