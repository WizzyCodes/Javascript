//Create the school object 
let school = {
    name: "Helifest high school",
    address: "21 Oduduwa Street",
    yearEstablished: 2007,

    principal: {
        name: "mr uche sinclair",
        office: {
            roomNumber: 4,
            building: {
                name: "Main Building",
                facilities: {
                    library: {
                        name: "School Library",
                        hours: {
                            opening: "8:00 AM",
                            closing: "3:00 PM",
                        },
                    },
                },
            },
        },
        
    },
};

//Print the entire school object
console.log(school);
//Access and print properties using bracket and dot notation
console.log(school["name"]);
//C
console.log(school["address"]);
//D
console.log(school.yearEstablished);
//E
console.log(school.principal.name);
//F
console.log(school.principal.office.roomNumber);
//G
console.log(school.principal.office.building.name);
//H
console.log(school.principal.office.building.facilities.library.name);
//I
console.log(school.principal.office.building.facilities.library.hours.opening);