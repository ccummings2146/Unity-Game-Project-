
  var isPause = false;
  //pause boolean
 var MainMenu : Rect = Rect(10, 10, 200, 200);
  
 function Update () {
  if( Input.GetKeyDown(KeyCode.Escape))
    {
     // esc to pause and unpause
       isPause = !isPause;
       if(isPause)
          Time.timeScale = 0000;
            // if the game is paused
       else
          Time.timeScale = 1;
            //else game not paused
    }
 }
  
 
 function OnGUI()
 {  GUI.color = Color.red;
 //sets the gui windows to the colour red
 
    if(isPause)
    //if game is paused

        GUI.Window(0, MainMenu, TheMainMenu, "Paused");
        //show gui windows for the pause menu that holds the buttons
 }
 
 function TheMainMenu() {
 //creates buttons for the main menu
 if(GUILayout.Button("Main Menu")){
 Application.LoadLevel(0);
 //return player to main menu when clicked
 }
 if(GUILayout.Button("Restart")){
 Application.LoadLevel(2);
 //restarts level  when clicked
 }
 if(GUILayout.Button("Quit")){
 Application.Quit();
 //exits the application when clicked
 }
 }
 
 