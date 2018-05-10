var rad1 =document.getElementById('blueskin');
rad1.addEventListener('click',function(){
skin("blue1", "blue2");

});
var rad1 =document.getElementById('greenskin');
rad1.addEventListener('click',function(){
document.getElementById('panelhead').className = "green1" ; 
document.getElementById('panelcontent').className = "green1";
document.getElementById('options').className = "green2";
document.getElementById('description').className = "green2";
document.getElementById('avatarsection').className = "green2";


});
var rad1 =document.getElementById('orangeskin');
rad1.addEventListener('click',function(){
document.getElementById('panelhead').className = "orange1" ; 
document.getElementById('panelcontent').className = "orange1";
document.getElementById('options').className = "orange2";
document.getElementById('description').className = "orange2";
document.getElementById('avatarsection').className = "orange2";

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
    }



