<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>ozf.dev</title>
</svelte:head>

<div
  class="
        m-2 mx-auto flex max-w-5xl
        flex-col gap-3 overflow-scroll
        text-black dark:text-white
    "
>
  <div
    class="
            flex justify-center gap-4
            rounded-2xl bg-[var(--color-pumpkin)]
            p-2 dark:bg-[var(--color-tawny)]
        "
  >
    <a href="/">Home</a>
    <a href="/posts">Posts</a>
    <a href="/about">About</a>
  </div>
  <div
    class="
            min-h-72 flex-1
            rounded-2xl bg-[var(--color-african-violet)]
            p-2 dark:bg-[var(--color-plum)]
        "
  >
    {@render children?.()}
  </div>
</div>
