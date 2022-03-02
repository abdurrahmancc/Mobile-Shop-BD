// load Phones
const loadPhone = () => {
  const inputField = document.getElementById("inputField");
  const phoneDetails = document.getElementById("phoneDetails");
  phoneDetails.textContent = "";
  const inputText = inputField.value;
  if (inputText == "") {
    againResult("block");
    toggleNoResult("none");
  } else {
    inputField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayPhones(data.data.slice(0, 20)));
    spinner("block");
    toggleSpinner("none");
    toggleNoResult("none");
  }
};

// error handle function start
const toggleNoResult = (data) => {
  document.getElementById("no-found").style.display = data;
};
const againResult = (data) => {
  document.getElementById("re-submit").style.display = data;
};
const spinner = (load) => {
  document.getElementById("spinner").style.display = load;
};
const toggleSpinner = (load) => {
  document.getElementById("toggle").style.display = load;
};
// error handle function end

// display all product
const displayPhones = (phones) => {
  if (phones.length == 0) {
    spinner("none");
    toggleNoResult("block");
    againResult("none");
  }
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  phones?.forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card p-2 rounded-3">
        <img src="${phone.image}" class="card-img-top" alt="..." />
        <div class="card-body ">
          <h5 class="card-title text-center">${phone.phone_name}</h5>
          <p class="card-text text-center">${phone.brand}</p>
          <div class="d-flex justify-content-center">
            <button onclick = "moreDetails('${phone.slug}')" class="text-white text-decoration-none border-0 py-2 px-3 rounded bg-primary">View details</button>
          </div>
        </div>
      </div>`;
    searchResult.appendChild(div);
    spinner("none");
    toggleSpinner("block");
    toggleNoResult("none");
    againResult("none");
  });
};

// display load a phone
const moreDetails = (phoneSlug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => phoneDetails(data));
};

// display phone Details
const phoneDetails = (phone) => {
  const phoneDetails = document.getElementById("phoneDetails");
  phoneDetails.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `        
  <div class="card mb-3">
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
