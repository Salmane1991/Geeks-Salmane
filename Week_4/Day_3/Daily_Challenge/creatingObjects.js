let parameters = [];

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
        parameters.push(this);
    }
    watch() {
        console.log(`${this.uploader} watched all the ${this.time} seconds of the ${this.title}`)
    }
}

let firstUp = new Video("funncy clip", "Salmane", 50);
// firstUp.watch();
let secondUp = new Video("short clip", "Zaid", 20)
// secondUp.watch()
// console.log(parameters)

let allValues = parameters.map(obj => Object.values(obj));
console.log(allValues)

allValues.forEach((element, index) => {

    console.log(`Video${index + 1}= new Video("${element[0]}","${element[1]}",${element[2]})`)


});




