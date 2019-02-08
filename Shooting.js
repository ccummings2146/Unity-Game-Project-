var theBullet : Rigidbody;
//rigidbody bullet gameobject
var audio1: AudioClip;
//gunshot sound game Object
var Speed = 400;
var radius = 4;
var power = 33;
var FireRate = 0.2;



 
function Start () {

var explosionPos : Vector3 = transform.position;
var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);

for (var hit : Collider in colliders) {

if (hit && hit.rigidbody)
hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
//force of the prefab bullet

}


}

function Update () {

if (Input.GetMouseButtonDown(0))
{
//fires the prefab bullet when left mouse button iis click
var clone = Instantiate(theBullet, transform.position, transform.rotation);
clone.velocity = transform.TransformDirection(Vector3(0, 0, Speed));
//Shoots the bullet prefab forwards 
//clones the orginal prefab bullet 


audio.PlayOneShot(audio1); 
//play gunshot sound when left click is pressed

}


}
 