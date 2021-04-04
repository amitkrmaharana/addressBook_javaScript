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

    toString() {
        return "First Name=" + this.first_name + "\nLast Name=" + this.last_name + "\nAddress=" + this.address +
            "\nCity=" + this.city + "\nState=" + this.state + "\nZip=" + this.zip + "\nPhone Number=" + this.phone_number +
            "\nEmail=" + this.email;
    }
}


let addressbook = new AddressBook("Amit","Kumar","p-type","Jamshedpur","Jharkhand",831004,8210029078,"ak657harley@gmail.com");
console.log(addressbook.toString());