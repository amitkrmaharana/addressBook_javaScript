class AddressBook {

    constructor(...params) {
        this.first_name = params[0];
        this.last_name = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_number = params[6];
        this.email = params[7];
    }

    get first_name() { return this._first_name; }
    get last_name() { return this._last_name; }
    get address() { return this._address; }
    get city() { return this._city; }
    get state() { return this._state; }
    get zip() { return this._zip; }
    get phone_number() { return this._phone_number; }
    get email() { return this._email; }

    set first_name(first_name) {
        let first_nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (first_nameRegex.test(first_name)) {
            this._first_name = first_name;
        }
        else throw 'First Name is Incorrect!';
    }
    set last_name(last_name) {
        let last_nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (last_nameRegex.test(last_name)) {
            this._last_name = last_name;
        }
        else throw 'Last Name is Incorrect!';
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw 'Address is Incorrect!';
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else throw 'City is Incorrect!';
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else throw 'State is Incorrect!';
    }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[\s]*[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else throw 'Zip is Incorrect!';
    }
    set phone_number(phone_number) {
        let phone_numberRegix = RegExp('[9][1][-][6-9]{1}[0-9]{9}$');
        if (phone_numberRegix.test(phone_number)) {
            this._phone_number = phone_number;
        }
        else throw 'Phone Number is Incorrect!';
    }
    set email(email) {
        let emailRegix = RegExp('^[a-zA-Z0-9]{3,}([\.\+\-]?[a-zA-Z0-9]{3,})?[@][A-Za-z0-9]{1,}[.][A-Za-z]{2,4}[,]?([.][A-Za-z]{2,4}[.]?)?$');
        if (emailRegix.test(email)) {
            this._email = email;
        }
        else throw 'Email is Incorrect!';
    }

    toString() {
        return "First Name = " + this.first_name + ", Last Name = " + this.last_name + ", Address = " + this.address +
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " + this.phone_number +
            ", Email = " + this.email;
    }
}

let addressbookArr = new Array();
let addressbook1 = new AddressBook("Amit", "Kumar", "Ptype", "Jamshedpur", "Jharkhand", 831004, "91-8210029078","ak657harley@gmail.com");
let addressbook2 = new AddressBook("Abhishek","Kulkarni","Ztype","Khurda","Odisha",725445,"91-7892563654","abhi12@gmail.com");
addressbookArr.push(addressbook1.toString());
addressbookArr.push(addressbook2.toString());
console.log(addressbookArr);