let person = {
    name: "Wisdom",
    myAge: 25,
    Complexion: "fair",
    isMale: true,
    isAlive: true,
    isDAting: true,
    height: "200cm",
};
//Dot Notation
console.log(
    person.myAge,
    person.name,
    person.Complexion,
    person.isMale,
  person.isAlive,
    person.isDAting,
    person.height,
);

const school = {
  schoolName: "Codelab",
  totalClasses: 30,
  teachersLanguage: "English",
  majorSubject: "Mathematics",
  $totalStudents: 400,
  revenue: "₦4,000,000",
  _mamaPutFood: "jollof-rice",
  haveGreatTutors: true,
};

//Bracket Notation
console.log(school["schoolName"]);
console.log(school["totalClasses"]);
console.log(school["teachersLanguage"]);
console.log(school["majorSubject"]);
console.log(school["$totalStudents"]);
console.log(school["revenue"]);
console.log(school["_mamaPutFood"]);
console.log(school["haveGreatTutors"]);

//Nested Objects
let compound = {
  landlord: "Baba Ibeji",
  landlordWife: "Mama Ibeji",
  children: 15,
  
  tenantOne: {
    name: "Oga longisnus",
    wifeName: "mama longinus",
    tenantOneChidren: 8,
  },

  tenantTwo: {
    name: "Oga pascal",
    wifeName: "mama pascal",
    t2Children: 4,
    firstChild: {
      babymamas: 15,
    },
  },
};

console.log(
  compound.landlord,
  compound.landlordWife,
  compound.children,
  compound.tenantOne.name,
  compound.tenantTwo.t2Children,
  compound.tenantTwo.firstChild.babymamas,
);