const myFavoritSports = [
  { name: "Martin", sports: "soccer", email: "mc@gmail.com" },
  { name: "Bruce", sports: "tennis", email: "ba@gmail.com" },
  { name: "Mark", sports: "swim", email: "ma@gmail.com" },
];

const sports = () => {
  for (i = 0; i < myFavoritSports.length; i++) {
    console.log(i);
    console.log(myFavoritSports.length);
    console.log("My favorit sports is " + myFavoritSports[i]);
  }
};
const sports2 = (datas, studentName) => {
  console.log(datas);
  const sorting = datas.map((result1) => {
    console.log(result1);
    return result1.sports;
  });
  const finding = datas.find((findResult) => {
    console.log(findResult);
    return findResult.name == studentName;
  });
  console.log(sorting);
  console.log(finding);
};

console.log(myFavoritSports);
sports(myFavoritSports);
sports2(myFavoritSports, "Bruce");
