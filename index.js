const loadPhone = () => {
  const inputField = document.getElementById("inputField");
  const inputText = inputField.value;
  inputField.value = "";
  if (inputText == "") {
    toggleNoResult("block");
  } else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayPhones(data.data));
  }
};

// error handle function
const toggleNoResult = (data) => {
  document.getElementById("no-found").style.display = `${data}`;
};

// display all phone
const displayPhones = (phones) => {
  if (phones.length === 0) {
    toggleNoResult("block");
  }
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card p-2">
        <img src="${phone.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <a href="" class="text-white text-decoration-none py-2 px-3 rounded bg-primary">Details</a>
        </div>
      </div>`;
    searchResult.appendChild(div);
  });
};
