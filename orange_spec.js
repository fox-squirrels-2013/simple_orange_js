function assert(outcome,description){
  console.log(outcome + " : " + description);
}

// Write your TDD code here  - remember: arrange, act, assert.

tree = new orangeTree(0,0);

assert(tree.age===0, "it creates a new tree with age 0");

assert(tree.height===0, "it creates a new tree with height 0");

tree.ageTree();

assert(tree.age===1, "it ages the tree by 1 year");

assert(tree.height===1, "it grows by 1 foot");

tree.ageTree();

while (tree.age < 30) {
  tree.ageTree();
}

tree.isDead();


assert(tree.dead===true, "it dies at age 30");

