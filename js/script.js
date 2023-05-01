/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/


let muneco = document.getElementById("imgmuneco");
let subtitulo=document.getElementById("subtitulo");
let parrafo=document.getElementById("parrafo");


   // 
   function encriptar() {
    
    var palabra = document.getElementById("palabra").value.toLowerCase();
    var textoCifrado = palabra
        
        .replace(/e/igm, "enter")
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/o/igm, "ober")
        .replace(/u/igm, "ufat")
       
        if (palabra.length !=0) {
            Swal.fire({
                title: "texto encriptado con exito",
                color:"#000",
                
                icon : "success",
                background:'#59DC7B',
                timer:3000,
                toast:true,
                position:"top-end"
                
                
            });
            parrafo.innerHTML=textoCifrado;
           
        }else{
            Swal.fire({
                title: "Ingrea un texto",
                icon : "error"
                
            });
        }
        
        
    
    
   
    
  
  

    
    
   }
   function desencriptar() {
    copy.style.display= "block";
    cument.getElementById("btn-copy").style.display="inherit";
    copy.style.display= "block";
    cument.getElementById("btn-copy").style.display="inherit";
    var palabra = document.getElementById("palabra").value;
    var textoCifrado = palabra
        .replace(/ai/igm, "a")
        .replace(/enter/igm, "e")
        .replace(/imes/igm, "i")
        .replace(/ober/igm, "o")
        .replace(/ufat/igm, "u")
       
    
    
    document.getElementById("subtitulo").value =textoCifrado;
   

   }
 


