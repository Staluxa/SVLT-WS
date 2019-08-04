<script>
  // imports
  import { createEventDispatcher, afterUpdate, onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';
  import { leafStates, tree, flatTree, positionMap } from '../stores/general.js';
  import { getFullBranchName, updateObjectStore, getPath } from 'utils';

  const dispatch = createEventDispatcher();

  // props
  export let name;
  export let parent;
  export let cdepth;
  export let rdepth;
  export let childrenCount = 0;
  export let i;

  // inner state
  let buttonNode;

  let leafID = getFullBranchName({name, parent});
  $: active = $leafStates[leafID];


  function leafClick(e) {
    dispatch('pressed', {
      name, parent
    });
  }


  // lifecycle callbacks

  afterUpdate(() => {
    // after update optimization
  });

  onMount(() => {
    const sibling = $flatTree.find((leaf) => leaf.parent === parent && leaf.name !== name);
    const siblingStatus = sibling && $leafStates[getFullBranchName(sibling)] || undefined;
    if (typeof siblingStatus === 'undefined') {
      updateObjectStore(leafStates, leafID, i ? false : true);
    } else {
      $leafStates[leafID] = siblingStatus;
    }
  });

</script>

<style>
  div {
    align-self: center;
    display: inline-flex;
    flex-direction: column;
    padding: 5px;
  }

  button {
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 5px auto;
    background: #333;
  }

  span {
    text-align: center;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
</style>

{#if active || !i}
  <div style="grid-column: {cdepth}; grid-row: {rdepth}">
    <span>{name}</span>
    <button bind:this={buttonNode}
      style="cursor: {childrenCount ? 'pointer' : 'auto'}"
      on:click={leafClick}
    ></button>
  </div>
{/if}