class Worker {
    constructor(fname, lname, title) {
        this._fname = fname;
        this._lname = lname;
        this._title = title;
    }

    display() {
        console.log('*** First Name: ' + this.firstName + ' Last Name:  ' + this.lastName + ' Job Title: ' + this.title);
    }

    get firstName() {
        return this._fname
    }

    set firstName(fname) {
        this._fname = fname;
    }

    get lastName() {
        return this._lname
    }

    set lastName(lname) {
        this._lname = lname;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }
}

export default Worker;