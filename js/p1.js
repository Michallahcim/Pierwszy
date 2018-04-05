var dice = document.getElementById('p1');
dice.addEventListener('click', function()
{

    var j2 = (Math.random()*10);  
    if (j2<10/6)                 
    document.getElementById('k').innerHTML = '<img src="images/01.svg" class="kostka">';                 
    else if (j2<2*10/6)          
    document.getElementById('k').innerHTML = '<img src="images/02.svg" class="kostka">';   
    else if (j2<3*10/6)
    document.getElementById('k').innerHTML = '<img src="images/03.svg" class="kostka">';   
    else if (j2<4*10/6)
    document.getElementById('k').innerHTML = '<img src="images/04.svg" class="kostka">';   
    else if (j2<5*10/6)
    document.getElementById('k').innerHTML = '<img src="images/05.svg" class="kostka">';   
    else if (j2<6*10/6)          
    document.getElementById('k').innerHTML = '<img src="images/06.svg" class="kostka">';  
    else
    console.log("błąd");
    

    console.log("działa");
})