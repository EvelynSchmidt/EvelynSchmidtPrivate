namespace Memoryspiel {
    
    let numPlayers: number;
    let numPairs: number;
    let n: number = 0;
    let cardContent: string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

function inputPairs() : number{
       
    let pairs : string = prompt("Wie viele Kartenpaare (min4 & max26)")
    let pairSum : number = parseInt(pairs)
       
       
      
       console.log("inputPairs")
        
    
       return pairSum;
    }
       
   let amount :number =  inputPairs();
   
        
    console.log("Länge Infolist", cardcontent.length);
    console.log("Content Infolist", cardcontent);
    
    
    
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = infolist[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = cardcontent.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", cardList);
   
    
    }
    
    
    
    function generateCards(y:number) : void{
        var node : any= document.getElementById("spielfeld");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
            // min = Math.ceil(min);
          //  max = Math.floor(max);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length)
            var content : string = cardList[random];  
             
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            
            i++;
        }
    }
    
    
    // Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);
        
       
        
        
        console.log("main");
        
        // Content erzeugen
         generateCards(amount);
        }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
    
    
    


}