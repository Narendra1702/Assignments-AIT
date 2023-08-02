function taxCalculator(){
   
    var name = document.getElementById("employeeName").value;
    var salary = document.getElementById("employeeSalary").value;

  // salary less than 3lpa no tax deductions
    if(salary <= 300000){
        document.getElementById("deduction1").value = "0";
        document.getElementById("deduction2").value = "0";
        document.getElementById("totalTaxDeduction").value = "0";
        document.getElementById("result").value = name + " your tax is free";    
    }
    // salary is less than that 6lpa tax deductions => 10% over 3lacks
    else if(salary < 600000){
        var deduction1 = 0;
        var deduction2 = (salary-300000) * 0.1;
        var totalTaxDeduction = deduction1 + deduction2;
        document.getElementById("deduction1").value = deduction1;
        document.getElementById("deduction2").value = deduction2;
        document.getElementById("totalTaxDeduction").value = totalTaxDeduction;
        document.getElementById("result").value = name + " your tax amount is " + totalTaxDeduction;
    }
    // salary is greater than 6lpa than tax 20% on excess 
    else if(salary > 600000){
       var deduction1 = 30000;
       var deduction2 = (salary-600000) * 0.2;
       var totalTaxDeduction = deduction1 + deduction2;
       document.getElementById("deduction1").value = deduction1;
       document.getElementById("deduction2").value = deduction2;
       document.getElementById("totalTaxDeduction").value = totalTaxDeduction;
       document.getElementById("result").value = name + " your tax amount is " + totalTaxDeduction;
    }

   
}
function reset(){
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeSalary").value = "";
    document.getElementById("deduction1").value = "";
    document.getElementById("deduction2").value = "";
    document.getElementById("totalTaxDeduction").value = "";
    document.getElementById("result").value = "";
}




