/*
Your task, should you choose to accept it, is to create two functions: one that traverses a tree and returns a directory of that tree and one that traverses a binary search tree (BST) and returns a directory of that BST. The directory should list each node and its location in the tree; the order of the nodes listed in the directory does not matter.

**Input**: tree or binary search tree (BST)  
**Output**: object (a directory)  
**Constraints**: 1 <= number of nodes in tree <= 250  
**Edge Cases**: Don't worry about dealing with empty trees, balancing, or duplicate values

>**Tree definition**: A Tree is a widely used data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node. A tree data structure can be defined recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the “children”), with the constraints that no reference is duplicated, and none points to the root node. -- Wikipedia, ([Tree reference](http://blog.benoitvallon.com/data-structures-in-javascript/the-tree-data-structure/))

>**Binary Search Tree definition**: A Binary Search Tree data structure is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value) and each have two distinguished sub-trees, commonly denoted left and right. The tree additionally satisfies the binary search tree property, which states that the key in each node must be greater than all keys stored in the left sub-tree, and smaller than all keys in right sub-tree. -- Wikipedia, ([BST reference](http://blog.benoitvallon.com/data-structures-in-javascript/the-binary-search-tree-data-structure/))


**Tree node location definition**: The location of a node in a regular 'ol generic tree is the collection of each index needed to get to the target node. In the below tree, the location of the node with a value of 5 would be [] -- it's the root node -- and the location of the node with a value of 15 would be [1, 1] -- it's the second child of the second child of the root node  
\*\*Note that this is *not* the depth, or level of the node, but rather a 'turn-by-turn' set of directions to the node.

**BST node location definition**: The location of a node in a binary search tree (BST) is the collection of each 'turn' we need to make to get to the target node. In the below BST, the location of the node with a value of 5 would be [] -- it's the root node -- and the location of the node with a value of 6 would be ['right', 'left'] -- it's the left child of the right child of the root node.


**Example tree input**:
```javascript
{
  value: 5
  children: [
    {
      value: 4,
      children: []
    },
    {
      value: 7,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 15,
          children: []
        }
      ]
    }
  ]
}
```

**Example BST input**:
```javascript
{
  value: 5,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  }
}
```

Example tree directory:
```javascript
{
  5: [],
  4: [0],
  7: [1],
  3: [1, 0],
  15: [1, 1]
}
```
Example BST directory:
```javascript
{
  5: [],
  3: ['left'],
  1: ['left', 'left'],
  4: ['left', 'right'],
  7: ['right'],
  6: ['right', 'left'],
  9: ['right', 'right']
}
```
*/

function createTreeDirectory(tree){
  let directory = {};

  (function traverseTree(node, route = []) {
    directory[node.value] = route;
    let location;
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        location = Array.from(route);
        location.push(i);
        traverseTree(node.children[i], location);
      }
    }
  })(tree);

  return directory;
}

function createBSTDirectory(BST) {
  let directory = {};

  (function traverseTree(node, route = []) {
    directory[node.value] = route;
    let location;
    if (node.left) {
      location = Array.from(route);
      location.push('left');
      traverseTree(node.left, location);
    }
    if (node.right) {
      location = Array.from(route);
      location.push('right');
      traverseTree(node.right, location);
    }
  })(BST);

  return directory;
}