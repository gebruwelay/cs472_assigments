$(() => { 
    
    const MAZE = (function(){     

        let wallTouched = false;
        let game = "";
        const defaultBoundaryBGColor = $(".boundary").css("background-color"); 
      
        const start = function() {
            $(".boundary").css("background-color",defaultBoundaryBGColor);
            wallTouched = false;            
        };  

        const gameStarted = function() {
            game = game ? "" : "Started";
        };   
        const setBGToRed = function() { 
            $(this).css("background-color","red");
            wallTouched = true;
        };    

        const alertMessage = () => {
            alert("Sorry, you lost! :[");
        };    

        const end = () => {
            if(!game){
                alert("You are coming from wrong direction! Please enter via [S] gate!");
            }else{
                wallTouched ? alert("Sorry, you lost! :["):alert("You win! :]");
                game = "";
            }  
        };

        return{
            start: start,
            gameStarted:gameStarted,
            setBGToRed: setBGToRed,
            alertMessage: alertMessage,
            end: end
        }

    })();

    $("#start").click(MAZE.start);
    $("#start").mouseenter(MAZE.gameStarted);    
    $(".boundary").mouseover(MAZE.setBGToRed);
    $(".boundary").mouseleave(MAZE.alertMessage);
    $("#end").mouseover(MAZE.end);    
});