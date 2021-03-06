const teamPlayers = {
  flamengo: [
    { name: "Luana Liberato", number: 1, position: "goleira" },
    { name: "Danielle Barboza", number: 2, position: "goleira" },
    { name: "Tania Maria", number: 4, position: "goleira" },
    { name: "Diany Aparecida", number: 5, position: "zagueira" },
    { name: "Roberta Emiliao", number: 6, position: "zagueira" },
    { name: "Gabrielly Salgado", number: 7, position: "goleira" },
    { name: "Beatriz Vaz", number: 8, position: "zagueira" },
    { name: "Larissa Pereira", number: 9, position: "lateral" },
    { name: "Maurine Dorneles", number: 10, position: "lateral" },
    { name: "Barbara Chagas ", number: 11, position: "lateral" },
    { name: "Karen de Freitas", number: 19, position: "zagueira" },
    { name: "Camila Leticia ", number: 3, position: "lateral" },
    { name: "Tatiane da Silva", number: 13, position: "atacante" },
    { name: "Rebeca Lopes ", number: 14, position: "atacante" },
    { name: "Juliana Ferreira ", number: 15, position: "atacante" },
    { name: "Patricia de Jesus", number: 16, position: "atacante" },
    { name: "Jane Tavares", number: 17, position: "atacante" },
    { name: "Marcella Souza", number: 18, position: "atacante" },
    { name: "Fernanda Palermo", number: 20, position: "lateral" },
    { name: "Ana Carla", number: 21, position: "lateral" },
    { name: "Renata Maria", number: 22, position: "goleira" },
    { name: "Rayane Cristine", number: 23, position: "lateral" },
    { name: "Bruna Zucolotto", number: 25, position: "lateral" },
  ],
};

const bestAthlete = {
  10: {
    name: "Ana Paula Cirilo dos Santos",
    score: "420 pts",
    team: "Bahia Futebol Clube",
  },
  9: {
    name: "Glória Cordeiro Queiroz",
    score: "82 pts",
    team: "Fluminense",
  },
  8: {
    name: "Alan Luiz Araújo",
    score: "71 pts",
    team: "Bahia Futebol Clube",
  },
  7: {
    name: "Breno Nunes",
    score: "112 pts",
    team: "Flamengo",
  },
  6: {
    name: "Gabriely Araújo",
    score: "1 pts",
    team: "Bahia Futebol Clube",
  },
  5: {
    name: "Frederico Bezerra",
    score: "315 pts",
    team: "Bahia Futebol Clube",
  },
  4: {
    name: "Adrielle Bittencourt",
    score: "79 pts",
    team: "Internacional",
  },
  3: {
    name: "Leila Marcia Queiroz Yamagushi",
    score: "970 pts",
    team: "Corinthians",
  },
  2: {
    name: "Marcos Lima",
    score: "999 pts",
    team: "Goiania",
  },
  1: {
    name: "Ana Murdock",
    score: "256 pts",
    team: "Bahia Futebol Clube",
  },
};
const partidas = [
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Osasco",
      numberGoals: 1,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Diadema",
      numberGoals: 0,
      playersAttributed: 12,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Pedra de Guaratiba",
      numberGoals: 7,
      playersAttributed: 20,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Leblon",
      numberGoals: 1,
      playersAttributed: 0,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Recife",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Marilia",
      numberGoals: 4,
      playersAttributed: 18,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Flamengo",
      numberGoals: 5,
      playersAttributed: 6,
      totalPlayers: 21,
      status: "away",
    },
  ],
  [
    {
      teamName: "Corinthians",
      numberGoals: 6,
      playersAttributed: 13,
      totalPlayers: 20,
      status: "home",
    },
    {
      teamName: "Palmeiras",
      numberGoals: 2,
      playersAttributed: 20,
      totalPlayers: 21,
      status: "away",
    },
  ],
];

