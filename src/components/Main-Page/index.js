// Dependencies
import React from 'react'
// Internals
import 'components/Main-Page/index.css'

export default function App() {
  return (
    <div className="App">
      <h2>Programming Challenge</h2>
      <button onClick={random}>Generate</button>
      <button onClick={txtFile} id="download">Download Result</button>
      <span id="result"></span>
    </div>
  )
}

function randomAlphanumerics() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomString() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomInteger() {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function randomReal() {
    var result = [];
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i <= length; i++ ) {
      result.push(Math.random() * length);
  }
  return result;
}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function random() {
    var result = [];
    var length = Math.floor((Math.random() * 100) + 1);

    for ( var i = 0; i < length; i++ ) {
      result.push(randomString(), randomAlphanumerics(), randomInteger(), randomReal());
    }
    
    shuffle(result)
    document.getElementById("result").innerHTML = result;
    document.getElementById("download").style.visibility = 'visible';
}

function txtFile() {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('result').innerHTML], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}