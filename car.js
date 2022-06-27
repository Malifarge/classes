
// 1 - Batmobile

class Car {
    constructor (brand,speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate(num){
        this.speed += num
    }

    brake(num){
        this.speed -= num
    }

    describe(){
        console.log(`${this.brand} running at ${this.speed} km/h`);
    }
}

const ford = new Car("ford", 0)

console.log(ford);

ford.accelerate(50)
console.log(ford);

ford.brake(25)
console.log(ford);

ford.describe()

const Citroën = new Car("Citroën", 25)

console.log(Citroën);

Citroën.accelerate(100)
console.log(Citroën);

Citroën.brake(70)
console.log(Citroën);

Citroën.describe()