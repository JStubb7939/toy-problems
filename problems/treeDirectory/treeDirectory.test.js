/*
 Those who completed this before the refactor will still be able to run and pass the test cases
 and those who just want to write it up in one function can do so
*/

function isFunction() {
  return typeof(createBSTDirectory) === typeof(Function);
}

let tree = {
  value: 5,
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
};

let tree2 = {
  value: 1,
  children: [
    {
      value: 20,
      children: [
        {
          value: 50000,
          children: []
        }
      ]
    },
    {
      value: 300,
      children: [
        {
          value: 600000,
          children: []
        },
        {
          value: 7000000,
          children: [
            {
              value: 80000000,
              children: []
            }
          ]
        }
      ]
    },
    {
      value: 4000,
      children: []
    }
  ]
};

let tree3 = {
  value: 1,
  children: []
};

let bst = {
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
};

let bst2 = {
  value: 88,
  left: {
    value: 44,
    left: {
      value: 22,
      left: {
        value: 11,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 20,
          left: null,
          right: null
        }
      },
      right: {
        value: 33,
        left: null,
        right: null
      }
    },
    right: {
      value: 77,
      left: null,
      right: null
    }
  },
  right: {
    value: 176,
    left: {
      value: 100,
      left: null,
      right: {
        value: 150,
        left: null,
        right: null
      }
    },
    right: {
      value: 2113,
      left: {
        value: 2112,
        left: null,
        right: null
      },
      right: null
    }
  }
};

let bst3 = {
  value: 5,
  left: null,
  right: null
};

