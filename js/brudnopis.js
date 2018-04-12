// Mój pomysł na rozwiązanie + sprawdzenie działania maszyny losującej
var array = [0,0,0,0,0,0,0];  //stworzyłem tablicę, która ma 7 miejsc, 6 pierwszych przeznaczam na wyniki rzutów, a ostatnią na ewentualne błędy
    for(var i=0;i<1000;i++)   //pętla która powtarza losowanie 1000 razy
    {var j = (Math.random()*10);  //losuję funkcją js losową liczbę i mnożę przez 10
      if (j<10/6)                 //sprawdzanie czy jest mniejsze 10/6
      array[0]++;                 //zwiększanie wartośc w kolumnie
      else if (j<2*10/6)          //sprawdzanie czy jest z przedziału od 0 od 20/6
      array[1]++;
      else if (j<3*10/6)
      array[2]++;
      else if (j<4*10/6)
      array[3]++;
      else if (j<5*10/6)
      array[4]++;
      else if (j<6*10/6)          //sprawdzanie czy jest mniejsze od 60/6 czyli 10
      array[5]++;
      else
      array[6]++;                 // jeśli liczba trafiałby się z jakiegoś innego przedziału niż te wyżej to w tabeli to w ostatnie kolumnie zwiększy się wartość
    }
    console.log("Test 1:",array);           // w konsoli przeglądarki mamy coś takiego (7) [170, 149, 174, 181, 168, 158, 0] - za każdym razem trochę
                                  // inne liczby, ale generalnie widać, że mniej więcej równo się rozkładają, 0 w ostanie to brak błędów. 
                                  // Suma tych kolumn da zawsze 1000

// Teraz zastosujemu to już tylko do losowania, sprawdzanie było dla pewności
var j2 = (Math.random()*10);  
      if (j2<10/6)                 
      console.log("Metoda 1:" + "1");                 
      else if (j2<2*10/6)          
      console.log("Metoda 1:" + "2");   
      else if (j2<3*10/6)
      console.log("Metoda 1:" + "3");   
      else if (j2<4*10/6)
      console.log("Metoda 1:" + "4");   
      else if (j2<5*10/6)
      console.log("Metoda 1:" + "5");   
      else if (j2<6*10/6)          
      console.log("Metoda 1:" + "6");   
      else
      console.log("Metoda 1:" + "Błąd");                   
// Ot i cały kod.   

//Pokaże, też krótkie rozwiązanie troszkę prostsze
kosc = parseInt((Math.random()*6)+1);  // przykładowe działanie, wylosowano liczbe 0,323422342234
console.log("Metoda 2:" + kosc);                                           // Zostaje ona pomnożna przez 6 -> 1,940534053404
                                           // dodajemy jeden -> 2,940534053404 
                                           // parseIny ucina końcówkę i mamy w wyniku 2
                                           // Można przestestować sobie na kalkulatorze jak to działa, zawsze wyjdzie liczba z zakresu 1-6
//Zrobimy teraz test taki jak poprzednio
var array2 = [0,0,0,0,0,0,0];  
    for(var i=0;i<1000;i++)   
    {var kosc2 = parseInt((Math.random()*6)+1);  
      if (kosc2 == 1)     // == oznacza, że porównujemy, jakby był tylko = to byśmy przypisali            
      array2[0]++;                 
      else if (kosc2 == 2)         
      array2[1]++;
      else if (kosc2 == 3) 
      array2[2]++;
      else if (kosc2 == 4) 
      array2[3]++;
      else if (kosc2 == 5) 
      array2[4]++;
      else if (kosc2 == 6)          
      array2[5]++;
      else
      array2[6]++;                 // jeśli liczba trafiałby się z jakiegoś innego przedziału niż te wyżej to w tabeli to w ostatnie kolumnie zwiększy się wartość
    }
    console.log("Test 2:",array2); 

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