var row = null;

const dataKontak = document.querySelector("#dataKontak");
const formKontak = document.querySelector("#formKontak");
const submitButton = document.getElementById("submitButton");
const namaKontak = document.getElementById("namaKontak");
const nomorKontak = document.getElementById("nomorKontak");
const alamatKontak = document.getElementById("alamatKontak");
const emailKontak = document.getElementById("emailKontak");

function clearValues() {
  namaKontak.value = "";
  nomorKontak.value = "";
  alamatKontak.value = "";
  emailKontak.value = "";
}

//delete & edit
dataKontak.addEventListener("click", (e) => {
  target = e.target;
  // console.log(target);
  if (target.classList.contains("delete")) {
    target.parentNode.parentNode.remove();
    console.log(target.parentNode.parentNode);
  }
  if (target.classList.contains("edit")) {
    row = target.parentNode.parentNode;

    namaKontak.value = row.children[0].textContent;
    nomorKontak.value = row.children[1].textContent;
    alamatKontak.value = row.children[2].textContent;
    emailKontak.value = row.children[3].textContent;
  }
});

//submit
formKontak.addEventListener("submit", (e) => {
  e.preventDefault();
  target = e.target;

  if (
    (namaKontak.value == "") |
    (nomorKontak.value == "") |
    (alamatKontak.value == "") |
    (emailKontak.value == "")
  ) {
    alert("Mohon diisi terlebih dahulu :D");
  } else {
    if (row == null) {
      const newData = document.createElement("div");
      newData.classList.add("card");

      newData.innerHTML = `
            <li>${namaKontak.value}</li>
            <li>${nomorKontak.value}</li>
            <li>${alamatKontak.value}</li>
            <li>${emailKontak.value}</li>
            <div class="buttons">
            <li></li>
            <button class="btn-submit edit">Edit</button>
            <button class="btn-submit delete">Delete</button>
            <li></li>
            </div>
            `;

      dataKontak.appendChild(newData);
      row = null;
      clearValues();
    } else {
      if (
        (row.children[0].innerHTML != namaKontak.value) |
        (row.children[1].innerHTML != nomorKontak.value) |
        (row.children[2].innerHTML != alamatKontak.value) |
        (row.children[3].innerHTML != emailKontak.value)
      ) {
        row.children[4].children[0].innerHTML = "(edited)";
      }
      row.children[0].innerHTML = namaKontak.value;
      row.children[1].innerHTML = nomorKontak.value;
      row.children[2].innerHTML = alamatKontak.value;
      row.children[3].innerHTML = emailKontak.value;

      clearValues();
      row = null;
    }
  }
});

function notification(message) {}

