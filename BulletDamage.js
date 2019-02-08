
var Damage = 100;
//bullet damage variable
function OnCollisionEnter (info : Collision)
{//when bullet collides with Enemy object
	info.transform.SendMessage("ApplyDamage", Damage, SendMessageOptions.DontRequireReceiver);
}