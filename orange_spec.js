function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here  - remember: arrange, act, assert.


assert(tree.age===0, "it creates a new tree with age 0")
assert(tree.height===0, "it creates a new tree with height 0")
assert(tree.pickOrange !== undefined, "it creates a new tree with pickOrange method defined")
assert(tree.anyOranges !== undefined, "it creates a new tree with anyOranges method defined")
assert(tree.ageAYear !== undefined, "it creates a new tree with ageAYear method defined")
assert(tree.isDead !== undefined, "it creates a new tree with a isDead method defined")
assert(tree.alive===true, "it creates a new tree that is alive by default")
assert(tree.oranges===0, "it creates a new tree that has no oranges by deafult")
assert(treeTwo.age===1, "a tree that has ageAYear called on it ages by one year")
assert(treeTwo.height !== 0, "a tree that has had ageAYear called on it increase in height")
assert(treeTwo.oranges !== 0, "a tree that has had ageAYear called on it has oranges")
assert(treeFifty.isDead() === true, "a tree that is fifty years old has probably died already")
