function getUSer(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ email: email, password: password });
    }, 2000);
  });
}

function userEmployer(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        company: "Africa Safaris",
      });
    }, 1000);
  });
}
// getUSer("jack@user.com", 123).then((user) => {
//   console.log(user);
// });

async function displayUser() {
  const loggedUser = await getUSer("jack@user.com", 123);
  const employer = await userEmployer(loggedUser.email);
  console.log(loggedUser, employer);
}

displayUser();
