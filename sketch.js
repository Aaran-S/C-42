var name = "Aaran"
console.log(name.length)

var name2 = "Sudhir"
console.log(name + " " + name2)

var a = "5"
console.log(name.toLowerCase()) 

var c = parseInt(name)

var b = 12
console.log(c + b)






function setup() {
  createCanvas(1200,1200);
  createSprite(400, 200, 50, 50);
  result = false;

}

function draw() {
  background(255,255,255); 
  
  findNumber();
  calculator();

  
  
  if(result){
    text("Testing", 100,100)
    result = false
  }
  if(result === false){
    text("Testing 2", 100,150)
    result = true
  }
  drawSprites();
}

function findNumber(){
  for(var i = 0;i<41;i++){
    var ab = i % 2 === 0;
    if(ab){
      text(i , 600 , i * 30 - 31)
    }
    else{
      text(i, 200, i * 30)
    }
  }
}

function calculator(){
  var d = 10
  var b = 20
  var ch;


  text("Press 'a' for addition", 300,100)
  text("Press 's' for subtraction", 300,150)
  text("Press 'm' for multiplication", 300,200)
  text("Press 'd' for division", 300,250)
  if(keyDown("a")){
   ch = "a";
  }

  if(keyDown("s")){
    ch = "s";
   }

   if(keyDown("m")){
    ch = "m";
   }

   if(keyDown("d")){
    ch = "d";
   }

   switch(ch){


    case "a" : var r = b + d;
    
        text("Sum is = " + r, 400,400)
        //break;
    
        case "s" : var r = b - d;

        text("Difference is = " + r, 400, 500)
        //break;

    case "m" : var r = b * d;
    
        text("Product is = " + r, 400,600)
        //break;

    case "d" : var r = b / d;
    
        text("Division is = " + r, 400,700)
        //break;

        default : text("Please enter a valid key", 300,300)
        //break;
   }



  
}