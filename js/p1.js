var ctyp = '';

var dice = document.getElementById('p1');
dice.addEventListener('click', function(){
kosc = parseInt((Math.random()*6)+1);
document.getElementById('k').innerHTML = '<img src="images/0' + kosc + ctyp + '.svg" class="kostka">';})


var rad1 =document.getElementById('w1');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2n" ;
ctyp = 'b';
});
var rad1 =document.getElementById('w2');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2z" ; 
ctyp = 'g'; 
});
var rad1 =document.getElementById('w3');
rad1.addEventListener('click',function(){
document.getElementById('k2').className = "k2o" ;  
ctyp = 'o';
});