var rad1 =document.getElementById('blueskin');
rad1.addEventListener('click',function(){
skin("blue1", "blue2", "blue3","blue4");

});
var rad1 =document.getElementById('greenskin');
rad1.addEventListener('click',function(){
skin("green1", "green2", "green3","green4")

});
var rad1 =document.getElementById('orangeskin');
rad1.addEventListener('click',function(){
skin("orange1", "orange2", "orange3","orange4")

}); 



var dice = document.getElementById('choo1');
dice.addEventListener('click', function(){
document.getElementById('wcontent').innerHTML = '';
var spr = '<table><tbody><tr><td>Siła</td>';
var ile = 0;
for(var i=1;i<4;i++){
kosc = parseInt((Math.random()*6)+1);
spr += '<td><img src="images/0' + kosc + 'b.svg" class="kostka"></td>';
ile += kosc;
};
spr += "<td>" + ile + "</td></tr></tbody></table>";
document.getElementById('wcontent').innerHTML = spr;

})






    function skin(kolor1, kolor2, kolor3, kolor4) {
        document.getElementById('panelhead').className =  kolor1 ; 
        document.getElementById('panelcontent').className = kolor1;
        document.getElementById('options').className = kolor2;
        document.getElementById('description').className = kolor2;
        document.getElementById('avatarsection').className = kolor2;
        document.getElementById('choose').className = kolor3;
        document.getElementById('choo1').className = kolor4;
        document.getElementById('choo2').className = kolor4;
        document.getElementById('choo3').className = kolor4;
        document.getElementById('choo4').className = kolor4;
        document.getElementById('choo5').className = kolor4;
        document.getElementById('choo6').className = kolor4;
        document.getElementById('choo7').className = kolor4;
        

    }



