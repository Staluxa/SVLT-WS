<script>
  // imports
  import { createEventDispatcher, afterUpdate, onMount } from 'svelte';
	import { fade, draw } from 'svelte/transition';
  import { leafStates, tree, flatTree, positionMap } from '../stores/general.js';
  import { getFullBranchName, updateObjectStore, getPath } from 'utils';

  const dispatch = createEventDispatcher();

  // props

  // inner state


  // let leafID = getFullBranchName({name, parent});
  // $: active = $leafStates[leafID];


  function leafClick(e) {
    //pass event to parent
  }


  // lifecycle callbacks

  onMount(() => {
    // implement init
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

<!-- {#if active || !i} -->
  <div>
    <span>{name}</span>
    <button bind:this={buttonNode}></button>
  </div>
<!-- {/if} -->