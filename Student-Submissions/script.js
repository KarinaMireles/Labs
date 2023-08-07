const submissions = [
  { name: "Jane", score: 95, passed: true },
  { name: "Joe", score: 77, passed: true },
  { name: "Jack", score: 59, passed: false },
  { name: "Jill", score: 88, passed: true },
];

const addSubmissionfunction = (array, newName, newScore) => {
  const newPassed = newScore >= 60 ? true : false;
  array.push({ name: newName, score: newScore, passed: newPassed });
};

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);

const deleteSubmissionByNamefunction = (array, name) => {
  const index = array.findIndex((submission) => submission.name === name);
  if (index !== -1) {
    array.splice(index, 1);
  }
};

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60 ? true : false;
};

const findSubmissionByName = (array, name) =>
  array.find((submission) => submission.name === name);

const findLowestScore = (array) => {
  const lowestSubmission = array[0];
  array.forEach((submission) => {
    if (submission.score < lowestSubmission.score) {
      lowestSubmission = submission;
    }
  });
  return lowestSubmission;
};

const findAverageScore = (array) => {
  const totalScore = 0;
  array.forEach((submission) => {
    totalScore += submission.score;
  });
  return totalScore / array.length;
};

const filterPassing = (array) =>
  array.filter((submission) => submission.passed);

const filter90AndAbove = (array) =>
  array.filter((submission) => submission.score >= 90);

addSubmission(submissions, "John", 72);
console.log("Added John: ", submissions);

deleteSubmissionByIndex(submissions, 1);
console.log("Deleted Joe: ", submissions);

editSubmission(submissions, 1, 85);
console.log("Edited Jack: ", submissions);

const submissionJill = findSubmissionByName(submissions, "Jill");
console.log("Found Jill: ", submissionJill);

const lowestScoreSubmission = findLowestScore(submissions);
console.log("Lowest Score: ", lowestScoreSubmission);

const averageScore = findAverageScore(submissions);
console.log("Average Score: ", averageScore);

const passingSubmissions = filterPassing(submissions);
console.log("Passing Submission: ", passingSubmissions);

const above90Submissions = filter90AndAbove(submissions);
console.log("Above 90 Submissions; ", above90Submissions);
