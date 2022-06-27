
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

// 3 - Video games

// JV : "Mario smash football"

class Captain {
    constructor (Name, type, color){
        this.Name = Name
        this.type = type
        this.color = color
    }
}

const Mario = new Captain ("Mario","Complete","red")
const Luigi = new Captain ("Luigi The Best", "Collectif", "green")

console.log(Mario);
console.log(Luigi);

class Players {
    constructor (Name,Hi){
        this.Name = Name
        this.Hi = Hi
    }
}

const Toad = new Players ("Toad", "HIIIIIII")
const Birdo = new Players ("Birdo the best","Yeaaah")

console.log(Toad);
console.log(Birdo);


class Team {
    constructor (Captain,Players){
        this.Captain = Captain.Name
        this.players = Players.Name
        this.color =  Captain.color
        this.gameplay = Captain.type
        this.Hi = Players.Hi
    }

    teamHi() {
        console.log(this.Hi);
    }    
    
}

const teamMarioToad = new Team(Mario,Toad)
teamMarioToad.teamHi()
console.log(teamMarioToad);

const teamLuigiToad = new Team(Luigi,Toad)
teamLuigiToad.teamHi()
console.log(teamLuigiToad);

const teamBest = new Team(Luigi,Birdo)
teamBest.teamHi()
console.log(teamBest);


