
var tree = {
  age: 0,
  height: 1,
  num_oranges: 4,
  any_oranges: function() {
    if (this.num_oranges > 0) {
      return true;
    }
  },
  pick_an_orange: function(num_to_pick) {
    x = this.num_oranges;  // #=> 4
    this.num_oranges = this.num_oranges - num_to_pick;   // #=> 3
    if (this.num_oranges === x - num_to_pick ) {
    return true;
    }
  }
};

var basket = {
  num_oranges: 0,
  avg_diameter: 1
};
