class Text {
    constructor(logoCharacters,textColor){
        this.logoCharacters = logoCharacters;
        this.textColor = textColor;
    }
    
    charLength(){
        if (this.logoCharacters.length <= 3 && this.logoCharacters.length >= 1){
            return true
        } else {throw new Error("3 Character Max")}
    }

    render(){
        console.log(this.charLength()) // tested method
        if (this.charLength() === true){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoCharacters}</text>`}
        // this will out put the final text
    }
}

module.exports = Text

// const newTxt = new Text("12", "blue")
// console.log(newTxt.render())