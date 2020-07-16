function Student(fname, lname, subjects) {
    this._fname = fname;
    this._lname = lname;
    this._subjects = [...subjects];

    this.display = function () {
        console.log(this._fname, this._lname);
        console.table(this._subjects)
    }
}

Object.defineProperties(Student.prototype, {
    firstName: {
        get: function () {
            return this._fname;
        },
        set: function (value) {
            this._fname = value;
        }
    },
    lastName: {
        get: function () {
            return this._lname;
        },
        set: function (value) {
            this._lname = value;
        }
    }
});

export default Student;


// Object.defineProperty(Student.prototype, 'firstName', {
//     get: function () {
//         return this._fname;
//     },
//     set: function (value) {
//         this._fname = value;
//     }
// });