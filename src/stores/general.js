//stores module

import { writable, derived } from 'svelte/store';
import { flattenTree } from 'utils';
import { SmallTree } from 'examples';

export const tree = writable(Object.assign({}, SmallTree()));

export const flatTree = derived(
  tree,
  $tree => flattenTree(Object.assign({}, $tree))
);

export const leafStates = writable({});
export const positionMap = writable({});