
// 2 - TV

class TV {
    constructor(brand){
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    increaseVolume (num) {
        if (this.volume+num <= 100){
            this.volume += num
        } else {
            this.volume = 100
        }
    }

    decreaseVolume (num) {
        if (this.volume-num >=0) {
            this.volume -= num
        }else {
            this.volume = 0
        }
    }

    changeChannel (num) {
        if (num <=50 && num > 0 ){
            this.channel = num
        }
    }

    describe() {
        console.log(`you have a ${this.brand} TV and on the channel ${this.channel} with a volume of ${this.volume} `);
    }

}

const LG = new TV ("LG")

console.log(LG);

LG.increaseVolume(30)
console.log(LG);

LG.decreaseVolume(20)
console.log(LG);

LG.changeChannel(26)
console.log(LG);

LG.changeChannel(5)
console.log(LG);

LG.describe()