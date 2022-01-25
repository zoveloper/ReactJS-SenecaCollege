const studnentInfo = new Object();

studnentInfo.age = 23;
studnentInfo.name = "Jun";
studnentInfo.email = "jun@seneca.ca";

console.log(studnentInfo);

studnentInfo.jun = () => {
  alert(
    "your name is " +
      studnentInfo.name +
      "your age is " +
      studnentInfo.age +
      "your email address is " +
      studnentInfo.email
  );
};

studnentInfo.jun();
