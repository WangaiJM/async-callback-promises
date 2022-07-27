// function ajax() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./data.json", true);

//   xhr.onload = function () {
//     if ((xhr.status = 200 && xhr.status != 404)) {
//       const data = JSON.parse(xhr.response);

//       data.forEach((element) => {
//         const title = document.createElement("h2");
//         const body = document.querySelector("body");
//         body.append(title);
//         title.textContent = element.name;
//       });
//     }
//   };

//   xhr.send();
// }

// ajax();

function getUser(email, password, callback) {
  console.log("Data loading...");
  setTimeout(() => {
    callback({ email: email, password: password });
  }, 3000);
}

function getUserVideo(email, callback) {
  console.log("Videos loading...");
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 2000);
}

function title(video, callback) {
  console.log("title loading...");
  setTimeout(() => {
    callback({ video: video });
  }, 1000);
}

const userData = getUser("jack@gmail.com", 1234, (userData) => {
  console.log(userData);
  getUserVideo(userData, (videos) => {
    console.log(videos);
    title("Movies", (video) => {
      console.log(video);
    });
  });
});
