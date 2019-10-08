class School{
  constructor(name, level, numberOfStudents){
    this._name = name; 
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name(){
    return this._name;
  }
  
  get level(){
    return this._level;
  }
  
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  
  set numberOfStudents(studentNum){
    if(typeof studentNum === "number"){
      this._numberOfStudents = studentNum;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  
  static pickSubstituteTeacher(substituteTeachers){
    const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomTeacher];
  }
  
}

class PrimarySchool extends School{
  constructor(name, level, numberOfStudents, pickupPolicy){
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    
  }
  
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class MiddleSchool extends School {
  constructor(name, level, numberOfStudents){
    
  }
}

class HighSchool extends School{
  constructor(name, level, numberOfStudents, sportsTeams){
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const school = new School("Traian High School", 9, 33)
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))

console.log(school)

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
console.log(lorraineHansbury)

const alSmith = new HighSchool('Al E. Smith', 'High', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

console.log(alSmith)





