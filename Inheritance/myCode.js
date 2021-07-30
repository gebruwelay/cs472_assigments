"use strict";

String.prototype.filter = function (arr)
{
    let string = this.split(" ");
    return string.filter(str=> {
        let count =0;
        for(let s in arr)
        {
            if(str.indexOf(arr[s])!==-1)
            {
                count ++;
            }
        }
        return count>0?false:true;
    }).join(" ");
}

Array.prototype.bubbleSort = function(){
    for(var i = 0; i < this.length; i++){        
        for(var j = 0; j < ( this.length - i -1 ); j++){
          if(this[j] > this[j+1]){
            var temp = this[j];
            this[j] = this[j + 1];
            this[j+1] = temp;
          }
        }
      } 
    return this; 
};

var Person = function () {};
Person.prototype.initialize = function (name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function ()
{
    return this.name + ", "+ this.age + " years old.";
} 

var Teacher = function (){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject)
{
    return this.name + " is now teaching " + subject; 
}