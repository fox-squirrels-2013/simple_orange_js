function assert(outcome,description){
  console.log(outcome + " : " + description)
}

// Write your TDD code here  - remember: arrange, act, assert.


assert(tree.age === 0, "it creates a new tree with age 0")
assert(tree.height === 1, "it creates a new tree with a height of 1")
assert(tree.num_oranges === 4, "it creates a new tree with oranges")
assert(tree.any_oranges() === true, "a new tree has at least one orange")
assert(tree.pick_an_orange(3) === true, "an orange was picked")

assert(basket.avg_diameter === 1, "the average diameter is one")
assert(basket.num_oranges === 0, "the number of oranges is zero")