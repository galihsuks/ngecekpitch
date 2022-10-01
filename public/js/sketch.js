const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

const navigasi = document.querySelectorAll(".nav-langkah")
const dataLangkah = document.querySelectorAll('.data-langkah')
navigasi.forEach((navi) => {
  navi.addEventListener('click',()=>{
    const target = document.getElementById(navi.dataset.nav)
    dataLangkah.forEach((data)=>{
      data.classList.remove('active')
    })
    target.classList.add('active')
    document.getElementById("check").checked = false;
    document.getElementById("berhasil").style = "left: -100%;"
    levelLangkah = navi.dataset.nav
    nomor = 0
    detik = 0
    penghitung.forEach((a)=>{a.innerHTML = nomor+"/20"})
    switch(levelLangkah){
      case 'langkah1':
        chordTarget1 = chords[Math.floor(Math.random() * 12)]
        audio1 = "note"+chordTarget1
        chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
        jwbnBenar = chordTarget1;
        break;
      case 'langkah2':
        chordTarget1 = chords[Math.floor(Math.random() * 12)]
        chordTarget2 = chords[Math.floor(Math.random() * 12)]
        audio1 = "note"+chordTarget1
        audio2 = "note"+chordTarget2
        chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
        jwbnBenar = chordTarget2;
        break;
      case 'langkah3':
        chordTarget1 = chords[Math.floor(Math.random() * 12)]
        chordTarget2 = chords[Math.floor(Math.random() * 12)]
        audio1 = "note"+chordTarget1;
        chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
        chordJwb.forEach((a)=>{a.innerHTML = chordTarget2})
        jwbnBenar = chordTarget2;
        break;
      case 'langkah4':
        chordTarget1 = chords[Math.floor(Math.random() * 12)]
        audio1 = "chord"+chordTarget1;
        chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
        jwbnBenar = chordTarget1;
        break;
      case 'langkah5':
        chordTarget1 = chords[Math.floor(Math.random() * 12)]
        audio1 = "chord"+chordTarget1+"m";
        chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
        jwbnBenar = chordTarget1;
        break;
      case 'langkah6':
        chordTarget1 = chord145[Math.floor(Math.random() * 12)]
        chordTarget2 = chordTarget1[Math.floor(Math.random() * 3)]
        index = chordTarget1.indexOf(chordTarget2)
        if(index != 0)
          index += 3
        else
          index += 1
        chordSoal.forEach((a)=>{a.innerHTML = '1'})
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[1];
        audio3 = "chord"+chordTarget1[2];
        audio4 = "chord"+chordTarget2;
        jwbnBenar = index.toString();
        break;
      case 'langkah7':
        chordTarget1 = chord145x[Math.floor(Math.random() * 12)]
        countRand = count[Math.floor(Math.random() * 6)]
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[countRand[0]];
        audio3 = "chord"+chordTarget1[countRand[1]];
        audio4 = "chord"+chordTarget1[countRand[2]];
        abc[0][0] = chordTarget1[countRand[0]]
        abc[1][0] = chordTarget1[countRand[1]]
        abc[2][0] = chordTarget1[countRand[2]]
        if(nomor%2 == 1){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-5 nya'})
          for(let i=0;i<3;i++) {
            if(abc[i][0] == chordTarget1[2]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else{
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-4 nya'})
          for(let i=0;i<3;i++) {
            if(abc[i][0] == chordTarget1[1]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        break;
      case 'langkah8':
        chordTarget1 = chord623[Math.floor(Math.random() * 12)]
        chordTarget2 = chordTarget1[Math.floor(Math.random() * 3)]
        index = chordTarget1.indexOf(chordTarget2)
        if(index != 0)
          index += 1
        else
          index += 6
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[1];
        audio3 = "chord"+chordTarget1[2];
        audio4 = "chord"+chordTarget2;
        jwbnBenar = index.toString()
        break;
      case 'langkah9':
        chordTarget1 = chord623x[Math.floor(Math.random() * 12)]
        countRand = count[Math.floor(Math.random() * 6)]
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[countRand[0]];
        audio3 = "chord"+chordTarget1[countRand[1]];
        audio4 = "chord"+chordTarget1[countRand[2]];
        abc[0][0] = chordTarget1[countRand[0]]
        abc[1][0] = chordTarget1[countRand[1]]
        abc[2][0] = chordTarget1[countRand[2]]
        if(nomor%2 == 1){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-3 nya'})
          for(let i=0;i<3;i++) {
            if(abc[i][0] == chordTarget1[2]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else{
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-2 nya'})
          for(let i=0;i<3;i++) {
            if(abc[i][0] == chordTarget1[1]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        break;
      case 'langkah10':
        chordTarget1 = chord123456[Math.floor(Math.random() * 12)]
        chordTarget2 = chordTarget1[Math.floor(Math.random() * 6)]
        index = chordTarget1.indexOf(chordTarget2) + 1
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[1];
        audio3 = "chord"+chordTarget1[2];
        audio4 = "chord"+chordTarget1[3];
        audio5 = "chord"+chordTarget1[4];
        audio6 = "chord"+chordTarget1[5];
        audio7 = "chord"+chordTarget2;
        jwbnBenar = index.toString();
        break;
      case 'langkah11':
        chordTarget1 = chord123456[Math.floor(Math.random() * 12)]
        countRand = count5[Math.floor(Math.random() * 120)]
        audio1 = "chord"+chordTarget1[0];
        audio2 = "chord"+chordTarget1[countRand[0]];
        audio3 = "chord"+chordTarget1[countRand[1]];
        audio4 = "chord"+chordTarget1[countRand[2]];
        audio5 = "chord"+chordTarget1[countRand[3]];
        audio6 = "chord"+chordTarget1[countRand[4]];
        abc[0][0] = chordTarget1[countRand[0]]
        abc[1][0] = chordTarget1[countRand[1]]
        abc[2][0] = chordTarget1[countRand[2]]
        abc[3][0] = chordTarget1[countRand[3]]
        abc[4][0] = chordTarget1[countRand[4]]
        if(nomor%5 == 1){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-3 nya'})
          for(let i=0;i<5;i++) {
            if(abc[i][0] == chordTarget1[2]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else if(nomor%5 == 2){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-4 nya'})
          for(let i=0;i<5;i++) {
            if(abc[i][0] == chordTarget1[3]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else if(nomor%5 == 3){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-5 nya'})
          for(let i=0;i<5;i++) {
            if(abc[i][0] == chordTarget1[4]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else if(nomor%5 == 4){
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-6 nya'})
          for(let i=0;i<5;i++) {
            if(abc[i][0] == chordTarget1[5]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        else{
          soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-2 nya'})
          for(let i=0;i<5;i++) {
            if(abc[i][0] == chordTarget1[1]) {
              jwbnBenar = abc[i][1]
            }
          }
        }
        break;
    }
  })
})

let audioContext;
let mic;
let pitch;
const chord145 = [
  ['C','F','G'],
  ['Db','Gb','Ab'],
  ['D','G','A'],
  ['Eb','Ab','Bb'],
  ['E','A','B'],
  ['F','Bb','C'],
  ['Gb','B','Db'],
  ['G','C','D'],
  ['Ab','Db','Eb'],
  ['A','D','E'],
  ['Bb','Eb','F'],
  ['B','E','Gb'],
]
const chord145x = [
  ['C','F','G','Em'],
  ['Db','Gb','Ab','Bbm'],
  ['D','G','A','Em'],
  ['Eb','Ab','Bb','Gm'],
  ['E','A','B','Dbm'],
  ['F','Bb','C','Gm'],
  ['Gb','B','Db','Bbm'],
  ['G','C','D','Em'],
  ['Ab','Db','Eb','Bbm'],
  ['A','D','E','Dbm'],
  ['Bb','Eb','F','Gm'],
  ['B','E','Gb','Dbm'],
]
const count = [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [3,1,2],
  [2,3,1],
  [3,2,1],
]
const chord623 = [
  ['Am','Dm','Em'],
  ['Bbm','Ebm','Fm'],
  ['Bm','Em','Gbm'],
  ['Cm','Fm','Gm'],
  ['Dbm','Gbm','Abm'],
  ['Dm','Gm','Am'],
  ['Ebm','Abm','Bbm'],
  ['Em','Am','Bm'],
  ['Fm','Bbm','Cm'],
  ['Gbm','Bm','Dbm'],
  ['Gm','Cm','Dm'],
  ['Abm','Dbm','Ebm']
]
const chord623x = [
  ['Am','Dm','Em','C'],
  ['Bbm','Ebm','Fm','Gb'],
  ['Bm','Em','Gbm','A'],
  ['Cm','Fm','Gm','Eb'],
  ['Dbm','Gbm','Abm','A'],
  ['Dm','Gm','Am','C'],
  ['Ebm','Abm','Bbm','Gb'],
  ['Em','Am','Bm','C'],
  ['Fm','Bbm','Cm','Eb'],
  ['Gbm','Bm','Dbm','A'],
  ['Gm','Cm','Dm','Eb'],
  ['Abm','Dbm','Ebm','Gb']
]
const chord123456 = [
  ['C','Dm','Em','F','G','Am'],
  ['Db','Ebm','Fm','Gb','Ab','Bbm'],
  ['D','Em','Gbm','G','A','Bm'],
  ['Eb','Fm','Gm','Ab','Bb','Cm'],
  ['E','Gbm','Abm','A','B','Dbm'],
  ['F','Gm','Am','Bb','C','Dm'],
  ['Gb','Abm','Bbm','B','Db','Ebm'],
  ['G','Am','Bm','C','D','Em'],
  ['Ab','Bbm','Cm','Db','Eb','Fm'],
  ['A','Bm','Dbm','D','E','Gbm'],
  ['Bb','Cm','Dm','Eb','F','Gm'],
  ['B','Dbm','Ebm','E','Gb','Abm'],
]
const count5 = [
  [1,2,3,4,5],
  [1,2,3,5,4],
//-----------------------
  [1,2,4,3,5],
  [1,2,4,5,3],
  [1,2,5,3,4],
  [1,2,5,4,3],
//-------------------------
  [1,3,2,4,5],
  [1,3,2,5,4],
  [1,3,4,2,5],
  [1,3,4,5,2],
  [1,3,5,2,4],
  [1,3,5,4,2],

  [1,4,2,3,5],
  [1,4,2,5,3],
  [1,4,3,2,5],
  [1,4,3,5,2],
  [1,4,5,2,3],
  [1,4,5,3,2],

  [1,5,2,3,4],
  [1,5,2,4,3],
  [1,5,3,2,4],
  [1,5,3,4,2],
  [1,5,4,2,3],
  [1,5,4,3,2],
//-------------------
//-------------------
  [2,1,3,4,5],
  [2,1,3,5,4],
  //-----------------------
  [2,1,4,3,5],
  [2,1,4,5,3],
  [2,1,5,3,4],
  [2,1,5,4,3],
  //-------------------------
  [2,3,1,4,5],
  [2,3,1,5,4],
  [2,3,4,1,5],
  [2,3,4,5,1],
  [2,3,5,1,4],
  [2,3,5,4,1],

  [2,4,1,3,5],
  [2,4,1,5,3],
  [2,4,3,1,5],
  [2,4,3,5,1],
  [2,4,5,1,3],
  [2,4,5,3,1],

  [2,5,1,3,4],
  [2,5,1,4,3],
  [2,5,3,1,4],
  [2,5,3,4,1],
  [2,5,4,1,3],
  [2,5,4,3,1],
//-----------------
//-----------------
  [3,2,1,4,5],
  [3,2,1,5,4],
  //-----------------------
  [3,2,4,1,5],
  [3,2,4,5,1],
  [3,2,5,1,4],
  [3,2,5,4,1],
  //-------------------------
  [3,1,2,4,5],
  [3,1,2,5,4],
  [3,1,4,2,5],
  [3,1,4,5,2],
  [3,1,5,2,4],
  [3,1,5,4,2],

  [3,4,2,1,5],
  [3,4,2,5,1],
  [3,4,1,2,5],
  [3,4,1,5,2],
  [3,4,5,2,1],
  [3,4,5,1,2],

  [3,5,2,1,4],
  [3,5,2,4,1],
  [3,5,1,2,4],
  [3,5,1,4,2],
  [3,5,4,2,1],
  [3,5,4,1,2],
//------------------
//------------------
  [4,2,3,1,5],
  [4,2,3,5,1],
  //-----------------------
  [4,2,1,3,5],
  [4,2,1,5,3],
  [4,2,5,3,1],
  [4,2,5,1,3],
  //-------------------------
  [4,3,2,1,5],
  [4,3,2,5,1],
  [4,3,1,2,5],
  [4,3,1,5,2],
  [4,3,5,2,1],
  [4,3,5,1,2],

  [4,1,2,3,5],
  [4,1,2,5,3],
  [4,1,3,2,5],
  [4,1,3,5,2],
  [4,1,5,2,3],
  [4,1,5,3,2],

  [4,5,2,3,1],
  [4,5,2,1,3],
  [4,5,3,2,1],
  [4,5,3,1,2],
  [4,5,1,2,3],
  [4,5,1,3,2],
//--------------
//---------------
  [5,2,3,4,1],
  [5,2,3,1,4],
  //-----------------------
  [5,2,4,3,1],
  [5,2,4,1,3],
  [5,2,1,3,4],
  [5,2,1,4,3],
  //-------------------------
  [5,3,2,4,1],
  [5,3,2,1,4],
  [5,3,4,2,1],
  [5,3,4,1,2],
  [5,3,1,2,4],
  [5,3,1,4,2],

  [5,4,2,3,1],
  [5,4,2,1,3],
  [5,4,3,2,1],
  [5,4,3,1,2],
  [5,4,1,2,3],
  [5,4,1,3,2],

  [5,1,2,3,4],
  [5,1,2,4,3],
  [5,1,3,2,4],
  [5,1,3,4,2],
  [5,1,4,2,3],
  [5,1,4,3,2],
]
const jarak = 3;
let note;
const chords = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']
let chordTarget1 = chords[Math.floor(Math.random() * 12)]
let chordTarget2 = chords[Math.floor(Math.random() * 12)]
let levelLangkah = 'langkah1';
var jwbnBenar = chordTarget1;
let index = chordTarget1.indexOf(chordTarget2)
if(index != 0)
  index += 3
else
  index += 1
let abc = [
  ['chord','a'],
  ['chord','b'],
  ['chord','c'],
  ['chord','d'],
  ['chord','e']
]
let countRand = count[Math.floor(Math.random() * 6)]

const noteC = document.getElementById("noteC");
const noteDb = document.getElementById("noteDb");
const noteD = document.getElementById("noteD");
const noteEb = document.getElementById("noteEb");
const noteE = document.getElementById("noteE");
const noteF = document.getElementById("noteF");
const noteGb = document.getElementById("noteGb");
const noteG = document.getElementById("noteG");
const noteAb = document.getElementById("noteAb");
const noteA = document.getElementById("noteA");
const noteBb = document.getElementById("noteBb");
const noteB = document.getElementById("noteB");

const chordC = document.getElementById("chordC");
const chordDb = document.getElementById("chordDb");
const chordD = document.getElementById("chordD");
const chordEb = document.getElementById("chordEb");
const chordE = document.getElementById("chordE");
const chordF = document.getElementById("chordF");
const chordGb = document.getElementById("chordGb");
const chordG = document.getElementById("chordG");
const chordAb = document.getElementById("chordAb");
const chordA = document.getElementById("chordA");
const chordBb = document.getElementById("chordBb");
const chordB = document.getElementById("chordB");

const chordCm = document.getElementById("chordCm");
const chordDbm = document.getElementById("chordDbm");
const chordDm = document.getElementById("chordDm");
const chordEbm = document.getElementById("chordEbm");
const chordEm = document.getElementById("chordEm");
const chordFm = document.getElementById("chordFm");
const chordGbm = document.getElementById("chordGbm");
const chordGm = document.getElementById("chordGm");
const chordAbm = document.getElementById("chordAbm");
const chordAm = document.getElementById("chordAm");
const chordBbm = document.getElementById("chordBbm");
const chordBm = document.getElementById("chordBm");

var audioIcon1 = document.querySelectorAll(".audioIcon1");
var audioIcon2 = document.querySelectorAll(".audioIcon2");
var audioIcon3 = document.querySelectorAll(".audioIcon3");
var audioIcon4 = document.querySelectorAll(".audioIcon4");
var audioIcon5 = document.querySelectorAll(".audioIcon5");
var audioIcon6 = document.querySelectorAll(".audioIcon6");
var audioIcon7 = document.querySelectorAll(".audioIcon7");

const chordSoal = document.querySelectorAll(".chordSoal")
const chordJwb = document.querySelectorAll(".chordJwb")
const penghitung = document.querySelectorAll(".penghitung")
const jawaban = document.querySelectorAll(".jawaban")
const jawabaninput = document.querySelectorAll(".jawabaninput")
const soalText = document.querySelectorAll(".soalText")

let audio1 = ''
let audio2 = ''
let audio3 = ''
let audio4 = ''
let audio5 = ''
let audio6 = ''
let audio7 = ''

audioIcon1.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio1).load();
    document.getElementById(audio1).play();
    if(levelLangkah == 'langkah6'){
      document.getElementById(audio2).load();
      document.getElementById(audio3).load();
      chordSoal.forEach((a)=>{a.innerHTML = '1'})
      setTimeout(function(){document.getElementById(audio2).play();chordSoal.forEach((a)=>{a.innerHTML = '4'});},500);
      setTimeout(function(){document.getElementById(audio3).play();chordSoal.forEach((a)=>{a.innerHTML = '5'});},1000);
      setTimeout(function(){document.getElementById(audio1).load();document.getElementById(audio1).play();chordSoal.forEach((a)=>{a.innerHTML = '1'});},1500);
    } else if(levelLangkah == 'langkah8'){
      document.getElementById(audio2).load();
      document.getElementById(audio3).load();
      chordSoal.forEach((a)=>{a.innerHTML = '6'})
      setTimeout(function(){document.getElementById(audio2).play();chordSoal.forEach((a)=>{a.innerHTML = '2'});},500);
      setTimeout(function(){document.getElementById(audio3).play();chordSoal.forEach((a)=>{a.innerHTML = '3'});},1000);
      setTimeout(function(){document.getElementById(audio1).load();document.getElementById(audio1).play();chordSoal.forEach((a)=>{a.innerHTML = '6'});},1500);
    } else if(levelLangkah == 'langkah10'){
      document.getElementById(audio2).load();
      document.getElementById(audio3).load();
      document.getElementById(audio4).load();
      document.getElementById(audio5).load();
      document.getElementById(audio6).load();
      chordSoal.forEach((a)=>{a.innerHTML = '1'})
      setTimeout(function(){document.getElementById(audio2).play();chordSoal.forEach((a)=>{a.innerHTML = '2'});},500);
      setTimeout(function(){document.getElementById(audio3).play();chordSoal.forEach((a)=>{a.innerHTML = '3'});},1000);
      setTimeout(function(){document.getElementById(audio4).play();chordSoal.forEach((a)=>{a.innerHTML = '4'});},1500);
      setTimeout(function(){document.getElementById(audio5).play();chordSoal.forEach((a)=>{a.innerHTML = '5'});},2000);
      setTimeout(function(){document.getElementById(audio6).play();chordSoal.forEach((a)=>{a.innerHTML = '6'});},2500);
      setTimeout(function(){document.getElementById(audio1).load();document.getElementById(audio1).play();chordSoal.forEach((a)=>{a.innerHTML = '1'});},3000);
    }
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon2.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio2).load();
    document.getElementById(audio2).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon3.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio3).load();
    document.getElementById(audio3).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon4.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio4).load();
    document.getElementById(audio4).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon5.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio5).load();
    document.getElementById(audio5).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon6.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio6).load();
    document.getElementById(audio6).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})
audioIcon7.forEach((sound)=>{
  sound.addEventListener('click',()=>{
    document.getElementById(audio7).load();
    document.getElementById(audio7).play();
    jawabaninput.forEach((a)=>{a.focus()})
  })
})

audio1 = "note"+chordTarget1
audio2 = "note"+chordTarget2;

chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
chordJwb.forEach((a)=>{a.innerHTML = chordTarget2})

let nomor = 0;
penghitung.forEach((a)=>{a.innerHTML = nomor+"/20"})
function gantiNomor() {
  nomor += 1;
  if(nomor == 10) {
    finishLangkah(levelLangkah);
  }
  penghitung.forEach((a)=>{a.innerHTML = nomor+"/20"})
  switch(levelLangkah){
    case 'langkah1':
      chordTarget1 = chords[Math.floor(Math.random() * 12)]
      audio1 = "note"+chordTarget1
      chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
      jwbnBenar = chordTarget1;
      break;
    case 'langkah2':
      chordTarget1 = chords[Math.floor(Math.random() * 12)]
      chordTarget2 = chords[Math.floor(Math.random() * 12)]
      audio1 = "note"+chordTarget1
      audio2 = "note"+chordTarget2
      chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
      jwbnBenar = chordTarget2;
      break;
    case 'langkah3':
      chordTarget1 = chords[Math.floor(Math.random() * 12)]
      chordTarget2 = chords[Math.floor(Math.random() * 12)]
      audio1 = "note"+chordTarget1;
      chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
      chordJwb.forEach((a)=>{a.innerHTML = chordTarget2})
      jwbnBenar = chordTarget2;
      break;
    case 'langkah4':
      chordTarget1 = chords[Math.floor(Math.random() * 12)]
      audio1 = "chord"+chordTarget1;
      chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
      jwbnBenar = chordTarget1;
      break;
    case 'langkah5':
      chordTarget1 = chords[Math.floor(Math.random() * 12)]
      audio1 = "chord"+chordTarget1+"m";
      chordSoal.forEach((a)=>{a.innerHTML = chordTarget1})
      jwbnBenar = chordTarget1;
      break;
    case 'langkah6':
      chordTarget1 = chord145[Math.floor(Math.random() * 12)]
      chordTarget2 = chordTarget1[Math.floor(Math.random() * 3)]
      index = chordTarget1.indexOf(chordTarget2)
      if(index != 0)
        index += 3
      else
        index += 1
      chordSoal.forEach((a)=>{a.innerHTML = '1'})
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[1];
      audio3 = "chord"+chordTarget1[2];
      audio4 = "chord"+chordTarget2;
      jwbnBenar = index.toString();
      break;
    case 'langkah7':
      chordTarget1 = chord145x[Math.floor(Math.random() * 12)]
      countRand = count[Math.floor(Math.random() * 6)]
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[countRand[0]];
      audio3 = "chord"+chordTarget1[countRand[1]];
      audio4 = "chord"+chordTarget1[countRand[2]];
      abc[0][0] = chordTarget1[countRand[0]]
      abc[1][0] = chordTarget1[countRand[1]]
      abc[2][0] = chordTarget1[countRand[2]]
      if(nomor%2 == 1){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-5 nya'})
        for(let i=0;i<3;i++) {
          if(abc[i][0] == chordTarget1[2]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else{
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-4 nya'})
        for(let i=0;i<3;i++) {
          if(abc[i][0] == chordTarget1[1]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      break;
    case 'langkah8':
      chordTarget1 = chord623[Math.floor(Math.random() * 12)]
      chordTarget2 = chordTarget1[Math.floor(Math.random() * 3)]
      index = chordTarget1.indexOf(chordTarget2)
      if(index != 0)
        index += 1
      else
        index += 6
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[1];
      audio3 = "chord"+chordTarget1[2];
      audio4 = "chord"+chordTarget2;
      jwbnBenar = index.toString()
      break;
    case 'langkah9':
      chordTarget1 = chord623x[Math.floor(Math.random() * 12)]
      countRand = count[Math.floor(Math.random() * 6)]
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[countRand[0]];
      audio3 = "chord"+chordTarget1[countRand[1]];
      audio4 = "chord"+chordTarget1[countRand[2]];
      abc[0][0] = chordTarget1[countRand[0]]
      abc[1][0] = chordTarget1[countRand[1]]
      abc[2][0] = chordTarget1[countRand[2]]
      if(nomor%2 == 1){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-3 nya'})
        for(let i=0;i<3;i++) {
          if(abc[i][0] == chordTarget1[2]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else{
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-2 nya'})
        for(let i=0;i<3;i++) {
          if(abc[i][0] == chordTarget1[1]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      break;
    case 'langkah10':
      chordTarget1 = chord123456[Math.floor(Math.random() * 12)]
      chordTarget2 = chordTarget1[Math.floor(Math.random() * 6)]
      index = chordTarget1.indexOf(chordTarget2) + 1
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[1];
      audio3 = "chord"+chordTarget1[2];
      audio4 = "chord"+chordTarget1[3];
      audio5 = "chord"+chordTarget1[4];
      audio6 = "chord"+chordTarget1[5];
      audio7 = "chord"+chordTarget2;
      jwbnBenar = index.toString();
      break;
    case 'langkah11':
      chordTarget1 = chord123456[Math.floor(Math.random() * 12)]
      countRand = count5[Math.floor(Math.random() * 120)]
      audio1 = "chord"+chordTarget1[0];
      audio2 = "chord"+chordTarget1[countRand[0]];
      audio3 = "chord"+chordTarget1[countRand[1]];
      audio4 = "chord"+chordTarget1[countRand[2]];
      audio5 = "chord"+chordTarget1[countRand[3]];
      audio6 = "chord"+chordTarget1[countRand[4]];
      abc[0][0] = chordTarget1[countRand[0]]
      abc[1][0] = chordTarget1[countRand[1]]
      abc[2][0] = chordTarget1[countRand[2]]
      abc[3][0] = chordTarget1[countRand[3]]
      abc[4][0] = chordTarget1[countRand[4]]
      if(nomor%5 == 1){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-3 nya'})
        for(let i=0;i<5;i++) {
          if(abc[i][0] == chordTarget1[2]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else if(nomor%5 == 2){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-4 nya'})
        for(let i=0;i<5;i++) {
          if(abc[i][0] == chordTarget1[3]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else if(nomor%5 == 3){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-5 nya'})
        for(let i=0;i<5;i++) {
          if(abc[i][0] == chordTarget1[4]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else if(nomor%5 == 4){
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-6 nya'})
        for(let i=0;i<5;i++) {
          if(abc[i][0] == chordTarget1[5]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      else{
        soalText.forEach((a)=>{a.innerHTML = 'Carilah chord ke-2 nya'})
        for(let i=0;i<5;i++) {
          if(abc[i][0] == chordTarget1[1]) {
            jwbnBenar = abc[i][1]
          }
        }
      }
      break;
  }
}

function looping(){ 
  jawaban.forEach((a)=>{a.innerHTML = note})
};
setInterval(looping, 1);

let detik = 0;
function pewaktu(){ 
  detik += 1
};
setInterval(pewaktu, 1000);

function setup() {
  noCanvas();
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio();
}
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}
function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      if(mic.getLevel()>0.06){
        let midiNum = freqToMidi(frequency);
        if(mic.getLevel()>0.06){
          note = chords[midiNum % 12];
          if(jwbnBenar == note && (levelLangkah=='langkah1'||levelLangkah=='langkah3'||levelLangkah=='langkah4'||levelLangkah=='langkah5')) {
            gantiNomor();
          }
        }
      }
    } else {
      note = '. . .'
    }
    getPitch();
  })
}

jawabaninput.forEach((jwb)=>{
  jwb.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13) {
      if(!(jwb.value === '' || jwb.value == null)){
        if(jwb.value.toUpperCase() == jwbnBenar.toUpperCase() && !(levelLangkah=='langkah1'||levelLangkah=='langkah3'||levelLangkah=='langkah4'||levelLangkah=='langkah5')){
          gantiNomor()
        }
        jwb.value = '';
      }
    }
  })
})

function finishLangkah(level) {
  if(detik<=30){
    document.getElementById("teksBerhasil").innerHTML = 'Waw, kamu telah berhasil menyelesaikan '+level+' ini selama '+detik+' detik. Kamu pasti sudah mahir di tahap ini. Silahkan tekan Langkah selanjutnya untuk tahap berikutnya.'
    document.getElementById("check").checked = true;
    document.getElementById("berhasil").style = "left: 0;"
  }
  else if(detik<=50){
    document.getElementById("teksBerhasil").innerHTML = 'Kamu berhasil menyelesaikan '+level+' ini selama '+detik+' detik. Tekan Langkah selanjutnya untuk tahap berikutnya.'
    document.getElementById("check").checked = true;
    document.getElementById("berhasil").style = "left: 0;"
  }
  else if(detik>50){
    document.getElementById("teksBerhasil").innerHTML = 'Kamu berhasil menyelesaikan '+level+' ini selama '+detik+' detik. Sebaiknya kamu mengulang Langkah ini sampai paling tidak selesai dalam 40 detik. Namun, jika ingin melihat tahap selanjutkan silahkan tekan Langkah berikutnya.'
    document.getElementById("check").checked = true;
    document.getElementById("berhasil").style = "left: 0;"
  }
}