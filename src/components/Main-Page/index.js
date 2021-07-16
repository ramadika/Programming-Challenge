// Dependencies
import React from 'react'
// Internals
import 'components/Main-Page/index.css'

export default function App() {
  return (
    <div className="App">
      <h2>Programming Challenge</h2>
      <button onClick={random}>Generate</button>
      <h3 id="result">Result</h3>
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
      console.log(result);
  }
  // document.getElementById("result").innerHTML = result;
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
  // document.getElementById("result").innerHTML = result;
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
  // document.getElementById("result").innerHTML = result;
  return result;
}

function randomReal() {
    var result           = '';
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i <= length; i++ ) {
      result += (Math.random() * length) + " , ";
  }
  // document.getElementById("result").innerHTML = result;
  return result;
}

function random() {
    // var result           = '';
    var arr              = [];
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i < length; i++ ) {
      // result += randomString() + " , " + randomAlphanumerics() + " , " +  randomInteger() + " , " + randomReal();
      arr.push(randomString(), randomAlphanumerics(), randomInteger(), randomReal());
  }

  shuffle(arr)
  document.getElementById("result").innerHTML = arr;
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