var OC : int = 1;    
//adds one point to objectives complete
public var rotationSpeed: float;
//speed of the rotation

function Start(){

renderer.material.color = Color.green;
//changes the colour of the cube to green

}
function Update(){
transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
//rotates the cube
}

function OnTriggerEnter(other : Collider){
Destroy(gameObject);
//destroys the cube or waypoint when player collides with it
 ObjectiveScoreManager.score1 += OC;
 //adds score when player collides with waypoint marker

}