const schoolScore = [
  { name: "Chinedu Okafor", subject: "Mathematics", score: 85 },
  { name: "Amina Abubakar", subject: "English", score: 92 },
  { name: "Emeka Nwosu", subject: "Science", score: 78 },
  { name: "Folake Adeyemi", subject: "History", score: 88 },
  { name: "Ifeanyi Eze", subject: "Mathematics", score: 95 },
];
console.clear();

//1
console.log(
  schoolScore.find(
    (student) => student.name === "Chinedu Okafor" && student.score > 80
  )
    ? `${schoolScore[0].name} score is A`
    : `No student with this name and score was found`
);

//2
console.log(
  schoolScore.find(
    (student) => student.subject === "English" && student.score > 90
  )
    ? `${
        schoolScore.find(
          (student) => student.subject === "English" && student.score > 90
        ).name
      }'s score is A`
    : `No student studying English with this score was found`
);

//3
console.log(
  schoolScore.find((student) => student.name === "Emeka Nwosu")
    ? `${
        schoolScore.find((student) => student.name === "Emeka Nwosu").name
      }'s score is A`
    : schoolScore.find((student) => student.score > 75)
    ? `${
        schoolScore.find((student) => student.score > 75).name
      }'s score is above 75`
    : `No relevant student was found`
);

//4
console.log(
  schoolScore.find(
    (student) => student.subject === "History" && student.score > 85
  )
    ? `${
        schoolScore.find(
          (student) => student.subject === "History" && student.score > 85
        ).name
      }'s score is A`
    : schoolScore.find((student) => student.score > 90)
    ? `${
        schoolScore.find((student) => student.score > 90).name
      }'s score is above 90`
    : `No relevant student was found`
);

//5
console.log(
  schoolScore.find((student) => student.score === 95)
    ? `${
        schoolScore.find((student) => student.score === 95).name
      }'s score is exactly 95`
    : schoolScore.find((student) => student.name === "Ifeanyi Eze")
    ? `${
        schoolScore.find((student) => student.name === "Ifeanyi Eze").name
      }'s score is A`
    : `No relevant student was found`
);