const player = {
  10: {
    name: "Breno Natan Teodoro",
    score: "69 pts",
    team: "estartando devs",
  },
  9: {
    name: "Jonatas Altair Lima",
    score: "210 pts",
    team: "estartando devs",
  },
  8: {
    name: "Adriele Cristina Ribeiro",
    score: "14 pts",
    team: "estartando devs",
  },
  7: {
    name: "Adriele Cristina Ribeiro",
    score: "320 pts",
    team: "estartando devs",
  },
  6: {
    name: "Adriele Cristina Ribeiro",
    score: "69 pts",
    team: "estartando devs",
  },
  5: {
    name: "Alan Ribeiro de Souza",
    score: "114 pts",
    team: "estartando devs",
  },
  4: {
    name: "Alan Ribeiro de Souza",
    score: "87 pts",
    team: "estartando devs",
  },
  3: {
    name: "Alan Ribeiro de Souza",
    score: "69 pts",
    team: "estartando devs",
  },
  2: {
    name: "Breno Natan Teodoro",
    score: "112 pts",
    team: "estartando devs",
  },
  1: {
    name: "Breno Natan Teodoro",
    score: "81 pts",
    team: "estartando devs",
  },
};
const user = {
  name: "Ana Vitória Cunha",
};
const allMatches = {};
const rounds = {};
const allRounds = [];
const missingMatches = {};
const totalRounds = getCurrentRound().currentRound;
const howManyRounds = new Array(totalRounds).fill(0);
howManyRounds.forEach((item, index) => {
  allMatches[index + 1] = partidas.slice(
    0,
    1 + Math.round(Math.random() * (partidas.length - 1))
  );
  missingMatches[index + 1] = Math.round(
    Math.random() * allMatches[index + 1].length
  );
  rounds[index + 1] = Math.round(Math.random() * 100000);
  allRounds.push({
    roundNumber: index + 1,
    squadsTotal: Math.round(Math.random() * 10000),
  });
});
function getMatchesOfRound(round) {
  const matches = allMatches[round];
  return {
    round,
    bestAthlete: bestAthlete[round],
    bestSquad: player[round],
    totalSquads: rounds[round],
    lastTotalSquads: rounds[round - 1 < 0 ? round : round - 1],
    missingPlayersAttributed: missingMatches[round] * 22,
    totalPlayers: matches.length * 22 * 2,
    missingClubsAttributed: missingMatches[round],
    data: matches,
  };
}
const rankings = {
  10: [
    {
      place: 1,
      playerName: "Rogerinho",
      squadName: "1 real de big big",
      squadInitials: "RBB",
      athleteAttributed: 11,
      points: 72,
    },
    {
      place: 2,
      playerName: "Thiaguinho",
      squadName: "Timão",
      squadInitials: "TBT",
      athleteAttributed: 11,
      points: 46,
    },
    {
      place: 3,
      playerName: "Gabrielly",
      squadName: "Suprise",
      squadInitials: "SUS",
      athleteAttributed: 8,
      points: 38,
    },
    {
      place: 4,
      playerName: "Rogerinho",
      squadName: "1 real de big big",
      squadInitials: "RBB",
      athleteAttributed: 11,
      points: 36,
    },
    {
      place: 5,
      playerName: "Thiaguinho",
      squadName: "Timão",
      squadInitials: "TBT",
      athleteAttributed: 11,
      points: 30,
    },
    {
      place: 6,
      playerName: "Gabrielly",
      squadName: "Suprise",
      squadInitials: "SUS",
      athleteAttributed: 8,
      points: 30,
    },
    {
      place: 7,
      playerName: "Rogerinho",
      squadName: "1 real de big big",
      squadInitials: "RBB",
      athleteAttributed: 11,
      points: 28,
    },
    {
      place: 8,
      playerName: "Thiaguinho",
      squadName: "Timão",
      squadInitials: "TBT",
      athleteAttributed: 11,
      points: 26,
    },
    {
      place: 9,
      playerName: "Gabrielly",
      squadName: "Suprise",
      squadInitials: "SUS",
      athleteAttributed: 8,
      points: 25,
    },
    {
      place: 10,
      playerName: "Rogerinho",
      squadName: "1 real de big big",
      squadInitials: "RBB",
      athleteAttributed: 11,
      points: 24,
    },
    {
      place: 11,
      playerName: "Thiaguinho",
      squadName: "Timão",
      squadInitials: "TBT",
      athleteAttributed: 11,
      points: 22,
    },
    {
      place: 12,
      playerName: "Gabrielly",
      squadName: "Suprise",
      squadInitials: "SUS",
      athleteAttributed: 8,
      points: 21,
    },
    {
      place: 13,
      playerName: "Rogerinho",
      squadName: "1 real de big big",
      squadInitials: "RBB",
      athleteAttributed: 11,
      points: 20,
    },
    {
      place: 14,
      playerName: "Thiaguinho",
      squadName: "Timão",
      squadInitials: "TBT",
      athleteAttributed: 11,
      points: 15,
    },
    {
      place: 15,
      playerName: "Gabrielly",
      squadName: "Suprise",
      squadInitials: "SUS",
      athleteAttributed: 8,
      points: 10,
    },
  ],
};
function getCurrentRound() {
  return { currentRound: 10 };
}
function getAllRoundsInfo() {
  return allRounds;
}
function getPlayersOfTeam(team) {
  return teamPlayers[team];
}
function getRanking(round) {
  const sortedList = rankings[round];

  return {
    data: sortedList,
  };
}
export {
  getRanking,
  getMatchesOfRound,
  getCurrentRound,
  getAllRoundsInfo,
  getPlayersOfTeam,
  user,
};
