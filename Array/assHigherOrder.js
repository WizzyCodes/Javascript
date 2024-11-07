const company = [
    {
        name: "Tech Innovators Inc.",
        location: "San Francisco",
        departments: [
            {
                name: "Engineering",
                manager: "Alice Johnson",
                staff: [
                    {name: "Bob Smith", position: "Developer"},
                    {name: "Emily Davis", position: "Junior developer"},
                ],
            },
            {
                name: "Marketing",
                manager: "Michael Brown",
                staff: [
                    { name: "Sara Lee", position: "Specialist"},
                    { name: "Tom Wilson", position: "Strategist"},
                ],
            },
        ],
    },
    {
        name: "Creative Solutions LLC",
        location: "New York",
        departments: [
            {
                name: "Design",
                manager: "Karen White",
                staff: [
                    { name: "Leo Carter", position: "Designer"},
                    { name: "Nina Patel", position: "UI/UX Designer"},
                ],
            },
            {
                name: "Sales",
                manager: "James Green",
                staff: [
                    { name: "Olivia Turner", position: "Executive"},
                    { name: "Ethan Harris", position: "Manager"},
                ],
            },
        ],
    },
];
//


// console.log(company);

//1
const companyDuplicate = [...company];
console.log("1. ", companyDuplicate);
//2
const managers = companyDuplicate.map((company) =>
  company.departments.map((department) => department.manager)
);

console.log("2. ", managers.join(","));

//3
const totalStaff = companyDuplicate.reduce((total, company) => {
  return (
    total + company.departments.reduce((deptTotal, department) => {
      return deptTotal + department.staff.length;
    }, 0)
  );
}, 0);

console.log("3. ", totalStaff);

//4
const departmentWithStrategist = companyDuplicate.find((company) =>
  company.departments.find((department) =>
    department.staff.find(
      (staffMember) => staffMember.position === "Strategist"
    )
  )
);

const result = departmentWithStrategist.departments.find((department) =>
  department.staff.some((staffMember) => staffMember.position === "Strategist")
);

console.log("4. ", result);

//5
const creativeSolutions = companyDuplicate.find(
  (company) => company.name === "Creative Solutions LLC"
);

const allManagersContainGreen = creativeSolutions.departments.every(
  (department) => department.manager.includes("Green")
);
console.log("5. ", allManagersContainGreen);