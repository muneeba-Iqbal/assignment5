                        //chapter 1 : ALERTS 
//Task 1
//alert("Welcome to my website")

//Tast 2
//alert("Error! Please enter a valid password")

//Tast 3
//alert("Welcome to JS Land\nHappy Coding")


//Task 4
//alert("Welcome to JS Land");



//task 5
// var a;
// a = "Helloo  i can run JS through my web browser's console";
//alert(a);

//task 6
//alert("Happy Coding")
//window.alert("windowalerts");

//task 7
// 1 : <head> <script src="name.js"></script> </head>
// 2 : before HTML body
//      <script>
//       var a;
//       a = "var1";
//       window.alert(a);
//     </script>

// 3 : <h2>inside HTML pages</h2>
//     <script>
//        var a;
//        a = "var1";
//        window.alert(a);
//      </script>

// 4 : after HTML pages
//     <script src="chpt1.js"></script>




                    // chapter 2 : VARIABLES FOR STRINGS

// task 1 
//var username;

//task 2 
//var myname = "Muneeba";
//var fullname = myname+" Iqbal";
//alert(fullname);

// task 3
//var message = "Hello World!";
//alert(message);

//task 4 
//var name = prompt("Enter Your name", "Your name is : ");
//var age = prompt("Enter your age", "Your age is: ");
//alert(name);
//alert(age);
//alert("Certified Mobile Application Development");

//task 5
//var b = "PIZZA";
//alert(b + "\n"+ b.slice(0,4) + "\n" + b.slice(0,3) + "\n"+ b.slice(0,2) + "\n"+ b.slice(0,1) );

//task 6
//var email = prompt("Enter your email", "Email");
//alert("My Email address is " + email);

//task 7
//var b ="A smarter way to learn JavaScript";
//alert("I am trying to learn from the Book " + b);

//task 8
//document.write("Yah! i can write HTML content throug Java script");

//tassk 9
//var b = " ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ";
//alert(b);



                        //chapter 3 : VARIABLES FOR NUMBER


//task 1
//var a = 23;
//alert("I am " + a + " years old");


//task 2


//task 3
//var birthyear=1996 ;
//document.write("My birth year is " + birthyear + " <br>Data type of my declared variable is "+ typeof birthyear);

//task 4
//var visitor_name = prompt("Enter Yor name", "Your name is : ");
//var product_title = prompt("Enter product title", "title :");
//var quantity = prompt("Enter quantity number ","Quantity :");
//document.write(visitor_name + " ordered "+quantity+" "+product_title+ "(s) on XYZ Clothing Store.");


                         // chapter 4 : VARIABLE NAMES: LEGAL & ILLEGA

//task 1
//var a,b,c;

//task 2
//var muneeba! , munee_ba , muneeba ,muneba$ , muneeba3 ;
//var muneeba.1 , muneeba% , String , typeof , alert ;

//task 3
//document.write("<h2>Rules for naming JS variables.</h2> <br> Variable names can only contain numbers, $, ! and _ . For example $my_1stVariable<br> Variables must begin with a letters, $ or _ . For example $name, _name or name <br> Variable names are case sensitive  <br>  Variable names should not be JS keywords");


                        //chapter 5 : MATH EXPRESSIONS

                        
//task 1
//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var sum= a+b;
//document.write("Sum of "+a+" and "+b+" is "+ sum);

//task 2
//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var sub= a-b;
//document.write("subtraction of "+a+" and "+b+" is "+ sub);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var mul= a*b;
//document.write("multiplication of "+a+" and "+b+" is "+ mul);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var divi= a/b;
//document.write("division of "+a+" and "+b+" is "+ divi);

//var a , b;
//a = parseInt(prompt("Enter 1st value "));
//b = parseInt(prompt("Enter 2nd value "));
//var mod= a%b;
//document.write("modulus of "+a+" and "+b+" is "+ mod);

//task 3
//var a;
// document.write("value of a is :" + a);
//a = 1;
// document.write("initial value is :" + a);
// a++;
//document.write("value after increament is :" + a);
//a+=31;
//document.write("value after addition is :" + a);
// a--;
//document.write("value after decrement is :" + a);
//a = a%3;
//document.write("the remainder is :" + a);


