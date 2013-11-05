// Write your Orange tree code here 


// tree = {age:0, height: 0};

function orangeTree(age, height)
{
  this.age = age;
  this.height = height;

  this.dead = false;

  // this.oranges = 0;

  this.ageTree = ageTree;
  function ageTree()
  {
    this.age += 1;
    this.height += 1;
  }

  this.isDead = isDead;
  function isDead()
  {
    if (this.age === 30) {
      this.dead = true;
    }
    else
    {
      this.dead = false;
    }
  }

  // this.anyOrange = anyOrange;
  // function anyOrange()
  // {
  //   if (this.age < 15)
  //   {
  //     this.oranges = Math.floor((Math.random()*50)+1);
  //   }
  //   else if(this.age >= 15)
  //   {
  //     this.oranges = Math.floor((Math.random()*100)+1);
  //   }
  // }
}



tree = new orangeTree(0,0);


