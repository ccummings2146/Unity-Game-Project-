private var charController : CharacterController;
//variable to use character controller
private var theTransform : Transform;//transform variable
private var charHeight : float; //height of the player when standing

function Start () 
{
	theTransform = transform;
	charController = GetComponent(CharacterController);
	//gets component character controller
	charHeight = charController.height;
	//set the character controllers height
	//state before key C is pressed
}

function Update () 
{
	var h = charHeight;
	
	if (Input.GetKey("c"))
	//if c is pressed 
	{
		h = charHeight*0.5;
		//reduce player size by half
	}
	
	var lastHeight = charController.height; //switching between standing and crouching
	charController.height = Mathf.Lerp(charController.height, h, 5*Time.deltaTime);
	
	theTransform.position.y += (charController.height-lastHeight)/2; //Fix Y position of the character controller
}