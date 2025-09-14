<script lang="ts">
  let { data } = $props();
</script>

<h1>Posts</h1>

<ul>
  {#each data.postsMD as postMD (postMD.href)}
    <li><a href={postMD.href}>{postMD.created.toLocaleDateString()}: {postMD.title}</a></li>
  {/each}
</ul>
