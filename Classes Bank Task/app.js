class Rbi{
    constructor(){
        this.intrestRate = 9.0
    }
}

class Hdfc extends Rbi{
    constructor(){
        super();
        this.intrestRate = 9.5;
    }
}

class Sbi extends Rbi{
    constructor(){
        super();
        this.intrestRate = 10.0;
    }
}
class Icici extends Rbi{
    constructor(){
        super();
        this.intrestRate = 10.5;
    }
}
class Cbi extends Rbi{
    constructor(){
        super();
        this.intrestRate = 11.0;
    }
}

const RBI = new Rbi();
const HDFC = new Hdfc();
const SBI = new Sbi();
const  ICICI = new Icici();
const CBI = new Cbi();


console.log(RBI.intrestRate);
console.log(HDFC.intrestRate);
console.log(SBI.intrestRate);
console.log(ICICI.intrestRate);
console.log(CBI.intrestRate);