<script>
  // import
  import { tree, flatTree, leafStates } from '../stores/general.js';
  import { getFullBranchName, updateObjectStore } from 'utils';
  import Leaf from './Leaf.svelte';

  // inner functions
  function collapseBranch(e) {
    // to implement collapse event
    console.log(e.detail);
  }


  $: console.log($flatTree);
</script>

<style>
  div {
    grid-area: content;
    grid-auto-columns: minmax(150px, min-content);
    /* display: grid; */
    grid-auto-rows: 50px;
    grid-auto-flow: column dense;
  }
</style>

<div>
  {#each $flatTree as leaf}
    <Leaf name={leaf.name} on:pressed={collapseBranch}></Leaf>
  {/each}
</div>