//task 4
//var ticktprice = 600;
//var total = +ticktprice*5;
//document.write("The total price of 5 tickets is :" + total);

//task 5
//var  a = 5;
//var sum=0;
//var i;
//document.write("Table of :" + a +"<br>");
//for (i=1; i<=10;i++)
//{
//   sum+=a;
//    document.write(a+"*"+i+"="+sum+"<br>");
//}

//task 6
//var af = 70;
//var C = ((af-32)*5/9);
//var dc = 25;
//var F = ((dc*9/5)+32);
//document.write(dc+"C is " +F+ "F <br>");
//document.write(af+"F is " +C+ " C ");

//task 7
//var item1 = 650; item2=100;
//var shipchrg=100;
//var q1=3; q2=7;
//var total = (q1*item1)+(q2*item2)+shipchrg;
//document.write("Price of item 1 is " +item1+"<br>Ordered quantity of item 1 is "+q1+"<br>  Price of item 2 is "+item2+"<br>Ordered quantity of item 2 is "+q2+"<br>Shipping charges "+shipchrg);
//document.write("<br><br>Total cost of your order is " +total);

//task 8
//var givenmarks = 514;
//var totalmarks = 550;
//var percentage = ((givenmarks/totalmarks)*100);
//document.write("<h2>Marks Sheet</h2> <br><br>" );
//document.write("Total Marks : "+totalmarks+"<br>Marks Obtained: "+givenmarks+"<br>Precentage : "+percentage+"%");


//task 9
//var usdolars = 10;
//var saudiriyals = 25;
//var total =  ((10*104.80)+(25*28));
//document.write("<h2>Currency in PKR</h2> <br><br>" );
//document.write("Total Currency in PKR "+total);


//task 10
//var a =5;
//var operation = (((a+5)*10)/2);

//task 11
//var curentyear = 2020;
//var birthyear = 1996;
//var age = curentyear-birthyear;
//document.write("<h2>Age Calculator</h2> <br><br>" );
//document.write("<br> current year: "+curentyear);
//document.write("<br> birth year: "+birthyear);
//document.write("<br> Your age is: "+age);

//task 12
//var radius= 20;
//var circum=(2*3.142*radius);
//var area = (3.142*radius*radius);
//document.write("<h2>The Geometrize</h2> <br><br>" );
//document.write("Radius of circle: "+radius);
//document.write("<br>The circumference is: "+circum);
//document.write("<br>The area is: "+area);

//task 13
//var snack ="kurkury"; var age = 23; var maxage= 65; var amount=3;
//var total = ((maxage-age)*amount);
//document.write("<h2>The Lifetime Supply Calculator </h2> <br><br>" );
//document.write("<br>Favourite snack: "+snack);
//document.write("<br>Current age: "+age);
//document.write("<br>Estimated Maximum age: "+maxage);
//document.write("<br>Amount of snacks per day: "+amount);
//document.write("<br>You will need "+total+" to last you until the ripe old age of "+maxage);


                        // chapter 6-9 :MATH EXPRESSIONS

//task 1
//var a=10;
//document.write("Results: ");
//document.write("<br> The value of a is "+a);
//document.write("<br>________________________");
//document.write("<br><br>The value of ++a is : "+ (++a));
//document.write("<br>Now the value of a is "+a);
//document.write("<br><br>The value of ++a is : "+a);
//document.write("<br>Now the value of a is : "+ (++a));
//document.write("<br><br>The value of --a is : "+(--a));
//document.write("<br>Now the value of a is : "+a);
//document.write("<br><br>The value of a-- is : "+(a--));
//document.write("<br>Now the value of a is : "+a);


//task 2
//var a=2; b = 1;
//--a;
//1
//--a - --b;
// 0 - 0
//--a - --b + ++b;
//-1 - -1 + 0
//var result = --a - --b + ++b + b--;
            //-2 - -1 + 0 + 0
//document.write("a is : "+a);
//document.write("<br>b is : "+b);
//document.write("<br>Result : "+result);

//task 3
//var name = prompt("Enter Your name: ", "Name :");
//document.write("<br>"+name+" <h2>Welcome to My JS</h2>");

