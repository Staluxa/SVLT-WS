<script>
  // imports
  import { tree, flatTree } from '../stores/general.js';
  import { getFullBranchName, addDeepChildren } from 'utils';

  // inner state

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
    // to implement form submition
    console.log(e);
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
<form action="_self">
  <fieldset>
    <legend>Add new leaf:</legend>
    <input type="text" placeholder="Parent">
    <input type="text" placeholder="Name">
    <button type="submit">Add</button>
  </fieldset>
</form>