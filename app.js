window.addEventListener('load', function() {
    
  //Obtener el número mayor del arreglo.*******************
  
     /*llamando al boton*/
     var getlargeNumberr = document.getElementById('getlargeNumber');
  
     getlargeNumberr.addEventListener('click', function(){
      var array = [45, 75, 200, 256, 1, 27];
      auximayor = array[0];
      for(i=1;i<array.length;i++){    
          if (array[i]>auximayor) {
              auximayor = array[i];        
          }     
      }
  
      /*Pintando los resultados*/
      answerlargeNumber = document.getElementById('largeNumber');
      answerlargeNumber.innerHTML = auximayor; 
    });
  
  
  //Obtener el número menor del arreglo.***********************
  
        /*llamando al boton*/
         var getsmallerNumber = document.getElementById('getsmallerNumber');
  
         getsmallerNumber.addEventListener('click', function(){
          var array = [45, 75, 200, 256, 1, 27];
          auximenor = array[0];
          for(i=1;i<array.length;i++){    
             if (array[i]<auximenor) {
              auximenor = array[i];        
            }     
          };  
  
         /*Pintando los resultados*/
          answersmallerNumber = document.getElementById('smallerNumber');
          answersmallerNumber.innerHTML = auximenor; 
        });
  
  
  //Obtener el segundo mayor del arreglo.***********************
  
        /*llamando al boton*/
        var secondLargest  = document.getElementById('secondLargest');
  
        secondLargest.addEventListener('click', function(){
         var array = [45, 75, 200, 256, 1, 27];
          auxi = array[0];
          second = array[0];
          for(i=1;i<array.length;i++){    
            if (array[i]>auxi) {
             auxi = array[i];        
            }           
          }
  
          largest = auxi;          
          second = array[0];

          for(j=1;j<array.length;j++){    
              if ((second<array[j]) && (array[j]<largest) && (second !== largest)) {
                  second = array[j];        
              }
          }      
  
        /*Pintando los resultados*/
         secondsmallerNumber = document.getElementById('secondsmallerNumber');
         secondsmallerNumber.innerHTML = second; 
       });
  
  
  });