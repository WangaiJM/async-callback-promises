function ajax() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./data.json", true);

  xhr.onload = function () {
    if ((xhr.status = 200 && xhr.status != 404)) {
      const data = JSON.parse(xhr.response);

      data.forEach((element) => {
        const title = document.createElement("h2");
        const body = document.querySelector("body");
        body.append(title);
        title.textContent = element.name;
      });
    }
  };

  xhr.send();
}

ajax();