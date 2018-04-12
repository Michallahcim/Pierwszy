var dice = document.getElementById('p1');
dice.addEventListener('click', function(){
kosc = parseInt((Math.random()*6)+1);
document.getElementById('k').innerHTML = '<img src="images/0' + kosc + '.svg" class="kostka">';})

var rad1 =document.getElementById('w1');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2n" ;   
});
var rad1 =document.getElementById('w2');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2c" ;   
});
var rad1 =document.getElementById('w3');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2z" ;   
});