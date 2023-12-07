export const getWinner = (playersData) => {

  const scores = playersData.reduce((acc, curr) => {
    if (curr.success) {
      if (acc[curr.playerName]) {
        acc[curr.playerName] += 1;
      } else {
        acc[curr.playerName] = 1;
      }
    }
    return acc;
  }, {});

  let maxScore = 0;
  let winner = null;

  for (const player in scores) {
    if (scores[player] > maxScore) {
      maxScore = scores[player];
      winner = player;
    }
  }

  return {
    playerName: winner,
    score: maxScore,
  };
};
