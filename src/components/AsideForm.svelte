<script>
  // imports
  import { tree, flatTree } from '../stores/general.js';
  import { getFullBranchName, addDeepChildren } from 'utils';

  // inner state

  // inner functions
  function nameCheck() {
    // implement check before submit
    return;
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
<form action="_self" on:submit|preventDefault={submitForm}>
  <fieldset>
    <legend>Add new leaf:</legend>
    <input type="text" placeholder="Parent">
    <input type="text" placeholder="Name">
    <button type="submit">Add</button>
  </fieldset>
</form>