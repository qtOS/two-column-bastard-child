window.onload = function(){


  //basic slectors

  //declare a slector named shell
  //access that container via document.getElementById('name-of-id');
  var shell = document.getElementById('content-one');
  var status = document.getElementById('content-one');
  var btn = document.getElementById('addPoint');
  var btn2 = document.getElementById('mudkip-btn');

  $(btn2).click(function(){
    console.log('clicked')
    $(btn2).addClass('ching');
  });
  //var btn = document.querySelector('#addPoint');
  user.initialize(status);
  //selector.addEventListener(eventType, function())
  btn.addEventListener('click', function(){
    user.updateScoreByOnePoint();
    console.log(user.score);
  });
  //put a mf mudkip on the page
  btn2.addEventListener('click', function(){
    addMudkip.clicker();
  });

}



//create a user interface component!
//the goal here is to create an object
//that can update itself
//and visually show that if needed

//ex #1: user component
var body = document.getElementsByTagName('body')[0];


var user = {
  name: null,
  score: 0,
  domElement: null,
  initialize: function(elementToAppendTo){
    if (this.name == null) {
      this.name = prompt('what is yo name?');
    }
    console.log(this.domElement);
    this.domElement = document.createElement('div');
    console.log(this.domElement);
    elementToAppendTo.appendChild(this.domElement);
    console.log('init: complete');
  },
  //elementToAppendTo: document.selector for an individual element
  render: function(innerHTML){
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
  },
  getName: function(){
    return this.name;
  },
  buildPlayerStatusString: function(){
    return this.name + ':'+ this.score;
  },
  //mutator
  saveName: function(newName){
    if(typeof(newName)== 'string' && newName.length > 0){
      this.name = newName;
    }else{
      alert('you entered wrong name');
    }
  },
  getScore: function(){
    return this.score;
  },
  updateScoreByOnePoint: function(){
    this.score = this.score + 1;
    var status = this.buildPlayerStatusString;
    this.render(status);
    return this.score;
  }
};

var component = {
  domElement: null,
  initialize: function(selector){
    this.domElement = document.createElement('div');
    selector.appendChild(this.domElement);
  },
  render: function(statusText){
    this.domElement.innerHTML = statusText;
  }
}



var addMudkip = {
  url: './Shiny_mudkip.png',
  name: 'The Shiny addition',
  clickCounts: 0,
  clicker: function(){
    this.clickCounts = this.clickCounts + 2;
    console.log(this.clickCounts);
  }
}
