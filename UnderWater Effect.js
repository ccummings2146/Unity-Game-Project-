
//creating variable 
var underwaterLevel = 40;
//the ground level is 40 anything below that is underwater
private var defaultFog;
private var defaultFogColor;
private var defaultFogDensity;
private var defaultSkybox;
 var scriptObj : GameObject;

 
function Start () {
defaultFog = RenderSettings.fog;
defaultFogColor = RenderSettings.fogColor;
defaultFogDensity = RenderSettings.fogDensity;
defaultSkybox = RenderSettings.skybox;

 }
 
function Update () {
if (transform.position.y < underwaterLevel) {
RenderSettings.fog = true;
RenderSettings.fogColor = Color (0, 0.4, 0.7, 0.6);
RenderSettings.fogDensity = 0.025;
 scriptObj.GetComponent("BlurEffect").enabled = true;

//update function to apply fog colour,density to the players
//camera when the first person controller touches the water level.
//adds blur effect to player camera
}
 
else {
RenderSettings.fog = defaultFog;
RenderSettings.fogColor = defaultFogColor;
RenderSettings.fogDensity = defaultFogDensity;
RenderSettings.skybox = defaultSkybox;
//reset the fog back to the default when player exits the water.
scriptObj.GetComponent("BlurEffect").enabled = false;
//stops the blur effect

}
} 