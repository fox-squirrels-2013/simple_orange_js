tree=new Object();
    tree.type = "orange";
    tree.color = "green";
    tree.age = 0;
    tree.height = 10;
    tree.oranges = 0;
    tree.anyOranges = false;
    // tree.pickAnOrange = ;


function grow()
{
var newHeight = tree.height += 2;
var newAge = tree.age += 1;
var orangeCount = tree.oranges += 4;
return newAge, newHeight, orangeCount;
}

function growOrange() {
if tree.oranges > 0
  return tree.anyOranges = true;
} else {
  return tree.anyOranges = false;
}

grow(tree)
// grow(tree)
// growOrange(tree)

