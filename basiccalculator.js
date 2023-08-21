<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Calculator</title>
</head>
<body>
    <script>
        function Calculator(a,b,operator){
            switch(operator){
                case '+':{
                    console.log("The result of sum is "+sum(a,b));
                }
                case '-':{
                    console.log("The result of subtract is "+subtract(a,b));
                }
                case '*':{
                    console.log("The result of product is "+product(a,b));
                }
                case '/':{
                    console.log("The result of division is "+divide(a,b));
                }
            }

        }
        const sum = (a,b) =>{
            let result=a+b;
            return result;
        }
        const subtract =(a,b) =>{
            let result=a-b;
            return result;
        }
        const product = (a,b) =>{
            let result=a*b;
            return result;
        }
        const divide =(a,b) => {
            let result= a/b;
            return result;
        }
        Calculator(3,2,'+');
        //console.log(result);
    </script>
</body>
</html>
