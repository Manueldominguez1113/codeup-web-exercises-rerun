"use strict";


// var input =prompt("what is your favorite color?");
// alert("Great! "+ input +" is my favorite color too!");
//// part 1
// function movieTotal(m1,m2,m3) {
//    return (m1+m2+m3)*3;
// }
// var input1= prompt("movie amount: how many days will you rent movie 1?");
// var input2= prompt("movie amount: how many days will you rent movie 2?");
// var input3= prompt("movie amount: how many days will you rent movie 3?");
//
// var total = movieTotal(Number(input1),Number(input2),Number(input3));
// alert("great! you owe: " +total);

//// part2
// function payTotal(job1,pay1,job2,pay2,job3,pay3){
//     job1 *=job1*pay1;
//     job2 *=job2*pay2;
//     job3 *=job3*pay3;
// return job1+job2+job3
// }
//
// var job1 = Number(prompt("how many hours did you work at Google?"));
// var job2 = Number(prompt("how many hours did you work at Amazon?"));
// var job3 = Number(prompt("how many hours did you work at Facebook?"));
//
// var total = payTotal(job1,400, job2,380,job3,350);
// alert("wow! you made "+total+" this time!");

////part 3
// function enrollment(isFull, conflicts){
//     return !isFull && !conflicts;
// }
//
// var full=confirm("is the class full? okay for yes, cancel for no");
// var conflict=confirm("does this conflict with your schedule? okay for yes, cancel for no");
//
// if(enrollment(full,conflict)){
//     alert("congrats! you are enrolled!");
// } else {
//     alert("sorry, you cannot enter this course");
// }

////part4
// function cartCoupons(items, expiration) {
// if (items> 2){
//      return expiration;
//  } else {
//      return false;
//  }
// }
//
// var prem = confirm("are you a premium member?");
// if (!prem){
// var items = Number(prompt("how many items did you buy?"));
// } else{
//     items =10;
// }
// var offer = confirm("is this offer still current?");
// var result = cartCoupons(items, offer);
//
// if (result){
//     alert("congrats on saving money!");
// }else {
//     alert("sorry, you didnt save money this time!");
// }
