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
        stringReport: 0,
        realReport: 0,
        integersReport: 0,
        alphanumericsReport: 0,
    } 

    randomString = () => {
        // Initialize
        var result              = '';
        var report              = ''; 

        // Get length for loop
        var charactersLength    = this.state.string.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));

        // Loop for total number of strings object
        for ( var j = 0; j < loopLength; j++ ){

            // Loop for total number of character each strings object
            for ( var i = 0; i < loopLength; i++){

                // Get character
                result += this.state.string.charAt(Math.floor(Math.random() * charactersLength));
            }

            // Add comma to separated strings object
            result += ",";

            // Store the total number of strings object
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
        // Initialize
        var result              = '';
        var report              = ''; 

        // Get length for loop
        var loopLength          = Math.floor((Math.random() * 10));

        // Loop for total number of real numbers object
        for ( var i = 0; i <= loopLength; i++ ){

            // Get character
            result += (Math.random() * loopLength) + ", ";

            // Store the total number of real numbers object
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
        // Initialize
        var result              = '';
        var report              = ''; 

        // Get length for loop
        var charactersLength    = this.state.integers.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));

        // Loop for total number of integers object
        for ( var j = 0; j < loopLength; j++){

            // Loop for total number of character each integers object
            for ( var i = 0; i < loopLength; i++){

                // Get character
                result += this.state.integers.charAt(Math.floor(Math.random() * charactersLength));
            }

            // Add comma to separated integers object
            result += ",";

            // Store the total number of integers object
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
        // Initialize
        var result              = '';
        var report              = ''; 

        // Get length for loop
        var charactersLength    = this.state.alphanumerics.length;
        var loopLength          = Math.floor((Math.random() * charactersLength));

        // Loop for total number of alphanumerics object
        for ( var j = 0; j < loopLength; j++ ){

            // Loop for total number of character each alphanumerics object
            for ( var i = 0; i < loopLength; i++ ){

                // Get character
                result += this.state.alphanumerics.charAt(Math.floor(Math.random() * charactersLength));
            }

            // Add comma to separated alphanumerics object
            result += ",";

            // Store the total number of alphanumerics object
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
        // Initialize
      var currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle
      while (0 !== currentIndex) {
    
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // Swap the current element
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    generate = () => {
        // Initialize
        var tempResult              = [];

        // Loop for random objects by checking size of output file
        while(this.check(tempResult) <= 2097152) {

            // Get character and store to temporary result
            tempResult.push(
                this.randomString(),
                this.randomReal(),
                this.randomInteger(),
                this.randomAlphanumerics());

            // Shuffle temporary result
            this.shuffle(tempResult);
        }

        // Successful Alert 
        alert("Successfully Generated");

        // Assign result and trigger
        this.setState({
            result: tempResult,
            trigger: 1
        });
    }

    check = (tempData) => {
        // Create file text using temporary result
        const file = new Blob(tempData, {type: 'text/plain'});

        // Get size of file
        const size = file.size;

        return size;
    }

    save = () => {
        // Create link button element
        const element = document.createElement("a");

        // Create file text using result
        const file = new Blob(this.state.result, {type: 'text/plain'});

        // Config element
        element.href = URL.createObjectURL(file);
        element.download = "Random Objects.txt";
        document.body.appendChild(element); // Required for this to work in FireFox

        // Create element event
        element.click();
    }

    display = () => {
        // Assign objects report and trigger
        this.setState({
            stringReport: localStorage.getItem('String'),
            realReport: localStorage.getItem('Real'),
            integersReport: localStorage.getItem('Integers'),
            alphanumericsReport: localStorage.getItem('Alphanumerics'),
            trigger: 2,
        });

        // Delete total numbers of random objects
        localStorage.removeItem('String');
        localStorage.removeItem('Real');
        localStorage.removeItem('Integers');
        localStorage.removeItem('Alphanumerics');
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
