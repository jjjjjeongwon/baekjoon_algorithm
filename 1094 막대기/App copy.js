function solution(K, user_scores) {
  let rankings = [];
  let pageChanges = 0;
  user_scores.forEach((userScore) => {
    const [username, score] = userScore.split(" ");
    const user = { username, score: parseInt(score) };
    const existingUserIndex = rankings.findIndex(
      (u) => u.username === username
    );

    if (existingUserIndex === -1) {
      rankings.push(user);
      rankings.sort((a, b) => b.score - a.score);
    } else {
      if (rankings[existingUserIndex].score < user.score) {
        rankings[existingUserIndex].score = user.score;
      }
      rankings.sort((a, b) => b.score - a.score);
    }

    rankings = rankings.slice(0, K);

    if (rankings.length < K) {
      pageChanges++;
    } else {
      if (
        rankings.some(
          (item) => item.username === user.username && item.score === user.score
        )
      ) {
      } else {
        pageChanges++;
      }
    }
  });

  return pageChanges;
}
