export class Tamagotchi {
  constructor() {
    this.name = "";
    this.foodLevel = 100;
    this.sleep = 100;
    this.happiness = 100
    this.busy = false;
    this.alive = true;
    
  }
  getHungry() {
    setInterval(() => {
      if(this.foodLevel > 0) {
        this.foodLevel -= 10;
      }
  }, 1000);
}

  getTired() {
    setInterval(() =>{
      if(this.sleep > 0) {
        this.sleep -= 10;
      }
    }, 1000);
  }

  getSad() {
    setInterval(() => {
      if(this.happiness > 0) {
        this.happiness -=10;
      }
    }, 1000);
  }

  feed() {
    if(this.busy === false && this.alive === true) {
      this.foodLevel = 100
      this.busy = true;
      setTimeout(() => {
        this.busy = false;
      }, 1000*2)
    }
  }
  
}