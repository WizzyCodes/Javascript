const people = [
  { name: "Alice", hobbies: ["Reading", "Swimming", "Hiking"] },
  { name: "Bob", hobbies: ["Cycling", "Movies", "Gaming"] },
  { name: "Charlie", hobbies: ["Writing", "Chess", "Dancing"] },
];

// Question: You have an array of people objects, each containing an array of hobbies. Write a function that returns a random person along with one of their hobbies.

const products = {
  electronics: ["Laptop", "Phone", "Tablet"],
  clothing: ["Shirt", "Pants", "Jacket"],
  groceries: ["Milk", "Eggs", "Bread"],
};

// Question: You have an object where each key is a product category, and the value is an array of product names. Write a function that randomly selects one product from a random category.

const employees = [
  { name: "John", tasks: ["Meeting", "Coding", "Review"] },
  { name: "Sarah", tasks: ["Design", "Testing", "Report"] },
  { name: "David", tasks: ["Analysis", "Documentation", "Planning"] },
];

// Question: You have an array of employees, and each employee has an array of tasks assigned to them. Write a function that randomly selects an employee and one of their tasks.

const foodCategories = [
  { category: "Fruit", items: ["Apple", "Banana", "Grapes"] },
  { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  { category: "Dairy", items: ["Milk", "Cheese", "Yogurt"] },
];

// Question: You have an array of objects, where each object represents a category of food items. Write a function that randomly selects a food category and a random food item within that category.

const classes = {
  math: ["Alice", "Bob", "Charlie"],
  science: ["David", "Eve", "Frank"],
  history: ["Grace", "Hannah", "Isaac"],
};

// Question: You have an object where each key is a class and the value is an array of students in that class. Write a function that randomly picks a class and a random student from that class.

// 1. Random Person and Hobby
function getRandomPersonAndHobby(people) {
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const randomHobby =
    randomPerson.hobbies[
      Math.floor(Math.random() * randomPerson.hobbies.length)
    ];
  return { name: randomPerson.name, hobby: randomHobby };
}
console.log(getRandomPersonAndHobby(people));

// 2. Random Product from Random Category
function getRandomProduct(products) {
  const randomCategory =
    Object.keys(products)[
      Math.floor(Math.random() * Object.keys(products).length)
    ];
  const randomProduct =
    products[randomCategory][
      Math.floor(Math.random() * products[randomCategory].length)
    ];
  return { category: randomCategory, product: randomProduct };
}
console.log(getRandomProduct(products));

// 3. Random Employee and Task
function getRandomEmployeeAndTask(employees) {
  const randomEmployee =
    employees[Math.floor(Math.random() * employees.length)];
  const randomTask =
    randomEmployee.tasks[
      Math.floor(Math.random() * randomEmployee.tasks.length)
    ];
  return { name: randomEmployee.name, task: randomTask };
}
console.log(getRandomEmployeeAndTask(employees));

// 4. Random Food Category and Item
function getRandomFoodCategoryAndItem(foodCategories) {
  const randomCategory =
    foodCategories[Math.floor(Math.random() * foodCategories.length)];
  const randomItem =
    randomCategory.items[
      Math.floor(Math.random() * randomCategory.items.length)
    ];
  return { category: randomCategory.category, item: randomItem };
}
console.log(getRandomFoodCategoryAndItem(foodCategories));

// 5. Random Class and Student
function getRandomClassAndStudent(classes) {
  const randomClass =
    Object.keys(classes)[
      Math.floor(Math.random() * Object.keys(classes).length)
    ];
  const randomStudent =
    classes[randomClass][
      Math.floor(Math.random() * classes[randomClass].length)
    ];
  return { class: randomClass, student: randomStudent };
}
console.log(getRandomClassAndStudent(classes));
