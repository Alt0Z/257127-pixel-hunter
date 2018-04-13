import {isUndefined} from "util";

const getCorrectAnswers = (answers) => {
  let correct = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].correct) {
      correct++;
    }
  }

  return correct;
};

const getAmountOfFastAnswers = (answers) => {
  let fast = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].time <= 10) {
      fast++;
    }
  }

  return fast;
};

const getAmountOfSlowAnswers = (answers) => {
  let slow = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].time >= 20) {
      slow++;
    }
  }

  return slow;
};

const countScores = (answers, lives) => {
  const CORRECT_SCORES = 100;
  const FAST_SCORES = 50;
  const SLOW_SCORES = 50;
  const LIVES_SCORES = 50;

  if (answers.length < 10 || lives < 1) {
    return -1;
  }

  const correct = getCorrectAnswers(answers);
  const fast = getAmountOfFastAnswers(answers);
  const slow = getAmountOfSlowAnswers(answers);

  return ((correct * CORRECT_SCORES + fast * FAST_SCORES + lives * LIVES_SCORES) - slow * SLOW_SCORES);
};

const startTimer = (time) => {
  let timerAmount = time;
  if (timerAmount < 0 || timerAmount === isUndefined) {
    throw new Error(`Time amount isn't correct, please check`);
  }

  const tick = () => {
    timerAmount = timerAmount > 0 ? timerAmount - 1 : 0;
  };

  const isTimeOut = () => {
    return timerAmount === 0;
  };

  return {
    tick,
    isTimeOut
  };
};

export default countScores;
export {startTimer};
