let currentIndex = 0;
let selectedValue = null;
let correctAnswer = null;
function loadpage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            document.getElementById("clear").innerHTML = "";
            loadquestions();
        })
        .catch(error => {
            console.error("Error loading page:", error);
            document.getElementById("content").innerHTML = "<p>Failed to load content.</p>";
        });
    
}

const quizData = [
  {
    question: "What is the speed limit for cars in cities in India?",
    options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
    answer: 1
  },
  {
    question: "What is the legal age to apply for a driving license in India?",
    options: ["16 years", "18 years", "21 years", "25 years"],
    answer: 1
  },
  {
    question: "What is the meaning of a yellow traffic light?",
    options: ["Go faster", "Prepare to stop", "Stop immediately", "Turn right"],
    answer: 1
  },
  {
    question: "What should you do when you see a red signal?",
    options: ["Stop and wait for the signal to turn green", "Move slowly", "Honk and move forward", "Continue driving"],
    answer: 0
  },
  {
    question: "How far should you park from a pedestrian crossing?",
    options: ["3 meters", "5 meters", "10 meters", "15 meters"],
    answer: 1
  },
  {
    question: "What should you do if you are involved in a minor accident?",
    options: ["Leave the scene", "Call police and exchange info", "Argue with driver", "Keep driving"],
    answer: 1
  },
  {
    question: "What does a solid white line on the road indicate?",
    options: ["You can overtake", "Do not cross", "Pedestrian lane", "Stop line"],
    answer: 1
  },
  {
    question: "Minimum distance between vehicles while driving?",
    options: ["1 meter", "2 meters", "3 meters", "4 meters"],
    answer: 2
  },
  {
    question: "Hand signal for left turn?",
    options: ["Left arm straight", "Left arm bent", "Right arm straight", "Right arm bent"],
    answer: 0
  },
  {
    question: "What to do while driving in heavy rain?",
    options: ["Use headlights and slow down", "Drive normal", "Turn off wipers", "Drive without headlights"],
    answer: 0
  },
  {
    question: "Purpose of seatbelts?",
    options: ["Protection during crashes", "Comfort", "Fun", "None"],
    answer: 0
  },
  {
    question: "Main rule in fog?",
    options: ["High beam", "Low beam and slow down", "Max speed", "Hazard lights only"],
    answer: 1
  },
  {
    question: "Roundabout sign means?",
    options: ["Yield to traffic", "Stop completely", "Exit right", "Do not enter"],
    answer: 0
  },
  {
    question: "What if brakes fail?",
    options: ["Accelerate", "Pump brake and shift gear", "Turn off engine", "Keep driving"],
    answer: 1
  },
  {
    question: "Purpose of rearview mirror?",
    options: ["Adjust seat", "See ahead", "See behind", "Fuel check"],
    answer: 2
  },
  {
    question: "When can you use mobile phone while driving?",
    options: ["Only when parked", "While turning", "In city", "Always"],
    answer: 0
  },
  {
    question: "Before reversing vehicle, you should?",
    options: ["Check mirrors and look back", "Honk", "Turn off engine", "Accelerate fast"],
    answer: 0
  },
  {
    question: "Missed highway exit, what now?",
    options: ["Reverse", "U-turn", "Take next exit", "Stop and wait"],
    answer: 2
  },
  {
    question: "What is the meaning of a double solid yellow line in the center of the road?",
    options: ["No overtaking in either direction", "Pedestrian crossing", "Bus lane", "Parking allowed"],
    answer: 0
  },
  {
    question: "School bus flashing red lights means?",
    options: ["Keep going", "Stop till lights stop", "Overtake", "Honk"],
    answer: 1
  },
  {
    question: "Max alcohol limit for Indian drivers?",
    options: ["30mg/100ml", "60mg/100ml", "100mg/100ml", "None"],
    answer: 0
  },
  {
    question: "Red traffic light means?",
    options: ["Go", "Slow", "Stop", "Yield"],
    answer: 2
  },
  {
    question: "Color of stop sign?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: 2
  },
  {
    question: "Ambulance approaching, you should?",
    options: ["Same speed", "Speed up", "Pull over", "Stop mid-road"],
    answer: 2
  },
  {
    question: "Broken white lines mean?",
    options: ["No parking", "Lane divider – change allowed", "Stop", "Pedestrian lane"],
    answer: 1
  },
  {
    question: "What is hydroplaning?",
    options: ["Dry slide", "Brake fail", "Skid on wet road", "Engine heat"],
    answer: 2
  },
  {
    question: "Behind large vehicle?",
    options: ["Very close", "Overtake left", "Safe distance", "Honk"],
    answer: 2
  },
  {
    question: "Flashing yellow light means?",
    options: ["Stop", "Caution", "Speed up", "Turn left"],
    answer: 1
  },
  {
    question: "When to use headlights?",
    options: ["Only tunnels", "Only in rain", "At night or poor visibility", "Only highways"],
    answer: 2
  },
  {
    question: "Why check blind spots before lane change?",
    options: ["Fuel level", "Vehicle beside you", "Seat adjust", "Passengers"],
    answer: 1
  },
  {
    question: "Blue traffic signs mean?",
    options: ["Mandatory", "Warning", "Hazard", "Detour"],
    answer: 0
  },
  {
    question: "U-turn is allowed when?",
    options: ["No signs", "Where safe and permitted", "On bridge", "Always"],
    answer: 1
  },
  {
    question: "What is a zebra crossing for?",
    options: ["Cars to park", "Pedestrians to cross", "Two-wheeler lane", "Signals"],
    answer: 1
  },
  {
    question: "License renewal frequency?",
    options: ["1 year", "3 years", "5 years", "10 years"],
    answer: 2
  },
  {
    question: "How to enter highway safely?",
    options: ["Stop fully", "Use ramp and match speed", "Drive slow", "Take U-turn"],
    answer: 1
  },
  {
    question: "Using horn excessively is?",
    options: ["Polite", "Encouraged", "Discouraged", "Lawful"],
    answer: 2
  },
  {
    question: "First thing to do when entering vehicle?",
    options: ["Adjust seat", "Check rearview mirror", "Start engine", "Put seatbelt"],
    answer: 3
  },
  {
    question: "Why keep left on Indian roads?",
    options: ["Avoid overtaking", "Tradition", "Traffic law", "Comfort"],
    answer: 2
  },
  {
    question: "Speed limit near schools?",
    options: ["20 km/h", "25 km/h", "30 km/h", "40 km/h"],
    answer: 0
  },
  {
    question: "If tire bursts, you should?",
    options: ["Brake hard", "Accelerate", "Grip wheel and slow down", "Turn quickly"],
    answer: 2
  },
  {
    question: "Purpose of speed bumps?",
    options: ["Jump", "Race", "Control speed", "Decorate road"],
    answer: 2
  },
  {
    question: "Where is overtaking banned?",
    options: ["Hilltops", "Curves", "Zebra crossings", "All mentioned"],
    answer: 3
  },
  {
    question: "What to check before starting engine?",
    options: ["Horn", "Wiper", "Mirrors and surroundings", "Radio"],
    answer: 2
  },
  {
    question: "What’s green light mean?",
    options: ["Prepare to stop", "Slow down", "Go", "Turn left only"],
    answer: 2
  },
  {
    question: "Why regular vehicle servicing?",
    options: ["Looks good", "Avoid breakdown", "For resale", "No reason"],
    answer: 1
  },
  {
    question: "When must you stop your vehicle?",
    options: ["Yellow light", "Police signal", "Red light", "Both 2 and 3"],
    answer: 3
  },
  {
    question: "Lane discipline means?",
    options: ["Drive fast", "Use hazard light", "Stay in marked lane", "Overtake often"],
    answer: 2
  },
  {
    question: "Which mirror has blind spot?",
    options: ["Rearview", "Left", "Right", "All"],
    answer: 3
  }
];



  
function loadquestions(){
  currentIndex = Math.floor(Math.random() * quizData.length);
  const current = quizData[currentIndex];
  document.getElementById("question").textContent = current.question;
  current.options.forEach((opt,i) => {
    document.getElementById(`opt${i}`).textContent = opt;
  });
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please choose an answer.");
    return;
  }

  selectedValue = parseInt(selected.value);
  correctAnswer = quizData[currentIndex].answer;


  if (selectedValue === correctAnswer) {
    document.getElementById("result").textContent = "✅ Correct!";
  } else {
    document.getElementById("result").textContent = "❌ Wrong!";
  }

  }

  let total = 0;

  function next(){
    if (selectedValue !== null && correctAnswer !== null) {
      updateScore(selectedValue, correctAnswer);
      quizData.splice(currentIndex, 1); // remove current question
      selectedValue = null;
      correctAnswer = null;
    }
    total++;
    document.getElementById("total-question").innerText = total;
    if (quizData.length === 43) {
      document.getElementById("container").remove();
      document.getElementById("over").innerText = "Quiz finished!";
      return;
    }
    currentIndex = Math.floor(Math.random() * quizData.length);
    const current = quizData[currentIndex];
    document.getElementById("question").textContent = current.question;
    current.options.forEach((opt,i) => {
      document.getElementById(`opt${i}`).textContent = opt;
    });
    document.getElementById("result").textContent = "";

    clearRadioSelection();

    

  }

  function clearRadioSelection() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  }

  let score = 0;
  let wrongscore = 0;

  function updateScore(selectedValue, correctAnswer) {
    if (selectedValue === correctAnswer) {
      score++;
    } else {
      wrongscore++;
    }
    document.getElementById("score").innerText = score;
    document.getElementById("wrong").innerText = wrongscore;
  }
  





  