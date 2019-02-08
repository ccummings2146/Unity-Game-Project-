 var mouse : Vector2;
     var w : int = 32;
     var h : int = 32;
     //size of the texture i.e. 32x32
     var cursor : Texture2D;
     //var for cursor texture
     
     function Start()
     {
         Screen.showCursor = false;
         //disables cursor on start of the game
     }
     
     function Update()
     {
         mouse = new Vector2(Input.mousePosition.x, Screen.height - Input.mousePosition.y);
         //movement of the mouse.         
     }
     
     function OnGUI()
     {
         GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), cursor);
         //draws the 2d texture as the mouse in the game 
     }