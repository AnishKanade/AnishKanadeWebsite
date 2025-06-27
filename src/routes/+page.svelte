<script lang="ts">
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
  import Icon from '$lib/components/Icon/Icon.svelte';
  import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
  import { titleSuffix } from '@data/app';
  import {
    links,
    description,
    lastName,
    name,
    title,
    skills,
    avatar,
    location
  } from '@data/home';
  import { items as skillsItems } from '@data/skills';
  import { useTitle } from '$lib/utils/helpers';
  import { isBlank } from '@riadh-adrani/utils';
  import { getPlatfromIcon } from '$lib/utils';

  const isEmail = (email: string): boolean => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !isBlank(email) && reg.test(email);
  };
</script>

<svelte:head>
  <title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="hero">
  <div class="hero-text">
    <!-- Avatar -->
    <img src={avatar} alt="Anish Kanade" class="avatar" />

    <!-- Name -->
    <MainTitle>{name} {lastName},</MainTitle>

    <!-- Location (new) -->
    <div class="location">{location}</div>

    <!-- Description -->
    <div class="overview">
      {@html description}
    </div>

    <!-- Social Links -->
    <div class="links">
      {#each links as link}
        <a
          href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={getPlatfromIcon(link.platform)} size="24px" />
        </a>
      {/each}
    </div>
  </div>

  <!-- Skills Carousel -->
  <div class="hero-side">
    <Carrousel items={skills ?? skillsItems} />
  </div>
</div>

<style lang="scss">
  .hero {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
    padding: 2rem 1rem;
  }

  .hero-text {
    flex: 2;
    min-width: 260px;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--accent-text);
    margin-bottom: 1rem;
  }

  /* New: Location styling */
  .location {
    font-size: 0.9em;
    color: var(--secondary-text);
    margin-bottom: 3rem;
    text-align: center;
  }

  .overview {
    color: var(--tertiary-text);
    font-size: 1.15em;
    line-height: 1.6;
    margin-top: 0.5rem;
  }

  /* Styled bullet list */
  .overview-list {
    margin: 1rem 0;
    padding-left: 1.5rem;
    list-style: none;
  }
  .overview-list li {
    margin-bottom: 0.75rem;
    padding-left: 1.25rem;
    position: relative;
  }
  .overview-list li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-text);
  }

  .overview-footer {
    margin-top: 1.5rem;
  }

  .links {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .hero-side {
    flex: 1;
    min-width: 220px;
    display: flex;
    justify-content: center;
  }
</style>
