const synth = new Tone.PluckSynth(Tone.Synth);
const bend = new Tone.PitchShift(); 
bend.pitch = 0;
synth.connect(bend);
bend.toDestination();


let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'f4',
  'g': 'g4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);
  
  pitchSlider = createSlider (0., 12., 0.01, 1);
  pitchSlider.position (120,200);
  pitchSlider.mouseMoved(() => {
    bend.pitch = pitchSlider.value();
  })
 
}

function draw() {
  background(150, 150, 10);
  text("Play A through K and bend pitch with slider.", 75, 150)
}



function keyPressed() {
  let playNote = notes[key.toLowerCase()]; 
  if (playNote){
  synth.triggerAttack(playNote);
  }
}

function keyReleased() {
  let playNote = notes[key.toLowerCase()]; 
  if (playNote){
    synth.triggerRelease(playNote, '+0.03'); 
  }
  
}
