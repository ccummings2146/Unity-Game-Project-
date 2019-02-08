static var score1 : int; // The player's score.
 //static to use the score var in another class
public var guiscore1 : UnityEngine.UI.Text;

//score manager for objectives complete
function Awake ()
{
 

    // Reset the score.
    score1 = 0;
}


function Update ()
{
    // show the Guiscore label = "Objectives Complete: " and the score int on the screen 
    guiscore1.text = "Objectives Complete: " + score1;
}