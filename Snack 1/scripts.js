const bikes = [
  {
    name: "Mountain Bike",
    weight: 14,
  },

  {
    name: "BMX",
    weight: 9,
  },

  {
    name: "Downhill",
    weight: 16,
  },

  {
    name: "Tandem",
    weight: 20,
  },

  {
    name: "Triciclo",
    weight: 2,
  }
]

function getLightest() {
  let lightestBike = bikes[0];

  for (let i = 0; i < bikes.length; i++) {

    if (lightestBike.weight > bikes[i].weight) {
      lightestBike = bikes[i];
    }

  }

  const { name, weight } = lightestBike;

  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = `Nome bicicletta: ${name} <br> Peso Bicicletta: ${weight}`;

}

getLightest();




