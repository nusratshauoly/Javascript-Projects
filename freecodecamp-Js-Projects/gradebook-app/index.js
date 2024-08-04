// -------- problem : find average number ----------
/*
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores.

*** Example Code
average = sum of all scores / total number of scores


A couple of function calls have been provided for you so you can test out your code.

** Tips

You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores.

*/

function getAverage(scores) {
  let total =  0; 
  for(let i = 0; i < scores.length; i++){
      total += scores[i];
  }
  let average = total / scores.length;
  return average;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


// ------------- print grade ----------
/*
Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
Tips

Remember that you learned about conditional statements(if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).

*/

function getGrade(score) {
    if(score === 100){
      return 'A++';
    }
    else if (score >= 90 && score <= 99) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score === 78) {
        return 'C';
    } else if (score >= 70 && score <= 77) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));




// ----------------- print grade (function call inside other function) ----------
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== 'F';
  
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));



// ----------------- grading system with average message--------------

/*
Now that the teacher has all of the information they need, they want to be able to message the student with the results.

Complete the studentMsg function with totalScores and studentScore for parameters. The function should return a string representing a message to the student.

If the student passed the course, the string should follow this format:

Example Code
If the student failed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
Replace average-goes-here with the average of the total scores. Replace grade-goes-here with the student's grade.

Tips

Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message.

*/

function getGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score === 78) {
        return 'C';
    } else if (score >= 70 && score <= 77) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

function hasPassingGrade(score) {
    let grade = getGrade(score);
    return grade !== 'F';
}

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let message = "Class average: " + average + ". Your grade: " + grade + ". ";

    if (hasPassingGrade(studentScore)) {
        message += "You passed the course.";
    } else {
        message += "You failed the course.";
    }

    return message;
}

// Test the function
let classScores = [90, 85, 78, 92, 88, 76, 95, 89];
let studentScore1 = 87;
let studentScore2 = 53;

console.log(studentMsg(classScores, studentScore1)); // Expected: Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
console.log(studentMsg(classScores, studentScore2)); // Expected: Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
