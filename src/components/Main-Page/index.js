// Dependencies// Dependencies
import React, { useContext } from 'react';
// Internals
import 'components/Main-Page/index.css'
import { DataContext } from 'components/Context'

export default function App() {
  const context = useContext(DataContext);
  let button;

  console.log(context.trigger);

  if (context.trigger === 1) {
    button = (
      <>
        <button onClick={() => context.save()} id="download">Download Result</button>
        <button  onClick={() => context.display()} id="display">Report</button>
      </>
    );
  }else if (context.trigger === 2) {
    <>
      <button onClick={() => context.save()} id="download">Download Result</button>
      <button  onClick={() => context.display()} id="display">Report</button>
      <h4>Alphabetical String: </h4>
      <h4>Real Numbers: </h4>
      <h4>Integers: </h4>
      <h4>Alphanumerics: </h4>
    </>
  }

  return (
    <div className="App">
      <h2>Programming Challenge</h2>
      <button onClick={() => context.generate()}>Generate</button>
      <span id="result">{context.result}</span>
      {button}
      {/* <button onClick={file} id="download">Download Result</button>
      <button onClick={display} id="display">Report</button> */}
      {/* <div id="report">
        <h4>Alphabetical String <span id="string"></span></h4>
        <h4>Real Numbers <span id="real"></span></h4>
        <h4>Integers <span id="integers"></span></h4>
        <h4>Alphanumerics <span id="alphanumerics"></span></h4>
      </div> */}
    </div>
  )
}

function randomAlphanumerics() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * charactersLength) + 1);
    for ( var j = 0; j < Math.floor((Math.random() * charactersLength) + 1); j++ ){
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      result += ",";
      if (localStorage.getItem("Alphanumerics") === null) {
        localStorage.setItem('Alphanumerics', j);
      }else {
        var report = localStorage.getItem('Alphanumerics');
        report = parseInt(report) + j; 
        localStorage.setItem('Alphanumerics', report);
      }
    }

    return result;
}

function randomString() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * charactersLength) + 1);
    for ( var j = 0; j < Math.floor((Math.random() * charactersLength) + 1); j++ ){
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      result += ",";
      if (localStorage.getItem("String") === null) {
        localStorage.setItem('String', j);
      }else {
        var report = localStorage.getItem('String');
        report = parseInt(report) + j; 
        localStorage.setItem('String', report);
      }
    }
    return result;
}

function randomInteger() {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    var length = Math.floor((Math.random() * charactersLength) + 1);
    for ( var j = 0; j < Math.floor((Math.random() * charactersLength) + 1); j++ ){
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      result += ",";
      if (localStorage.getItem("Integers") === null) {
        localStorage.setItem('Integers', j);
      }else {
        var report = localStorage.getItem('Integers');
        report = parseInt(report) + j; 
        localStorage.setItem('Integers', report);
      }
    }
    return result;
}

function randomReal() {
    var result = [];
    var length = Math.floor((Math.random() * 10) + 1);
    for ( var i = 0; i <= length; i++ ) {
      result.push(Math.random() * length);
      if (localStorage.getItem("Real") === null) {
        localStorage.setItem('Real', i);
      }else {
        var report = localStorage.getItem('Real');
        report = parseInt(report) + i; 
        localStorage.setItem('Real', report);
      }
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
    document.getElementById("display").style.visibility = 'visible';

    // localStorage.removeItem('String');
    // localStorage.removeItem('Real');
    // localStorage.removeItem('Integers');
    // localStorage.removeItem('Alphanumerics');
}

function file() {
  const element = document.createElement("a");
  const file = new Blob([document.getElementById('result').innerHTML], {type: 'text/plain'});
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

function display() {
  document.getElementById("report").style.visibility = 'visible';
  document.getElementById("string").innerHTML = localStorage.getItem('String');
  document.getElementById("real").innerHTML = localStorage.getItem('Real');
  document.getElementById("integers").innerHTML = localStorage.getItem('Integers');
  document.getElementById("alphanumerics").innerHTML = localStorage.getItem('Alphanumerics');
}