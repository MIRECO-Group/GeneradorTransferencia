/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'anim_susana'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13068, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("repeat-head");

      });
      //Edge binding end

   })("anim_susana");
   //Edge symbol end:'anim_susana'

   //=========================================================
   
   //Edge symbol: 'cabeza_complet'
   (function(symbolName) {   
   
   })("cabeza_complet");
   //Edge symbol end:'cabeza_complet'

   //=========================================================
   
   //Edge symbol: 'mov_cejas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8227, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("repeat-cejas");

      });
      //Edge binding end

   })("mov_cejas");
   //Edge symbol end:'mov_cejas'

   //=========================================================
   
   //Edge symbol: 'mov_pepasOjos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("againEyes");

      });
      //Edge binding end

   })("mov_pepasOjos");
   //Edge symbol end:'mov_pepasOjos'

   //=========================================================
   
   //Edge symbol: 'parpadeo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6195, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("repeat");

      });
      //Edge binding end

   })("parpadeo");
   //Edge symbol end:'parpadeo'

   //=========================================================
   
   //Edge symbol: 'boquitas'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7362, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play("repeatboca");

      });
      //Edge binding end

   })("boquitas");
   //Edge symbol end:'boquitas'

   //=========================================================
   
   //Edge symbol: 'brazo_mov'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11949, function(sym, e) {
         // introducir código aquí
         sym.play("repeat-hand");

      });
      //Edge binding end

   })("brazo_mov");
   //Edge symbol end:'brazo_mov'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-125954754");