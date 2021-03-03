function compoundInterest(principal, interest ,nyear ) {
    principal = document.getElementById("getPrincipalValue").value;
    interest = document.getElementById("getInterestRate").value;
    nyear = document.getElementById("getYear").value;
    var resultCompound  = ( principal* Math.pow((1 + (interest/(100))), (nyear)))-principal;
    document.getElementById("outputPrincipal").innerHTML = "Principal Enter is " + principal;
    document.getElementById("outputInterest").innerHTML = "Interest Enter is " + interest;
    document.getElementById("outputInterest").innerHTML = "Number of Years Enter " + nyear;
    document.getElementById("compounded").innerHTML = "Compound interest " + resultCompound;
    }