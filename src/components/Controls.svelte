<script>
  // imports
  import { tree, leafStates } from '../stores/general.js';
  import { SmallTree } from 'examples';

  // click events
  function onReset() {
    console.log('click');
  }

  function hideAll() {
    console.log('click');
  }

  function showAll() {
    console.log('click');
  }

  // list with all buttons
  const CONTROLS = [
    { 
      name: 'Reset data',
      click: onReset
    },
    { 
      name: 'Collapse',
      click: hideAll
    },
    {
      name: 'Show All',
      click: showAll
    }
  ];
</script>

<style>
  button {
    margin-right: 10px;
  }
</style>


<div>
  {#each CONTROLS as control}
    <button type="button" on:click={control.click}>{control.name}</button>
  {/each}
</div>