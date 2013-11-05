function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here  - remember: arrange, act, assert.


assert(tree.age==0, "it creates a new tree with age 0")
assert(tree.height==10, "it creates a new tree with height 10")
assert(tree.age==1, "it creates a new tree with an age of 1")
assert(tree.age==2, "it creates a new tree with an age of 2")
assert(tree.height==12, "this tree is tall as fuck")
assert(tree.anyOranges==true, "assures that there are oranges")
assert(tree.oranges==4, "assures that 4 oranges have grown")


