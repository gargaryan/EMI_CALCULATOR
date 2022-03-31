function myFunction()
        {
            var pamt=Number(document.getElementById("principalAmount").value);
            var rate_year=Number(document.getElementById("intrestRate").value);
            var time=Number(document.getElementById("tenure").value);
            var result=document.getElementById("result");
             var rate_month=Number(rate_year/1200);
            var emi=(pamt * rate_month * (Math.pow((1 + rate_month), time) / (Math.pow((1 + rate_month), time) - 1)));
            result.style.backgroundColor="yellow";
            result.innerHTML="EMI will be :"+ (emi.toFixed(2));
            
            return false;
            
        }
