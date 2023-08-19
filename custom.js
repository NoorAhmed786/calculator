//  function add(){
//      a=10;
//      b = 2;
//  c =alert( a+ b);


//  }
//  add();

//  function greetings(greet){
//     alert(greet)
//  }
//  greetings("hello world");
//  function add(){
//     var a = 12;
//     var b = 13;
//     var c = a+b;
//     return c;
//  }

//  var x = add();
//  alert(x);

//  function num(num1, num2=5){
//     return num1+num2;
//  }
//  let result = num(15);
//  console.log(
// result
//  )
//  function greet(greetings){
//     alert(greetings)
//  }

//  function getName(){
//     var user=document.getElementById("userName");
//     console.log(user.value);
//     user.value="";
//  }

function getNumber(num){
    var results =document.getElementById('result');
    results.value += num;

}

function clearResult(){
    var clear2 =document.getElementById("result");
      clear2.value='';
    //  clearCal=clear2.clear()

}


function getResult(){
    var result =document.getElementById("result");
    result.value =eval(result.value);
}
$(document).ready(function(){
    $('.heading').mouseover(function(){
        $('h1').toggle(2000)
    });

});

