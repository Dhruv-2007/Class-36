class Game{
    constructor(){
    }

    getState(){
      var gameStateCheck = database.ref('gameState');
      gameStateCheck.on("value",function(data){
          gameState = data.val();
      });
    }

    updateState(state){
     database.ref('/').update({
         gameState: state,
     });
    }

    gameStart(){
      if (gameState == 0){
         player = new Player();
         form = new Form();
         player.getCount();
         form.display();
      }
   }
}
