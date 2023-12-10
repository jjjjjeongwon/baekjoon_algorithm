// function solution(cards) {
//   const cardSet = new Set();

//   for (const card of cards) {
//     if (cardSet.has(card)) {
//       cardSet.delete(card);
//     } else {
//       cardSet.add(card);
//     }
//   }

//   console.log(cardSet);
//   console.log(cardSet.values());
//   console.log(cardSet.values().next());
//   console.log(cardSet.values().next().value);

//   return cardSet.values().next().value;
// }

// // 예시 사용법
// const cardsArray = [1, 3, 2, 2, 5, 5, 1];
// const lostCard = solution(cardsArray);
// console.log(lostCard); // 결과 출력

// function solution(year) {
//   let nextBeautifulYear = year + 1;

//   while (
//     new Set(nextBeautifulYear.toString().split("")).size !==
//     nextBeautifulYear.toString().length
//   ) {
//     nextBeautifulYear++;
//   }

//   return nextBeautifulYear;
// }

// // 예시 사용법
// const givenYear = 2023;
// const nextBeautifulYear = solution(givenYear);
// console.log(nextBeautifulYear); // 결과 출력

// console.log(givenYear.toString().split(""));

function solution(K, user_scores) {
  let rankings = [];
  let pageChanges = K;
  user_scores.forEach((userScore, i) => {
    const [username, score] = userScore.split(" ");
    const user = { username, score: parseInt(score) };
    const existingUserIndex = rankings.findIndex(
      (u) => u.username === username
    );

    if (existingUserIndex === -1) {
      rankings.push(user);
    } else if (rankings[existingUserIndex].score < user.score) {
      rankings[existingUserIndex].score = user.score;
    }
    rankings.sort((a, b) => b.score - a.score);

    rankings = rankings.slice(0, K);

    if (i >= K) {
      if (
        !rankings.some(
          (item) => item.username === user.username && item.score >= user.score
        )
      ) {
        pageChanges++;
      }
    }
  });

  return pageChanges;
}

// function solution(K, user_scores) {
//   let rankings = [];
//   let pageChanges = K;

//   for (let i = 0; i < user_scores.length; i++) {
//     const [username, score] = user_scores[i].split(" ");
//     const user = { username, score: parseInt(score) };

//     const existingUserIndex = rankings.findIndex(
//       (u) => u.username === username
//     );

//     if (existingUserIndex === -1) {
//       rankings.push(user);
//       rankings.sort((a, b) => b.score - a.score);
//     } else {
//       if (rankings[existingUserIndex].score < user.score) {
//         rankings[existingUserIndex].score = user.score;
//       }
//       rankings.sort((a, b) => b.score - a.score);
//     }

//     rankings = rankings.slice(0, K);

//     if (i >= K) {
//       if (
//         rankings.some(
//           (item) => item.username === user.username && item.score >= user.score
//         )
//       ) {
//       } else {
//         pageChanges++;
//       }
//     }
//   }

//   return pageChanges;
// }

// 테스트
// 예제 테스트
// const K = 3;
// const user_scores = [
//   "alex111 100",
//   "cheries2 200",
//   "coco 150",
//   "luna 100",
//   "alex111 120",
//   "coco 300",
//   "cheries2 110",
// ];ㅠ
// console.log(solution(K, user_scores)); // 출력 결과: 4

// // 예제 사용
const K = 2;
const user_scores = ["cheries2 200", "alex111 100", "coco 150", "puyo 120"];
const result = solution(K, user_scores);
console.log(result); // 출력: 3
