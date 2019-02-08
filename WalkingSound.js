
var Sound: AudioClip;
//variable creation

function Update () {



if(Input.GetKeyDown("w") || Input.GetKeyDown("s") || Input.GetKeyDown("s") || Input.GetKeyDown("d")) {
//if the WASD keys are pressed i.e. when the character is moving. footstep sound shoud player
audio.clip = Sound;
audio.Play();
//plays the sound
}else{
audio.Stop();
//stops the sound if player stops moving or pressing W.


}
}
