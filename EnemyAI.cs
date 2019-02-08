using UnityEngine;
using System.Collections;

public class EnemyAI : MonoBehaviour
{
	# region Fields
	
	public Transform target;//Creates a transform which can be assigned outside the script.
	public int moveSpeed = 3; //Creates a movement speed.
	public int rotationSpeed = 3;//Rotations speed.
	public int maxDistance = 2; //Maximum distance for enemy.
	public float enemySightDistance = 30.0f;
	public float enemyHearingDistance = 15.0f;
	
	public GameObject selectedTarget;
	
	private Transform myPosition;
	
	# endregion
	
	
	
	#region Awake & Initialize
	
	void Awake()
	{
		myPosition = transform;//Sets myPosition to the enemy transform
	}
	
	// Use this for initialization
	void Start()
	{
		GameObject go = GameObject.FindGameObjectWithTag("Player");//finds the Game Object with tag of player.
		
		target = go.transform; // sets transform to players transform
		
		maxDistance = 2; //sets maximum distance to 2;
	}
	
	#endregion
	
	#region Update
	
	// Update is called once per frame
	void Update()
	{
		WatchForPlayer();
		ListenForPlayer();
	}
	#endregion
	
	# region Methods
	
	void WatchForPlayer()//Enemy will look for the player.
	{
		Vector3 dir = (target.transform.position - transform.position).normalized;
		float direction = Vector3.Dot(dir, transform.forward);
		
		if (Vector3.Distance(target.position, myPosition.position) < enemySightDistance) // && direction > 0)
		{
			//  EnemyHealth eh = (EnemyHealth)selectedTarget.GetComponent("EnemyHealth");
			//  eh.targetted = true;
			PlayerDetected();
			//my added line of code
			Application.LoadLevel(Application.loadedLevel);//to restart level when spotted
			//slight modification to the enemyAI script on blackboard script i.e. restarts level when player is detected
		}
		else
		{
			// EnemyHealth eh = (EnemyHealth)selectedTarget.GetComponent("EnemyHealth");
			// eh.targetted = false;
		}
	}
	
	void ListenForPlayer()
	{
		if (Vector3.Distance(target.position, myPosition.position) < enemyHearingDistance)
		{
			// EnemyHealth eh = (EnemyHealth)selectedTarget.GetComponent("EnemyHealth");
			//  eh.targetted = true;
			PlayerDetected();


		}
		else
		{
			// EnemyHealth eh = (EnemyHealth)selectedTarget.GetComponent("EnemyHealth");
			//  eh.targetted = false;
		}
	}
	
	void PlayerDetected() //What happens when 
	{
		Debug.DrawLine(target.position, myPosition.position, Color.yellow);//Debug to show path of enemy.
		
		//Look at target
		myPosition.rotation = Quaternion.Slerp(myPosition.rotation, Quaternion.LookRotation(target.position - myPosition.position), rotationSpeed * Time.deltaTime);
		
		//Allows movement provided enemy distance if greater than the max distance, this stops the enemy from getting too close.
		if (Vector3.Distance(target.position, myPosition.position) > maxDistance)
		{
			//Move towards target
			myPosition.position += myPosition.forward * moveSpeed * Time.deltaTime;
		}
		
	}
	
	#endregion
	
	
	
}