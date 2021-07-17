import React, { Component } from 'react'
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        result: [],
        loopLength: Math.floor((Math.random() * 100) + 1),
        alphanumerics: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        string: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        integer: "0123456789",
        trigger: 0,
        alphanumericsReport: 0,
        stringReport: 0,
        integerReport: 0,
        realReport: 0,
    } 

    randomAlphanumerics = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.alphanumerics.length;
        var loopLength          = Math.floor((Math.random() * charactersLength) + 1);
        for ( var j = 0; j < Math.floor((Math.random() * charactersLength) + 1); j++ ){
            for ( var i = 0; i < loopLength; i++ ){
                result += this.state.alphanumerics.charAt(Math.floor(Math.random() * charactersLength));
            }
            result += ",";
            if ( localStorage.getItem('Alphanumerics') === null ){
                localStorage.setItem('Alphanumerics', j);
            }else {
                report = localStorage.getItem('Alphanumerics');
                report = parseInt(report) + j;
                localStorage.setItem('Alphanumerics', report);
            }
        }
        return result;
    }

    randomString = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.string.length;
        var loopLength          = Math.floor((Math.random() * charactersLength) + 1);
        for ( var j = 0; j < Math.floor((Math.random() * charactersLength) + 1); j++ ){
            for ( var i = 0; i < loopLength; i++){
                result += this.state.string.charAt(Math.floor(Math.random() * charactersLength));
            }
            result += ",";
            if (localStorage.getItem('String') === null){
                localStorage.setItem('String', j);
            }else {
                report = localStorage.getItem('String');
                report = parseInt(report) + j;
                localStorage.setItem('String', report);
            }
        }
        return result;
    }

    randomInteger = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.integer.length;
        var loopLength          = Math.floor((Math.random() * charactersLength) + 1);
        for ( var j = 0; j < Math.floor((Math.random() + charactersLength)+ 1); j++){
            for ( var i = 0; i < loopLength; i++){
                result += this.state.integer.charAt(Math.floor(Math.random() * charactersLength));
            }
            result += ",";
            if (localStorage.getItem('Integers') === null) {
                localStorage.setItem('Integers', j);
            }else {
                report = localStorage.getItem('Integers');
                report = parseInt(report) + j;
                localStorage.setItem('Integers', report);
            }
        }
        return result;
    }

    randomReal = () => {
        var result              = '';
        var report              = ''; 
        var loopLength          = Math.floor((Math.random() * 10) + 1);
        for ( var i = 0; i <= loopLength; i++ ){
            result += (Math.random() * loopLength) + ", ";
            if (localStorage.getItem('Real') === null){
                localStorage.setItem('Real', i);
            }else {
                report = localStorage.getItem('Real');
                report = parseInt(report) + i;
                localStorage.setItem('Real', report);
            }
        }
        return result;
    }

    shuffle = (array) => {
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

    generate = () => {
        var tempResult              = [];
        for ( var i = 0; i < this.state.loopLength; i++ ){
            tempResult.push(
                this.randomAlphanumerics(),
                this.randomInteger(),
                this.randomReal(),
                this.randomString()) ;
            this.shuffle(tempResult);
        }
        this.setState({
            result: tempResult,
            trigger: 1
        });
    }

    save = () => {
        const element = document.createElement("a");
        const file = new Blob(this.state.result, {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    display = () => {
        this.setState({
            alphanumericsReport: localStorage.getItem('Alphanumerics'),
            stringReport: localStorage.getItem('String'),
            realReport: localStorage.getItem('Real'),
            integerReport: localStorage.getItem('Integers'),
            trigger: 2,
        });
    }

    render() {
        const contextValue = {
            result: this.state.result,
            trigger: this.state.trigger,
            alphanumericsReport: this.state.alphanumericsReport,
            stringReport: this.state.stringReport,
            realReport: this.state.realReport,
            integerReport: this.state.integerReport,
            generate: this.generate,
            save: this.save,
            display: this.display,
        }
        return (
            <div>
                <DataContext.Provider value={contextValue}>
                    {this.props.children}
                </DataContext.Provider>
            </div>
        )
    }
}
