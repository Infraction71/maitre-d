function getGrndTotal(){


    let subTotal = parseFloat(document.getElementById("subTotal").value);
    console.log("Testing. Is this actually working?");
    let tip = parseFloat(document.getElementById("tip").value);
    tip /=100; //taking tip in as a percentage, NOT a decimal
    const TAX = .055; //Setting variable in case tax chnages. This is Missouri so that's a joke obviously. 
    if (subTotal == "" || tip == ""){
        alert("Please make sure both fields have appropriate values"); //Error checking
    }
    //Printing stuff
    document.getElementById("tipOut").innerHTML = "Tip: $" + subTotal*tip;
    document.getElementById("taxOut").innerHTML = "Tax: $" + subTotal*TAX;
    let tipValOut = subTotal*tip;
    document.getElementById("grandTotal").innerHTML = "Grand Total: $" + ((subTotal+(subTotal*TAX))+tipValOut);
    
}