const teams = [
  {
    name: "Inter",
    score: 0,
    fouls: 0
  },

  {
    name: "Milan",
    score: 0,
    fouls: 0
  },

  {
    name: "Juventus",
    score: 0,
    fouls: 0
  },

  {
    name: "Real Madrid",
    score: 0,
    fouls: 0
  },

  {
    name: "Barcellona",
    score: 0,
    fouls: 0
  },

]

function randomGenerator() {
  const num = Math.floor(Math.random() * 5 + 1)
  return num
}

function randomScores() {
  for (let i = 0; i < teams.length; i++) {
    teams[i].score = randomGenerator()
    teams[i].fouls = randomGenerator()
  }
}

function generateNewArray() {
  const newTeams = [];
  for (let i = 0; i < teams.length; i++) {
    const { name, fouls } = teams[i]
    const newObj = { "name": name, "fouls": fouls }
    newTeams.push(newObj)
  }

  return newTeams;
}

randomScores()

const newTeams = generateNewArray()

console.log(newTeams);