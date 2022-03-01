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
          <button onclick = "moreDetails('${phone.slug}')" class="text-white text-decoration-none py-1 px-3 rounded bg-primary">Details</button>
        </div>
      </div>`;
    searchResult.appendChild(div);
  });
};
// display phone
const moreDetails = (phoneSlug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => phoneDetails(data));
};
const phoneDetails = (phone) => {
  console.log(phone);
  const phoneDetails = document.getElementById("phoneDetails");
  phoneDetails.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `        
  <div class="card mb-3 ">
  <div class="row g-5 p-5 pb-3">
    <div class="col-md-4">
      <img src="${phone.data.image}" class="card-img-top mt-5 rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <table class="table table-hover table-bordered">
      <tbody>
        <tr>
          <th style="width: 200px" scope="">name</th>
          <td>${phone.data.name}</td>
        </tr>
        <tr>
          <th scope="row">releaseDate</th>
          <td>${phone.data.releaseDate ? phone.data.releaseDate : "no found releaseDate"}</td>
        </tr>
        <tr>
          <th scope="row">brand</th>
          <td>${phone.data.brand ? phone.data.brand : "not available"}</td>
        </tr>
        <tr>
          <th scope="row">chipSet</th>
          <td>${
            phone.data.mainFeatures.chipSet ? phone.data.mainFeatures.chipSet : "not available"
          }</td>
        </tr>
        <tr>
          <th scope="row">displaySize</th>
          <td>${
            phone.data.mainFeatures.displaySize
              ? phone.data.mainFeatures.displaySize
              : "not available"
          }</td>
        </tr>
        <tr>
          <th scope="row">memory</th>
          <td>${
            phone.data.mainFeatures.memory ? phone.data.mainFeatures.memory : "not available"
          }</td>
        </tr>
        <tr>
          <th scope="row">sensors</th>
          <td>${
            phone.data.mainFeatures.sensors
              ? phone.data.mainFeatures.sensors.join(", ")
              : "sensors info is Not Available"
          }</td>
        </tr>
        <tr>
          <th scope="row">Bluetooth</th>
          <td>${
            phone.data.others ? phone.data.others.Bluetooth : "Bluetooth info is Not Available"
          }</td>
        </tr>
        <tr>
          <th scope="row">GPS</th>
          <td>${phone.data.others ? phone.data.others.GPS : "GPS info is Not Available"}</td>
        </tr>
        <tr>
          <th scope="row">NFC</th>
          <td>${phone.data.others ? phone.data.others.NFC : "NFC info is Not Available"}</td>
        </tr>
        <tr>
          <th scope="row">Radio</th>
          <td>${phone.data.others ? phone.data.others.Radio : "Radio info is Not Available"}</td>
        </tr>
        <tr>
          <th scope="row">USB</th>
          <td>${
            phone.data.others ? phone.data.others.Bluetooth : "Bluetooth info is Not Available"
          }</td>
        </tr>
        <tr>
          <th scope="row">WLAN</th>
          <td>${phone.data.others ? phone.data.others.USB : "USB info is Not Available"}</td>
        </tr>
        <tr>
          <th scope="row">status</th>
          <td>${phone.status ? phone.status : "not available"}</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  </div>
</div>`;
  phoneDetails.appendChild(div);
};

const othersKeys = (other) => {
  console.log(other.others);
};