function treeSolution(tree){
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

function bstSolution(BST) {
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

function generateRandomSet() {
  let set = new Set();
  let n = Math.floor(Math.random() * 250) + 1;
  for (let i = 0; i < n; i++) {
    set.add(Math.floor(Math.random() * 1000) + 1);
  }
  return set;
}

function generateRandomTree() {
  let tree = {value: 'root', children: []};

  function add(parent, child, location = tree) {
    if (location.value === parent) {
      location.children.push({value: child, children:[]});
      return;
    }
    else {
      for (let i = 0; i < location.children.length; i++) {
        add(parent, child, location.children[i]);
      }
    }
  }

  var dictionary = ['root'];
  var randomSet = generateRandomSet();

  randomSet.forEach(i => {
    add(dictionary[Math.floor(Math.random() * (dictionary.length - 1)) + 0], i);
    dictionary.push(i);
  });

  return tree;
}

function generateRandomBST() {
  let binarySearchTree = {};

  function add(v) {
    if (Object.keys(binarySearchTree).length === 0 && binarySearchTree.constructor === Object) {
      binarySearchTree.value = v;
      binarySearchTree.left = null;
      binarySearchTree.right = null;
    } else {
      let current = binarySearchTree;
      while(current) {
        if (current.value > v && current.left) current = current.left;
        else if (current.value > v && !current.left) {
          current.left = {value: v, left: null, right: null};
          break;
        }
        else if (current.value < v && current.right) current = current.right;
        else {
          current.right = {value: v, left: null, right: null};
          break;
        }
      }
    }
  }

  let randomSet = generateRandomSet();
  randomSet.forEach(i => {
    add(i);
  })

  return binarySearchTree;
}

let treeResult = {5: [], 4: [0], 7: [1], 3: [1, 0], 15: [1, 1]};
let treeResult2 = {1: [], 20: [0], 300: [1], 4000: [2], 50000: [0, 0], 600000: [1, 0], 7000000: [1, 1], 80000000: [1, 1, 0]};
let treeResult3 = {1: []};

let bstResult = {5: [], 3: ['left'], 1: ['left', 'left'], 4: ['left', 'right'], 7: ['right'], 6: ['right', 'left'], 9: ['right', 'right']};
let bstResult2 = {88: [], 44: ['left'], 22: ['left', 'left'], 11: ['left', 'left', 'left'], 5: ['left', 'left', 'left', 'left'], 20: ['left', 'left', 'left', 'right'], 33: ['left', 'left', 'right'], 77: ['left', 'right'], 176: ['right'], 100: ['right', 'left'], 150: ['right', 'left', 'right'], 2113: ['right', 'right'], 2112: ['right', 'right', 'left']};
let bstResult3 = {5: []};

Test.describe("createTreeDirectory(tree)", () => {
  var result = createTreeDirectory(tree);
  Test.it("Should return {5: [], 4: [0], 7: [1], 3: [1, 0], 15: [1, 1]}", () => {
    Test.assertEquals(!!result['5'], true, "should contain a '5' property");
    Test.assertEquals(!!result['4'], true, "should contain a '4' property");
    Test.assertEquals(!!result['7'], true, "should contain a '7' property");
    Test.assertEquals(!!result['3'], true, "should contain a '3' property");
    Test.assertEquals(!!result['15'], true, "should contain a '15' property");
    Test.assertDeepEquals(result, treeResult, "Expected " + treeResult + " but got " + result);
  });

  result = createTreeDirectory(tree2);
  Test.it("Should return {1: [], 20: [0], 300: [1], 4000: [2], 50000: [0, 0], 600000: [1, 0], 7000000: [1, 1], 80000000: [1, 1, 0]}", () => {
    Test.assertEquals(!!result['1'], true, "should contain a '1' property");
    Test.assertEquals(!!result['20'], true, "should contain a '20' property");
    Test.assertEquals(!!result['300'], true, "should contain a '300' property");
    Test.assertEquals(!!result['4000'], true, "should contain a '4000' property");
    Test.assertEquals(!!result['50000'], true, "should contain a '50000' property");
    Test.assertEquals(!!result['600000'], true, "should contain a '600000' property");
    Test.assertEquals(!!result['7000000'], true, "should contain a '7000000' property");
    Test.assertEquals(!!result['80000000'], true, "should contain a '80000000' property");
    Test.assertDeepEquals(result, treeResult2, "Expected " + treeResult2 + " but got " + result);
  });

  result = createTreeDirectory(tree3);
  Test.it("Should return {1: []}", () => {
    Test.assertEquals(!!result['1'], true, "should contain a '1' property");
    Test.assertDeepEquals(result, treeResult3, "Expected " + treeResult3 + " but got " + result);
  });
});

Test.describe("createBSTDirectory(bst)", function() {
  var result = isFunction() ? createBSTDirectory(bst) : createTreeDirectory(bst);
  Test.it("Should return {5: [], 3: ['left'], 1: ['left', 'left'], 4: ['left', 'right'], 7: ['right'], 6: ['right', 'left'], 9: ['right', 'right']}", function() {
    Test.assertEquals(!!result['5'], true, "should contain a '5' property");
    Test.assertEquals(!!result['3'], true, "should contain a '3' property");
    Test.assertEquals(!!result['1'], true, "should contain a '1' property");
    Test.assertEquals(!!result['4'], true, "should contain a '4' property");
    Test.assertEquals(!!result['7'], true, "should contain a '7' property");
    Test.assertEquals(!!result['6'], true, "should contain a '6' property");
    Test.assertEquals(!!result['9'], true, "should contain a '9' property");
    Test.assertDeepEquals(result, bstResult, "Expected " + bstResult + " but got " + result);
  });

  result = isFunction() ? createBSTDirectory(bst2) : createTreeDirectory(bst2);
  Test.it("Should return {88: [], 44: ['left'], 22: ['left', 'left'], 11: ['left', 'left', 'left'], 5: ['left', 'left', 'left', 'left'], 20: ['left', 'left', 'left', 'right'], 33: ['left', 'left', 'right'], 77: ['left', 'right'], 176: ['right'], 100: ['right', 'left'], 150: ['right', 'left', 'right'], 2113: ['right', 'right'], 2112: ['right', 'right', 'left']}", function() {
    Test.assertEquals(!!result['88'], true, "should contain a '88' property");
    Test.assertEquals(!!result['44'], true, "should contain a '44' property");
    Test.assertEquals(!!result['22'], true, "should contain a '22' property");
    Test.assertEquals(!!result['11'], true, "should contain a '11' property");
    Test.assertEquals(!!result['5'], true, "should contain a '5' property");
    Test.assertEquals(!!result['20'], true, "should contain a '20' property");
    Test.assertEquals(!!result['33'], true, "should contain a '33' property");
    Test.assertEquals(!!result['77'], true, "should contain a '77' property");
    Test.assertEquals(!!result['176'], true, "should contain a '176' property");
    Test.assertEquals(!!result['100'], true, "should contain a '100' property");
    Test.assertEquals(!!result['150'], true, "should contain a '150' property");
    Test.assertEquals(!!result['2113'], true, "should contain a '2113' property");
    Test.assertEquals(!!result['2112'], true, "should contain a '2112' property");
    Test.assertDeepEquals(result, bstResult2, "Expected " + bstResult2 + " but got " + result);
  });

  result = isFunction() ? createBSTDirectory(bst3) : createTreeDirectory(bst3);
  Test.it("Should return {5: []}", function() {
    Test.assertEquals(!!result['5'], true, "should contain a '5' property");
    Test.assertDeepEquals(result, bstResult3, "Expected " + bstResult3 + " but got " + result);
  });
});


Test.describe("Random tree tests", function() {
  let randomTree, expected, actual;
  before(() => {
    randomTree = generateRandomTree();
    expected = treeSolution(randomTree);
    actual = createTreeDirectory(randomTree);
  });

  Test.it("Should pass random tree test 1/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random tree test 2/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random tree test 3/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random tree test 4/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random tree test 5/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
});

Test.describe("Random BST tests", function() {
  let randomBST, expected, actual;
  before(() => {
    randomBST = generateRandomBST();
    expected = bstSolution(randomBST);
    actual = isFunction() ? createBSTDirectory(randomBST) : createTreeDirectory(randomBST);
  });

  Test.it("Should pass random BST test 1/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random BST test 2/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random BST test 3/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random BST test 4/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
  Test.it("Should pass random BST test 5/5", function() {
    Test.assertDeepEquals(actual, expected, "Expected " + actual + " to equal " + expected);
  });
});