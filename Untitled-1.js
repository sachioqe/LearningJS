/*
var age = 65;
if (age >= 65) 
{
   console.log("You get your income from pension") 
} else if (age>=18 && age<65) 
{
    console.log("Each month you get a salary") 
} else if (age<18) 
{
    console.log("You get an allowance");
} else {
    console.log("The value is not numerical")
}

var day = "Saturday"
switch (day) {
    case 'Sunday':
        console.log("Today is Sunday");
        break;
    case 'Monday' :
        console.log("we have a Monday lets go to office");
        break;
    case 'Tuesday' :
        console.log("Tuesday is the third day");
        break;
    case 'Wednesday' :
        console.log("Middle of the week comes Wednesday");
        break;
    case 'Thursday' :
        console.log("Thursday is today");
        break;
    case 'Friday' :
        console.log("Friday last working day");
        break;
    case 'Saturday' :
        console.log("Weekend is here");
        break;
    default :
        console.log("Not a day of the week");
        break;    
}
*/
/*
for (i=5;i>=1;i--)
{console.log(i)};
console.log ("counting completed");

var count = 1;
while (count<=5)
{
    console.log(count);
    count = count + 1;
}

function listarray(arr) {
    var count = arr.length ;
    for (i=0;i<count;i++){
        console.log(i+1,arr[i]);
    }
}
var myweek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//listarray(myweek);
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listarray(colors);

function letterfinder(word,match){
    var counter=word.length;
    for (i=0;i<counter;i++) {
        if (word[i]==match){
            console.log(match,' was found at place number ',i+1,' in ',word);
        }
    }
}
letterfinder('ranorex','r');

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialskills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money",
};
console.log(assistantManager);
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
};
console.log(table);

var house = {};
house.rooms = 4;
house.color = "pink";
house.priceUSD = 12345;
console.log(house);
house["number of doors"] = 5;
console.log(house);
house["locality"] = "sarjapura";
house.pincode = 560102;
console.log(house);

var clothes = [];
clothes.push('tshirt');
clothes.push('pants');
clothes.push('jacket');
clothes.push('socks')
clothes.push('pyjamas')
console.log(clothes);
clothes.pop();
console.log(clothes);
clothes.push('shoes');
console.log(clothes);
console.log(clothes[2]);

var favcar = {};
favcar.color = 'blue';
favcar.convertible = true;
console.log(favcar);

function addTwoNums(a,b) {
    var cond1 = (typeof a=='number');
    var cond2 = (typeof b=='number');
    var cond3 = (cond1 && cond2);
    if (cond3) { 
        console.log(a+b);
    };
    try {
      if (!cond1){
         throw new ReferenceError('a is not a valid number');
      }
      } catch(err1) {
        console.log(err1)
      };
      try {
        if  (!cond2){
       // console.log('b is not a valid number');
        throw new ReferenceError('b is not a valid number');
      };
                  
    } catch (err) {
        console.log (err)
    } ;
   
};
addTwoNums(5,5)

//var str = "Hello";
//str.match("jello");
//console.log(str);
try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }
*/
/*
class Animal{
    constructor(color = 'yellow', energy = 100){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy -=20;
            console.log('energy is decreasing, currently at',this.energy)

        } else if (this.energy==0) {
            this.sleep();
        }
    }
     sleep() {
        this.energy +=20;
        console.log('Energy is increasing, currently at ',this.energy);
     }  
     getColor() {
        console.log(this.color);
     } 

}
class Cat extends Animal {
    constructor (sound='purr',canJumpHigh=true, canClimbTrees=true, color, energy){
        super(color,energy);
        this.sound=sound;
        this.canClimbTrees=canClimbTrees;
        this.canJumpHigh=canJumpHigh;
    }
    makesound(){
        console.log(this.sound);
    }
}
class Bird extends Animal {
    constructor (sound='chirp',canFly=true,color,energy){
        super(color,energy);
        this.sound = sound;
        this.canFly=canFly;

    }
    makesound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat {
    constructor (houseCatSound='meow',sound,canJumpHigh,canClimbTrees,color, energy){
        super(sound, canJumpHigh,canClimbTrees,color,energy);
        this.houseCatSound=houseCatSound;
    }
    makesound(option){
        if (option) {
            super.makesound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat {
    constructor (tigerSound='Roar!',sound, canJumpHigh,canClimbTrees,color,energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.tigerSound=tigerSound;
    }
    makesound(option){
        if (option){
            super.makesound();
        }
        console.log(this.tigerSound);
    }
}
class Parrot extends Bird {
    constructor (canTalk = false, sound, canFly, color, energy){
        super (sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makesound(option) {
        if (option) {
            super.makesound();
        }
        if (this.canTalk) {
            console.log('I am a talking parrot');
        }
    }
}
var fiji = new Parrot(false);
//fiji.makesound()
//fiji.makesound(true);
var polly = new Parrot(true);

polly.makesound();
polly.makesound(true);
polly.color;
polly.energy;
polly.isActive();

var penguin = new Bird("shriek",false,"black and white",200);
penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();
penguin.makesound(true);

var leo = new HouseCat();
leo.makesound(false);
leo.makesound(true);
var cuddles = new Tiger();
cuddles.makesound(false);
cuddles.makesound(true);
*/
console.log(Math.random() >0.5)
console.log(Math.random())
