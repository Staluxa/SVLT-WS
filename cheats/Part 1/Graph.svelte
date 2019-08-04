<script>
  // import
  import { tree, flatTree, leafStates } from '../stores/general.js';
  import { getFullBranchName, updateObjectStore } from 'utils';
  import Leaf from './Leaf.svelte';

  // inner functions
  function collapseBranch(e) {
    const fullName = getFullBranchName(e.detail);
    const children = $flatTree.filter( (leaf) => leaf.parent === fullName );
    const hideLeafTree = function (leaf) {
      const fullName = getFullBranchName(leaf);
      const children = $flatTree.filter( (leaf) => leaf.parent === fullName );
      children.forEach( (childLeaf) => {
        const leafID = getFullBranchName(childLeaf);
        updateObjectStore(leafStates, leafID, false);
        hideLeafTree(childLeaf);
      });
    }
    children.forEach( (leaf) => {
      const leafID = getFullBranchName(leaf);
      const newState = !$leafStates[leafID];
      updateObjectStore(leafStates, leafID, newState);
      if (!newState) {
        hideLeafTree(leaf);
      }
    });
  }


  $: console.log($flatTree);
</script>

<style>
  div {
    grid-area: content;
    grid-auto-columns: minmax(150px, min-content);
    display: grid;
    grid-auto-rows: 50px;
    grid-auto-flow: column dense;
  }
</style>

<div>
  {#each $flatTree as leaf, i (getFullBranchName(leaf))}
    <Leaf {...leaf} i={i}></Leaf>
  {/each}
</div>