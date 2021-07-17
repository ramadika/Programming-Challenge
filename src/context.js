import React, { Component } from 'react'
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
        result: [],
        alphanumerics: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        string: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        integers: "0123456789",
        trigger: 0,
        alphanumericsReport: 0,
        stringReport: 0,
        integersReport: 0,
        realReport: 0,
    } 

    randomString = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.string.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));
        for ( var j = 0; j < loopLength; j++ ){
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

    randomInteger = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.integers.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));
        for ( var j = 0; j < loopLength; j++){
            for ( var i = 0; i < loopLength; i++){
                result += this.state.integers.charAt(Math.floor(Math.random() * charactersLength));
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

    randomAlphanumerics = () => {
        var result              = '';
        var report              = ''; 
        var charactersLength    = this.state.alphanumerics.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));
        for ( var j = 0; j < loopLength; j++ ){
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
        var loopLength              = Math.floor((Math.random() * 10) + 1);
        for ( var i = 0; i < loopLength; i++ ){
            tempResult.push(
                this.randomString(),
                this.randomReal(),
                this.randomInteger(),
                this.randomAlphanumerics());
            this.shuffle(tempResult);
            if (this.check(tempResult) <= 2097152){
                loopLength += 1;
            }else {
                alert("Successfully Generated");
                break;
            }
        }
        this.setState({
            result: tempResult,
            trigger: 1
        });
    }

    check = (randomData) => {
        const file = new Blob(randomData, {type: 'text/plain'});
        const size = file.size;
        return size;
    }

    save = () => {
        const element = document.createElement("a");
        const file = new Blob(this.state.result, {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "Random Objects.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    display = () => {
        this.setState({
            stringReport: localStorage.getItem('String'),
            realReport: localStorage.getItem('Real'),
            integersReport: localStorage.getItem('Integers'),
            alphanumericsReport: localStorage.getItem('Alphanumerics'),
            trigger: 2,
        });
        localStorage.removeItem('Alphanumerics');
        localStorage.removeItem('String');
        localStorage.removeItem('Real');
        localStorage.removeItem('Integers');
    }

    render() {
        const contextValue = {
            result: this.state.result,
            trigger: this.state.trigger,
            stringReport: this.state.stringReport,
            realReport: this.state.realReport,
            integersReport: this.state.integersReport,
            alphanumericsReport: this.state.alphanumericsReport,
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