//task 4
//var n1 = + prompt("Enter any number for table : ","Enter number");
//var sum=0;
//if(n1!==0)
//{
//    for(var i=1;i<=10;i++)
//    {
//        sum+=n1;
//        document.write(n1+"*"+i+"="+sum+"<br>");
//    }
//}
//else
//{
//    for(var i=1;i<=10;i++)
//    {
//        sum+=5;
//        document.write(5+"*"+i+"="+sum+"<br>");
//    }
//}

//task 5
//var sub1,sub2,sub3,totalmarks=300;
//sub1 = +prompt("Enter subject 1 obtain marks :");
//sub2 = +prompt("Enter subject 2 obtain marks :");
//sub3 = +prompt("Enter subject 3 obtain marks :");
//var obtainmarks=(sub1+sub2+sub3);
//var per= ((sub1/100)*100);
//document.write("<table><th><td>Subjects</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage</td></th></table>");
//document.write("<table><tr><td>English</td> <td></td> <td>100</td><td>"+sub1+"</td><td>"+per+"%</td></tr></table>");
//document.write("<table><tr><td>Math</td>  <td></td><td></td> <td>100</td><td>"+sub2+"</td><td>"+per+"%</td></tr></table>");
//document.write("<table><tr><td>Physics</td> <td></td> <td>100</td><td>"+sub3+"</td><td>"+per+"%</td></tr></table>");
//document.write("Total marks "+totalmarks);
//document.write(" Obtained marks "+obtainmarks);
//per=((obtainmarks/totalmarks)*100);
//document.write(" Percentage "+per+"%");


                        // chapter 9-11 : USER INPUT & CONDITIONAL STATEMENT

//task 1
//var city = prompt("Enter any city name : ","City name");
//if(city==="karachi")
//{document.write("Welcome to the city of lights.");}
//else{ document.write("welcome to "+city); }

//task 2
//var gender = prompt("Enter your gender : ","gender");
//if(gender==="male")
//{document.write("Good Morning sir.");}
//else{ document.write("Good Morning Ma'am" ); }

//task 3
//var signal = prompt("Enter trafic signal color name ","Color name : ");
//if(signal==="red"){
//    document.write("Must stop.");
//}
//else if(signal==="yellow"){
//    document.write("Ready to move.");
//}
//else if(signal==="green"){
//    document.write("Move now.");
//}
//else{
//    document.write("invalid trafic signal.");
//}

//task 4
//var fuel= +prompt("Enter your car fuels in litres ","fuel in litre");
//if(fuel<0.25){
//    document.write("Please refill the fuel in your car");
//}
//else{
//    document.write("keep ur travelling");
//}

//task 5
/* a 
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} */

/* b 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} */

// c
/* var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} */

// d
/* var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} */


//task e
/* if (true){
    alert("True");
   }
 if (false){
      alert("False");
 } */

//task f
/* if("car" < "cat"){
    alert("car is smaller than cat");
} */

//task 6
/* var totalmarks=+prompt("Enter total marks :");
var obtainmarks=+prompt("Enter obtained marks :");
var per= +((obtainmarks/totalmarks)*100);
document.write("<h2>Marks Sheet</h2>");
document.write("<br>Total marks : "+totalmarks);
document.write("<br>Marks obtained : "+obtainmarks);
document.write("<br>Percentage : "+per+"%");
if(per>=80){
    document.write("<br>Grade : A-One <br> Remarks : Excellent ");
}
else if(per>=70){
    document.write("<br>Grade : A<br> Remarks : Good ");
}
else if(per>=60){
    document.write("<br>Grade : B<br> Remarks : You need to improve ");
}
else{
    document.write("<br>Grade : Fail <br> Remarks : Sorry ");
} */

//task 7
/* var number = 6;
var guess=+prompt("Guess the secret number","Enter any number between 1 to 10 ");
if(guess===6){
    document.write("“Bingo! Correct answer”");
}
else if ((guess===(number+1))|| (guess===(number-1))){
    document.write("Close enough to the correct answer”");
}
else{
    document.write("Try again");
}
 */

 //task 8
/*  var number = +prompt("Enter any number : ");
 if((number%3)===0){
    document.write("This number is divisible by 3");
 }
 else{
    document.write("This number isnot divisible by 3");
 } */

 //task 9
 /* var number = +prompt("Enter any number : ");
 if((number%2)===0){
    document.write("Even number");
 }
 else{
    document.write("Odd number");
 }
 */

 //task 10
