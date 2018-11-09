// "use strict";

// let assert = require("assert");

// let jobTypes = {
//   pilot: "MAV", // "Mars Ascent Vehicle", "MAV", "Ascend into low orbit"
//   mechanic: "Repair Ship",
//   commander: "Main Ship", // "Hermes", "Main Ship", "Interplanetary Space Travel"
//   programmer: "Any Ship!"
// };

// //-----------------------------------------------------------------------------
// // Your code here
// // jobTypes is an object of jobs with job-ship key-value pairs
// // I need to create a Ship class and a CrewMember class

// class CrewMember {
//   constructor(name, job, specialSkill) {
//     this.name = name,
//     this.job = job,
//     this.specialSkill = specialSkill,
//     this.ship = null;
//   }
//   this.enterShip=(ship)=> {
//     this.ship = ship;
//     ship.crew.push(this);
//   }
// }

// const crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
// const crewMember2 = new CrewMember("Commander Lewis", "commander", "geology");

// class Ship {
//   constructor(name, type, ability) {
//     this.name = name;
//     this.type = type;
//     this.ability = ability;
//     this.crew = [];
  
//     this.missionStatement=() => {
//       for(let member of this.crew) {
//         if (member.jobTypes === this.type) {
//           return this.ability
//         }
//       } return "Can't perform a mission yet."
//     }
//   }
// }
// // if (jobTypes[this.crew[0].job] === this.type) {
// //   return this.ability
// // } else {
// //   return "Can't perform a mission yet."

// //   if (this.crew === crewMember1 || this.crew === crewMember2) {
// //     return this.ability;
// //   } else {
// //     return "Can't perform a mission yet."
// //   }
// // }


// const mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
// const hermes = new Ship("Hermes", "Main Ship", "Interplanetary Space Travel");
// console.log(crewMember1.enterShip(mav));
// console.log(crewMember2.enterShip(hermes));
// console.log(hermes.missionStatement());
// console.log(mav.missionStatement());
// console.log(hermes.crew)
// //-------------------------------------------------------------------------------
// //tests
// if (typeof describe === "function") {
//   describe("CrewMember", function () {
//     it("should have a name, a job, a specialSkill and ship upon instantiation", function () {
//       var crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
//       assert.equal(crewMember1.name, "Rick Martinez");
//       assert.equal(crewMember1.job, "pilot");
//       assert.equal(crewMember1.specialSkill, "chemistry");
//       assert.equal(crewMember1.ship, null);
//     });

//     it("can enter a ship", function () {
//       let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
//       let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
//       crewMember1.enterShip(mav);
//       assert.equal(crewMember1.ship, mav);
//       assert.equal(mav.crew.length, 1);
//       assert.equal(mav.crew[0], crewMember1);
//     });
//   });

//   describe("Ship", function () {
//     it("should have a name, a type, an ability and an empty crew upon instantiation", function () {
//       let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
//       assert.equal(mav.name, "Mars Ascent Vehicle");
//       assert.equal(mav.type, "MAV");
//       assert.equal(mav.ability, "Ascend into low orbit");
//       assert.equal(mav.crew.length, 0);
//     });

//     it("can return a mission statement correctly", function () {
//       let mav = new Ship("Mars Ascent Vehicle", "MAV", "Ascend into low orbit");
//       let crewMember1 = new CrewMember("Rick Martinez", "pilot", "chemistry");
//       let hermes = new Ship("Hermes", "Main Ship", "Interplanetary Space Travel");
//       let crewMember2 = new CrewMember("Commander Lewis", "commander", "geology");
//       assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
//       assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

//       crewMember1.enterShip(mav);
//       assert.equal(mav.missionStatement(), "Ascend into low orbit");

//       crewMember2.enterShip(hermes);
//       assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
//     });
//   });
// }
'use strict';
//require assert
var assert = require('assert');

const jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// test one

class CrewMember {
  constructor (name, job, specialSkill) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
    this.jobType = jobTypes[this.job];
    // test two
    this.enterShip = (ship) => {
      this.ship = ship;
      ship.crew.push(this);
    }
  }
}
// test three
class Ship {
  constructor (name, type, ability) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
    // test four
    this.missionStatement = ()=> {
      for (let member of this.crew) {
        if (member.jobType === this.type) {
          return this.ability;
        }
      }
      return "Can't perform a mission yet.";
    }
  }
}
//  instances of Ship and Crewmember classes
var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
var crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

console.log(crewMember1.enterShip(mav));
console.log(crewMember2.enterShip(hermes));
// console.log(hermes);
console.log(hermes.missionStatement());
console.log(hermes.crew);
console.log(mav.missionStatement());
console.log(mav.crew)


//tests
// test one
if (typeof describe !== 'undefined') {
  describe('CrewMember', function() {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function() {
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    })
    //  test two
    it('can enter a ship', function() {
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    })
  })
  // test three
  describe('Ship', function() {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function() {
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    })
    // test four
    it('can return a mission statement correctly', function() {
      var mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      var hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      var crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    })
  })
}