
//checks if the buttons is quit or not
var isQuitButton = false;
//var sound : AudioClip;

function OnMouseEnter(){

//change colour of the main menu text
renderer.material.color = Color.blue;

}

function OnMouseExit(){


renderer.material.color = Color.white;


//changes colour back to white 
}


function OnMouseUp(){
//checks if the button is a quit button or not
//audio.PlayOneShot(sound);
if(isQuitButton)
{
Application.Quit();
//quit game
}else{
Application.LoadLevel(2);
//load level 

}
}
