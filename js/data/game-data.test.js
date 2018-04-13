import {assert} from 'chai';
import {startTimer} from './../game-data.js';
import countScores from './../game-data.js';

describe(`If amount of answers less than 10`, () => {
  describe(`#countScores`, () => {
    it(`should test that amount of answers less than 10`, () => {
      const answers = [
        {
          correct: true,
          time: 10
        }
      ];

      assert.equal(-1, countScores(answers, 1));
    });
  });
});

describe(`If all answers were regular`, () => {
  it(`should return 1150 scores. All answers were not slow and not fast`, () => {
    const answers = [
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 17
      },
      {
        correct: true,
        time: 15
      },
      {
        correct: true,
        time: 13
      },
      {
        correct: true,
        time: 15
      },
      {
        correct: true,
        time: 19
      }
    ];

    assert.equal(1150, countScores(answers, 3));
  });
});

describe(`Answers with different time parameters`, () => {
  it(`returns amount of scores with different parameters, but all 10 answers were correct`, () => {
    const answers = [
      {
        correct: true,
        time: 28
      },
      {
        correct: true,
        time: 19
      },
      {
        correct: true,
        time: 9
      },
      {
        correct: true,
        time: 3
      },
      {
        correct: true,
        time: 0
      },
      {
        correct: true,
        time: 1000
      },
      {
        correct: true,
        time: 3
      },
      {
        correct: true,
        time: 120
      },
      {
        correct: true,
        time: 1
      },
      {
        correct: true,
        time: 13
      }
    ];

    assert.equal(1250, countScores(answers, 3));
  });
});

describe(`Some answers were not correct, time results were different`, () => {
  it(`should test answers with different parameters`, () => {
    const answers = [
      {
        correct: false,
        time: 9
      },
      {
        correct: true,
        time: 2
      },
      {
        correct: true,
        time: 11
      },
      {
        correct: true,
        time: 10
      },
      {
        correct: false,
        time: 17
      },
      {
        correct: false,
        time: 10
      },
      {
        correct: true,
        time: 100
      },
      {
        correct: true,
        time: 99
      },
      {
        correct: false,
        time: 10
      },
      {
        correct: true,
        time: 33
      }
    ];

    assert.equal(850, countScores(answers, 3));
  });
});

describe(`All lives were lost`, () => {
  it(`should test if player lost all of lives`, () => {
    const answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.equal(-1, countScores(answers, 0));
  });
});

describe(`A player has only one live (just test result)`, () => {
  it(`should test if player has one live, but doesn't have any correct answers`, () => {
    const answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.equal(50, countScores(answers, 1));
  });
});

describe(`Timer`, () => {
  describe(`#Time set up correctly`, () => {
    it(`should return isTimeOut true`, () => {
      const timer = startTimer(1);
      timer.tick();
      assert.equal(timer.isTimeOut(), true);
    });
  });

  describe(`#Time set up isn't correctly`, () => {
    it(`should return error`, () => {
      const timer = () => startTimer(-1);
      assert.throws(timer, /Time amount isn't correct, please check/);
    });
  });

  describe(`#Time out isn't true`, () => {
    it(`Timeout should return false`, () => {
      const timer = startTimer(2);
      timer.tick();
      assert.equal(timer.isTimeOut(), false);
    });
  });
});
