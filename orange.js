// Write your Orange tree code here

function Tree(){
  this.age = 0;
  this.height = 0;
  this.alive = true;
  this.oranges = 0;
  this.has_soul = true;
  this.pickOrange = function (){
    this.oranges -= 1;
  };
  this.anyOranges = function (){};
  this.ageAYear = function(){
    this.age += 1;
    this.height += Math.random()*3;
    this.oranges += Math.ceil(Math.random()*4);
    if (this.age > 45){
      this.alive = false;
      this.oranges = 0;
      this.has_soul = false;
    };
  };
  this.isDead = function (){
    return this.alive;
  };
};

var tree = new Tree();
// var yearOldTree = tree.ageAYear()
// if (tree.ageAYear) {
//   tree.age===1
// };
var treeTwo = new Tree();
treeTwo.ageAYear();
// console.log(treeTwo.oranges)

var treeFake = new Tree();
treeFake.has_soul = false;
treeFake.oranges = 3;
treeFake.pickOrange();

var treeFifty = new Tree();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
treeFifty.ageAYear();
// console.log(treeFifty.age)
// console.log(treeFifty.alive)
// console.log(treeFifty.)
