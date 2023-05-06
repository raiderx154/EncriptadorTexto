/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/
let textoCifrado;
let muneco = document.getElementById("imgmuneco");
let subtitulo=document.getElementById("subtitulo");
let palabra = document.getElementById("palabra");
let parrafo=document.getElementById("parrafo");
let botonCopiar=document.getElementById("btn-copy");



function btnEncriptar() {
    
    encriptar();
    palabra.value="";
    parrafo.innerHTML=textoCifrado;
    muneco.style.display="none";
    subtitulo.style.display="none";
    botonCopiar.style.display="block";
    
}

function btnDesencriptar() {
    desencriptar();
    parrafo.innerHTML=textoCifrado;
    palabra.value="";
    
    
    
}


   // 
   function encriptar() {
    
    var palabra = document.getElementById("palabra").value.toLowerCase();
    textoCifrado = palabra
        
        .replace(/e/igm, "enter")
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/o/igm, "ober")
        .replace(/u/igm, "ufat")
       
      /*  if (palabra.length !=0) {
            Swal.fire({
                title: "texto encriptado con exito",
                color:"#000",
                
                icon : "success",
                background:'#59DC7B',
                timer:3000,
                toast:true,
                position:"top-end"
                
                
               });
            
           
        }
        */
        if(palabra.length ==0){
            Swal.fire({
                title: "Ingresa un texto",
                icon : "error"
                
            });
        }
        
    
   }
      
      function desencriptar() {
    
        var palabra = document.getElementById("palabra").value.toLowerCase();
        textoCifrado = palabra
            
            .replace(/enter/igm, "e")
            .replace(/imes/igm, "i")
            .replace(/ai/igm, "a")
            .replace(/ober/igm, "o")
            .replace(/ufat/igm, "u")
           /*
            if (palabra.length !=0) {
                Swal.fire({
                    title: "texto desencriptado con exito",
                    color:"#000",
                    
                    icon : "success",
                    background:'#59DC7B',
                    timer:3000,
                    toast:true,
                    position:"top-end"
                    
                    
                });
               
               
            }
            */
            if(palabra.length ==0){
                Swal.fire({
                    title: "Ingresa un texto",
                    icon : "error"
                    
                });
            }
            
       }

       function copiar() 
       { 
        let cifrado = document.getElementById('parrafo');
        

        navigator.clipboard.writeText(cifrado.textContent);
        botonCopiar.textContent='copiado';
        
      }