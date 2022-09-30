let audioContext;
let mic;
let pitch;
let note;
const jarak = 3;
const notes = [
  {note:'C',freq:65.40639},
  {note:'Db',freq:69.29566},
  {note:'D',freq:73.41619},
  {note:'Eb',freq:77.78175},
  {note:'E',freq:82.40689},
  {note:'F',freq:87.30706},
  {note:'Gb',freq:92.49861},
  {note:'G',freq:97.99886},
  {note:'Ab',freq:103.8262},
  {note:'A',freq:110.0000},
  {note:'Bb',freq:116.5409},
  {note:'B',freq:123.4708},
  {note:'C',freq:130.8128},
  {note:'Db',freq:138.5913},
  {note:'D',freq:146.8324},
  {note:'Eb',freq:155.5635},
  {note:'E',freq:164.8138},
  {note:'F',freq:174.6141},
  {note:'Gb',freq:184.9972},
  {note:'G',freq:195.9977},
  {note:'Ab',freq:207.6523},
  {note:'A',freq:220.0000},
  {note:'Bb',freq:233.0819},
  {note:'B',freq:246.9417},
  {note:'C',freq:261.6256},
  {note:'Db',freq:277.1826},
  {note:'D',freq:293.6648},
  {note:'Eb',freq:311.1270},
  {note:'E',freq:329.6276},
  {note:'F',freq:349.2282},
  {note:'Gb',freq:369.9944},
  {note:'G',freq:391.9954},
  {note:'Ab',freq:415.3047},
  {note:'A',freq:440.0000},
  {note:'Bb',freq:466.1638},
  {note:'B',freq:493.8833},
  {note:'C',freq:523.2511},
  {note:'Db',freq:554.3653},
  {note:'D',freq:587.3295},
  {note:'Eb',freq:622.2540},
  {note:'E',freq:659.2551},
  {note:'F',freq:698.4565},
  {note:'Gb',freq:739.9888},
  {note:'G',freq:783.9909},
  {note:'Ab',freq:830.6094},
  {note:'A',freq:880.0000},
  {note:'Bb',freq:932.3275},
  {note:'B',freq:987.7666},
  {note:'C',freq:1046.502},
];

function setup() {
  noCanvas();
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio();
}

function startPitch() {
  pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  document.getElementById('status').innerText = 'Model Loaded'
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      if(mic.getLevel()>0.06){
        bacaNote(frequency)
      }
    } else {
      note = '. . .'
    }
    getPitch();
  })
}

function bacaNote(frequency) {
  for(let i=0; i<notes.length; i++){
    if(frequency > notes[i].freq-jarak && frequency < notes[i].freq+jarak){
      note = notes[i].note;
      document.getElementById('result').innerText = note
      document.getElementById('freq').innerText = frequency.toFixed(2)
      break;
    }
  }
}
