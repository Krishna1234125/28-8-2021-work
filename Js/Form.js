class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting =createElement('h3');

      
    }

    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide();

    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing game");
      title.position(displayWidth/2 -50, 30);
      
     // var input = createInput("Name");
      //var button = createButton('Play');
      
      this.input.position(displayWidth/2-40, displayHeight/2-80);
      this.button.position(displayWidth/2 +40, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();

        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-50, displayHeight/4);
      });
  
    }
  }