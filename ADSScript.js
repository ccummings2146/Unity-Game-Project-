

var ADS : boolean = false; var cam : GameObject;
//creating variables aim and camera;

function Start(){
ADS = false;

}
function Update () { 
if(Input.GetMouseButtonDown(1)){
//right mouse click to aim downsights 
 ADS = true; if(ADS == true)
 //if AimDownSights is equal to true
 {
  cam.active = true; 
  //swap to the aim down sight camera
 } 
 }
if(Input.GetMouseButtonUp(1)){
 ADS = true; if(ADS)
 //right click released so AimDownSights = false
 { 
cam.active = false; 
 //swaps the AimDownSights camera back to the player camera because aim is equal to false;
 }
}
}