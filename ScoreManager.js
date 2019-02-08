static var score : int;// The player score for shooting enemies
//static to access the score elsewhere
public var guiscore : UnityEngine.UI.Text;
//text object
function Awake ()
{
 

    // Reset the score.
    score = 0;
}


function Update ()
{
      // show the Guiscore label = "score " and the score int on the screen 
    guiscore.text = "Score: " + score;
}