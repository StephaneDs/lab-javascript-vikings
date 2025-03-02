// Soldier
class Soldier {
constructor(health,strength){
  this.health=health
  this.strength=strength
}
attack(){
  return this.strength
}
receiveDamage(damage){
  this.health=this.health-damage
}
}
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name=name
  }

receiveDamage(damage){
this.health=this.health-damage
  if(this.health > 0 ){
    return `${this.name} has received ${damage} points of damage`
  }
  else{
    return `${this.name} has died in act of combat`
    
  }

}
battleCry(){
  return "Odin Owns You All!"
}
}




// Saxon
class Saxon  extends Soldier{
  receiveDamage(damage){
    this.health=this.health-damage
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    else{
       return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = []
  saxonArmy = []
  

  addViking()
  }

addSaxon()


vikingAttack()
saxonAttack()
showStatus()
}

let a = new Soldier(100, 24)
let b = new Soldier(100, 50)
console.log(b.attack())

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
