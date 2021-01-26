class Form{
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html('Car Racing Game');
        title.position(200,20);
        var input = createInput("Enter Name");
        input.position(250,250);
        var button = createButton("Play");
        button.position(250,300);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.updateName(name);
            player.updateCount(playerCount);
            var greeting = createElement('h3');
            greeting.html('Hello '+ name);
            greeting.position(250,250);
        });
    }
}