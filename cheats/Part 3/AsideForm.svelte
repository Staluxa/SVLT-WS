<script>
  // imports
  import { tree, flatTree } from '../stores/general.js';
  import { getFullBranchName, addDeepChildren } from 'utils';

  // inner state
  $: parentOptions = [...$flatTree].map( (leaf) => getFullBranchName(leaf));
  let name = '';
  let parent = '';

  // inner functions
  function nameCheck() {
    if (!parentOptions.includes(parent)) {
      return 'Sorry, you need to select parent first';
    }
    if (!name) {
      return 'Sorry, please add anything to name';
    }
    if (name.indexOf('|') !== -1) {
      return 'Sorry, please remove "|" symbol from name';
    }
    const siblings = $flatTree.filter( (leaf) => leaf.parent === parent)
    if (siblings.length && !!siblings.find( (leaf) => leaf.name === name)) {
      return `Sorry, ${parent} already contains leaf with name ${name}. Please change it`;
    }
    return false;
  }

  function submitForm(e) {
    const failMessage = nameCheck(); 
    if (!failMessage) {
      addDeepChildren(tree, {name, parent});
      parent = '';
      name = '';
    } else {
      alert(failMessage);
    }
  }
</script>

<style>
  form {
    grid-area: aside-content;
  }
  h1 {
    grid-area: aside-head;
  }
  fieldset {
    display: flex;
  }
  button {
    margin-left: auto;
  }
</style>



<h1>Hello VinJS!</h1>
<form action="_self" on:submit|preventDefault={submitForm}>
  <fieldset>
    <legend>Add new leaf:</legend>
    <input list="parent-options" type="text" placeholder="Parent"  bind:value={parent}>
    <datalist id="parent-options">
      {#each parentOptions as leafID }
        <option value="{leafID}" />
      {/each}
    </datalist>
    <input type="text" placeholder="Name" bind:value={name}>
    <button type="submit">Add</button>
  </fieldset>
</form>