var age = 16;

var biodata = document.getElementById("biodata");

function generate() {
  let generasi;
  if (age >= 20) {
    generasi = "Mature";
  } else if (age >= 15) {
    generasi = "Young";
  } else {
    generasi = "mantap";
  }
  return (biodata.innerHTML = generasi);
}

generate();