/*  var T = +prompt("Enter temparature : ");
 if(T>40){
    document.write("“It is too hot outside.”");
 }
 else if(T>30){
    document.write("The Weather today is Normal.");
 }
 else if(T>20){
    document.write("Today’s Weather is cool.");
 }
 else if(T>10){
    document.write(" “OMG! Today’s weather is so Cool.”");
 } */

 //task 11
/*  var num1 = +prompt("Enter 1st number : ");
 var num2 = +prompt("Enter 2nd number : ");
 var op = prompt("Enter operator : ");
 if(op==='+'){
    document.write("Sum = "+(num1+num2));
 }
 else if(op==='-'){
    document.write("Subtraction = "+(num1-num2));
 }
 else if(op==='*'){
    document.write("Multiplication = "+(num1*num2));
 }
 else if(op==='/'){
    document.write("Division = "+(num1/num2));
 }
 else if(op==='%'){
    document.write("Modulus = "+(num1%num2));
 } */


            // chapter 12-13 : IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

//task 1
//var a = prompt("Enter any charachter");
//if(a>='0' && a<='9')
//{
//    document.write("you enter a number");
//}
//else if((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z'))
//{
//    document.write("you enter an alphabet");
//}
//else
//{    
 //   document.write("you enter an other character");
//}

//task 2
/* var num1 = +prompt("Enter 1st number :");
var num2 = +prompt("Enter 2nd number : ");
if(num1==num2){
    document.write("Both numbers are equal");
}
else if(num1>num2){
    document.write("1st number is greater then 2nd number");
}
else{
    document.write("2nd number is greater then 1st number");
} */

//task 3
/* var a = prompt("Enter any alphabet :");
if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a=="u")
{
    document.write("You enter a vowel");
}
else if(a == 'A' || a == 'E' || a == 'I' || a == 'O' || a=="U")
{    
   document.write("You enter a vowel");
}
else{
    document.write("You enter consunents");
} */

//task 4
/* var password="Muneeba";
var b= prompt("Enter your password :");
if(b==null){
    document.write("Please enter your password");
}
else if(b===password){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
} */

//task 5
/* var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
    greeting = "Good evening";
} */

//task 6
/* var time= +prompt("Enter time in 24 hours :");
if((time===000)&&(time<1200)){
    document.write("Good Morning!");
}
else if((time>1200)&&(time<1700)){
    document.write("Good Afternoon!");
}
else if ((time>1700)&&(time<2100))
{
    document.write("Good Evening!");
}
else if ((time>2100)&&(time<2359))
{
    document.write("Good night!");
} */


                // chapter 14-16 : ARRAYS 
//task 1
//var myArray = [];

//task 2
//var person = {};

//task 3
//var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

//task 4
//var Array = [1, 2, 3, 4];

// task 5
//var Array = [true, false];

//task 6
//var mxdarray = [ "dob", 1, "muneeba iqbal", true];

//task 7
/* var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
document.write("  <h2>Qualification:</h2>");
for(var i=1;i<=(education.length-1);i++){
    document.write(i+") "+education[i]+"<br>");
} */

//task 8
/* var stnames = ["Ali", "Saad", "Saba"];
var stscores = [320, 230, 480];
var total = 500;
var per=0;
for(var i=0;i<=(stnames.length-1);i++){
    per=((stscores[i]/total)*100);
    document.write("Score of "+stnames[i]+" is "+stscores[i]+". Precentage: "+per+"% <br>");
}
 */

//task 9

/* var colors = ["red"];
var add = prompt("Enter color name you want to add in the beginning of array : ");
colors.unshift(add);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red" , "green"];
var add = prompt("Enter color name you want to add at the end of array : ");
colors.push(add);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red" , "green"];
colors.unshift("blue","brown");
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red","blue" , "green"];
colors.shift();
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red","blue" , "green"];
colors.pop();
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors);*/

/* var colors = ["red", "green", "blue"];
var nmbr = +prompt("At which index u want to add the color name : ","Enter index number");
var colrname = prompt("Enter color name :");
colors.splice(nmbr, 0, colrname);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

/* var colors = ["red", "green", "blue" , "white", "yellow"];
var strtnmbr = +prompt("From which index you want to delete the colors : ","Enter starting index number");
var endnmbr = prompt("Enter end index number :");
colors.splice(strtnmbr, endnmbr);
document.write("<h2>Array Elements: </h2><br> ");
    document.write(colors); */

