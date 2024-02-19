//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name,mass,scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores
    }
    addScore(score) {
        let newScore = this.scores.push(score)
        return newScore
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores; i++) {
            sum += this.scores[i];
        }
        let aver = sum / this.scores.length;
        return aver
    }

}
let dog = new CrewCandidate('Merry Maltese',1.5,[93,88,97])
let gator = new CrewCandidate('Glad Gator',225,[75,78,62])
let bear = new CrewCandidate('Bubba Bear',135,[88,85,90])
console.log(bear)
let bear2 = bear.addScore(83)
bear.scores 
console.log(dog)
console.log(gator)
console.log(bear)

let gator2 = gator.average()

console.log(gator2)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.