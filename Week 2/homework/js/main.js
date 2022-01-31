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
const sports2 = (datas) => {
  console.log(datas[0]);
  const sorting = datas.map((data) => {
    return data.name;
  });
  console.log(sorting);
};

console.log(myFavoritSports);
sports(myFavoritSports);
sports2(myFavoritSports);
