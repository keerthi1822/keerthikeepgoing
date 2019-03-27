class Job{
    //set up
    constructor(title, descriptions, startDate,endDate){
        this.title = title;
        this.descriptions = descriptions;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
}

const myJob = new Job("frontend","HTML,CSS,JavaScript","1/1/2017","1/10/2017");
const myJobnow = new Job("frontend","HTML,CSS,JavaScript","1/10/2017","1/10/2018");

class Education{
    constructor(title, school, address, startDate,endDate){
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

const schoolEducation = new Education('schooling','ratnam','12-1gyuhi','1995','2001');
const plus2Education = new Education('plus2','ratnam','12-1gyuhi','2001','2003');


class Cv {
    constructor(jobs, educations, email) {
        this.jobs = jobs;
        this.educations = educations;
        this.email = email;
    }

    addJob(job) {
        
        this.jobs.push(job);
        // Adds a job to the jobs array
        // add functionality here
    }

    removeJob(job) {
        // Removes a job from jobs array
        // add functionality here
    }

    addEducation(education) {
         
        this.educations.push(education);
        // Adds an event to the events array
        // add functionality here
    }

    removeEducation(education) {
        // Adds an event to the events array
        // add functionality here
    }

    getCvOwner() {
        // should return a promise with the user object found from this url: https://jsonplaceholder.typicode.com/users/1
    }

    renderCv() {

    }
    
}

const firstCv = new Cv([],[],"emailid@gmail.com");

console.log(firstCv);
firstCv.addJob("programmer");
console.log(firstCv);
firstCv.addJob("tester");
console.log(firstCv);
firstCv.addEducation(schoolEducation);
console.log(firstCv);
firstCv.addJob(myJob);
firstCv.addJob(myJobnow);