//task 10
/* var numbers = [1, 5, 12, 3, 7, 15, 9];
numbers.sort(function(a, b){return a-b});
alert(numbers); */

/* //task 11
var cities = ["karachi", "lahore", "Islamabad", "Queeta", "Peshawar"];
var selectedcities = cities.slice(2,4);
document.write("<h2>Cities List :</h2>");
    document.write(cities);
document.write("<h2>Selected Cities List : </h2>");
    document.write(selectedcities); */

//task 12
/* var arr = ["This ", "is", " my ", " cat"];
document.write("<h2>Array :</h2>");
document.write(arr);
document.write("<h2>String :</h2>");
document.write(arr.join(" ")); */

//task 13
//FIFO
/* var arr = ["Keyboard", "Mouse", "Monitor", "Printer"];
document.write("<h2>Devices :</h2>");
document.write(arr+"<br><br>");
for(var i=0;i<=(arr.length-1);i++){
    document.write("Out : <br>");
    document.write(arr[i]+"<br>");
} */

//task 14
//LIFO
/* var arr = ["Keyboard", "Mouse", "Monitor", "Printer"];
document.write("<h2>Devices :</h2>");
document.write(arr+"<br><br>");
for(var i=(arr.length-1);i>=0;i--){
    document.write("Out : <br>");
    document.write(arr[i]+"<br>");
} */

//task 15
//document.write("<div class='dropdown'><button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>Phone manufacturers<span class='caret'></span></button><ul class='dropdown-menu'><li><a href='#'>Apple</a></li><li><a href='#'>Samsung</a></li><li><a href='#'>Motorola</a></li><li><a href='#'>Nokia</a></li><li><a href='#'>Sony</a></li></ul></div>");

                    //chapter 17-20 : ARRAYS AND LOOP  

//task 1
//var salary = [ [],[],[],[],];

//task 2
/* var salary = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ];
for (var i = 0; i<=salary.length; i++) {
    for (var j = 0; j< salary[i].length; j++) {
        document.write( salary[i][j]); 
    }
    document.write("<br>");
} */

//task 3
/* for(var i=1;i<=10;i++){
    document.write(i+"<br>");
} */

//task 4
/* var n1 = + prompt("Enter any number for table : ","Enter number");
var tblelength = + prompt("Enter length for table : ","Enter length");
var sum=0;
for(var i=1;i<=tblelength;i++){
        sum+=n1;
        document.write(n1+"X"+i+"="+sum+"<br>");
} */

//task 5
/* var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<=fruits.length-1;i++){
    document.write(fruits[i]+"<br>");
}
document.write("<br><br>");
for(var i=0;i<=fruits.length-1;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
} */

//task 6
/* document.write("<h2>Counting : </h2><br>");
for(var i=1;i<=15;i++){
    document.write(i+", ");
} 

document.write("<br><h2>Reverse Counting :</h2><br> ");
for(var i=10;i>0;i--){
    document.write(i+" ,");
} 

document.write("<br><h2> Even :</h2><br> ");
for(var i=0;i<=20;i=i+2){
    document.write(i+" ,");
}

document.write("<br> <h2> Odd : </h2>");
for(var i=1;i<=20;i=i+2){
    document.write(i+", ");
}

document.write("<br><h2> Series :</h2> ");
for(var i=2;i<=20;i=i+2){
    document.write(i+"k, ");
} */

//task 7
/* var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item name you want to search : ","Enter name ");
for(var i=0;i<=A.length-1;i++){
    if(search===A[i]){
        document.write(search+" is found at index "+i+" in our bakery");
    }
    else{
        document.write(search+" is not vailable in our bakery");
        break;
    }
} */

//task 8
/* var A = [24, 53, 78, 91, 12];
document.write("Array items : "+A);
for(var i=1;i<=A.length;i++){
    if(A[0]<A[i]){
        A[0]=A[i];
    }
    else{
        document.write("<br>Lasrgest number is "+A[0]);
        break
    }
} */

//task 9
/* var sum=0,n1=5;
for(var i=1;i<=20;i++){
        sum+=n1;
        document.write(sum+",");
} */

///End//