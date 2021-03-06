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
        loading: true,
        stringReport: 0,
        realReport: 0,
        integersReport: 0,
        alphanumericsReport: 0,
    } 

    // Function to restore trigger and loading
    restore = () => {
        this.setState({
            trigger: 0,
            loading: true
        });
    }
    
    // Function to generate random string objects
    randomString = () => { 
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

    // Function to generate random real numbers objects
    randomReal = () => {
        var result              = '';
        var report              = ''; 

        // Get length for loop
        var loopLength          = Math.floor((Math.random() * 10));

        // Loop for total number of real numbers object
        for ( var i = 0; i <= loopLength; i++ ){

            // Get character
            result += (Math.random() * loopLength) + ",";

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

    // Function to generate random integers objects
    randomInteger = () => {
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

    // Function to generate random alphanumerics objects
    randomAlphanumerics = () => {
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

    // Function to shuffle order of random objects
    shuffle = (array) => {
      var currentIndex = array.length;
      var randomIndex;
    
      // While there remain elements to shuffle
      while (currentIndex !== 0) {
    
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // Swap the current element
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    // Function to generate random objects
    generate = () => {
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

        alert("Successfully Generated");
        this.setState({
            result: tempResult,
            trigger: 1,
            loading: false
        });
    }

    // Function to get file size
    check = (tempData) => {
        const file = new Blob(tempData, {type: 'text/plain'});
        const size = file.size;
        return size;
    }

    // Function to generate file of random objects
    save = () => {
        const element = document.createElement("a");
        const file = new Blob(this.state.result, {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "Random Objects.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    // Function to display total numbers of each random objects
    display = () => {
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
            loading: this.state.loading,
            stringReport: this.state.stringReport,
            realReport: this.state.realReport,
            integersReport: this.state.integersReport,
            alphanumericsReport: this.state.alphanumericsReport,
            restore: this.restore,
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
