
var Health = 100;
//enemy health
var scoreValue : int = 100;    
//score value
function ApplyDamage (Damage : int)
{
   
	Health -= Damage;
	
	if(Health <= 0)
	{
		Dead();
	
	//if the enemy health == 0 then destroy object and add score
	}
	
}

function Dead()
{
   //destroys enemy when hit
	Destroy (gameObject);
	 ScoreManager.score += scoreValue;
}