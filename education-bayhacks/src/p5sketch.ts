// src/p5Sketch.ts
import p5 from 'p5';

const p5Sketch = (p: p5) => {
  let Q, A1, A2, A3, A4, ansBox;
  let counter = 0;
  let feedback = "";
  let isAnswered = false;
  let questions = [
    "Simplify: 3(x−2)+4",
    "Factor: x2−9",
    "Solve for x: 4x​=7",
    "Solve for x: 4x−7=2x+5",
    "Find the slope: y=3x−2"
  ];
  let multichoice = [
    ["3x−2", "3x+2", "2x−3", "2x+3"],
    ["(x+3)(x−3)", "(x+4)(x−3)", "(x+2)(x−5)", "(x+1)(x−3)"],
    ["x=28", "x=25", "x=38", "x=10"],
    ["x=6", "x=60", "x=4", "x=7"],
    ["3", "5", "2", "1"]
  ];
  let answer = [1, 1, 1, 1, 1]; // Correct answer index for each question

  const defineQ = () => {
    Q = questions[counter];
    let ans = multichoice[counter];
    A1 = ans[0];
    A2 = ans[1];
    A3 = ans[2];
    A4 = ans[3];
    ansBox = answer[counter];
  };

  const checkAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === ansBox) {
      feedback = "Correct!";
    } else {
      feedback = "Incorrect!";
    }
    isAnswered = true;
  };

  p.setup = () => {
    p.createCanvas(600, 400);
    p.textAlign(p.CENTER);
    defineQ();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);  // Dynamically adjust canvas size on window resize
  };

  p.draw = () => {
    p.background("#2C2C2C");

    if (isAnswered) {
      showFeedback();
      return;
    }

    // Question
    p.fill("#896BFF");
    p.rect(0, 0, p.width, (p.height * 3) / 7);
    p.textAlign(p.CENTER);
    p.textSize(25);
    p.fill(255);
    p.text(Q, p.width / 2, (p.height * 1.5) / 7);

    // Answer boxes
    let l = 100/2;
    let w = 500/2;
    p.fill("#896BFF");
    p.rect((p.width / 2) - (w + 50), (p.height * 4) / 7, w, l); // First answer (left, top)
    p.rect(p.width / 2 + 50, (p.height * 4) / 7, w, l);         // Second answer (right, top)
    p.rect((p.width / 2) - (w + 50), (p.height * 6) / 7, w, l); // Third answer (left, bottom)
    p.rect(p.width / 2 + 50, (p.height * 6) / 7, w, l);         // Fourth answer (right, bottom)

    // Answer text
    p.textAlign(p.CENTER);
    p.fill(255);
    p.text(A1, (p.width / 2) - (w / 2) - 50, ((p.height * 4) / 7) + 30);
    p.text(A2, (p.width / 2) + (w / 2) + 50, ((p.height * 4) / 7) + 30);
    p.text(A3, (p.width / 2) - (w / 2) - 50, ((p.height * 6) / 7) + 30);
    p.text(A4, (p.width / 2) + (w / 2) + 50, ((p.height * 6) / 7) + 30);
  };

  p.mousePressed = () => {
    if (isAnswered) return;

    let l = 100;
    let w = 500;
    let xLeft = (p.width / 2) - (w + 50);
    let xRight = p.width / 2 + 50;
    let yTop = (p.height * 4) / 7;
    let yBottom = (p.height * 6) / 7;

    // Check which box is clicked and if it's the correct one
    if (p.mouseX >= xLeft && p.mouseX <= xLeft + w && p.mouseY >= yTop && p.mouseY <= yTop + l) {
      checkAnswer(1);
    } else if (p.mouseX >= xRight && p.mouseX <= xRight + w && p.mouseY >= yTop && p.mouseY <= yTop + l) {
      checkAnswer(2);
    } else if (p.mouseX >= xLeft && p.mouseX <= xLeft + w && p.mouseY >= yBottom && p.mouseY <= yBottom + l) {
      checkAnswer(3);
    } else if (p.mouseX >= xRight && p.mouseX <= xRight + w && p.mouseY >= yBottom && p.mouseY <= yBottom + l) {
      checkAnswer(4);
    }
  };

  const showFeedback = () => {
    p.background("#2C2C2C");
    p.fill(255);
    p.textSize(60);
    p.text(feedback, p.width / 2, p.height / 2);

    setTimeout(() => {
      isAnswered = false;
      counter++;
      if (counter < questions.length) {
        defineQ();
      } else {
        counter = 0;
        defineQ();
      }
    }, 1000);
  };
};

export default p5Sketch;