  /*!
    * url goes here
    * version - 0.1
    * licensed under the 'Generl Public License(GPL) - get url for this
    * 
    * Copyright (c) 2018 DeeOkafor
 */
 //alert('obese? is still in its dev stages, you may experience certain behaviours.'.toLowerCase());
 

 /*
    TODO =>
    * give different forms for measurement on radio check
*/
'use strict';
var bmiColorChange = [/*blue*/'#0062FF', /*green*/'#00FFE5', /*red*/'#FF0000', /*dark red*/ '#7B0000'];

 window.onload = function(){
    var form = document.getElementById('bmi');
    var height = document.getElementById('height');
    var weight = document.getElementById('weight');
    var messageBox1 = document.getElementById('messagebox1');
    var messageBox2 = document.getElementById('messagebox2');
    var result = document.getElementById('result');
    var calculate = document.getElementById('button');
    var failColor = '1px solid red';
    var failMsg = 'you can\'t leave this empty!';
    var successColor = '1px solid #00FF8C';
    //var type = document.getElementsByName('units');

    calculate.addEventListener('click', function startCalc(){
       // e.preventDefault();
            if( height.value ==='' || weight.value ==='' ){
                if( height.value =='' ){
                    messageBox1.innerHTML = failMsg;
                    height.style.border = failColor;
                } else {
                    messageBox1.innerHTML = null;
                    height.style.border = successColor;
                }
                if( weight.value =='' ){
                    messageBox2.innerHTML = failMsg;
                    weight.style.border = failColor;
                } else {
                    messageBox1.innerHTML = null;
                    weight.style.border = successColor;
                }
            } else {
                calcBmi();
                resultCheck();
            }
        })
    }

    function calcBmi(){
        var extend = document.getElementById('output-container');
        extend.style.display = 'block';
        var kgms = weight.value / (height.value * height.value);
        result.innerHTML = 'Your BMi is ' + kgms.toFixed(1);
        return kgms;
    }

/*pieces of redundant snippet for test running*/

//code to check returned result and change color of results div as required
 function resultCheck(){
        if(kgms <= 18.5){
            result.style.backgroundColor = bmiColorChange[0];
        }else if((kgms.value > 18.6) <= 25){
            result.style.backgroundColor = bmiColorChange[1];
        }else if((kgms.value > 25.5) <= 30){
            result.style.backgroundColor = bmiColorChange[2];
        }else if(kgms.value >= 30.5){
            result.style.backgroundColor = bmiColorChangee[3];
        }else{
            result.style.backgroundColor = null;
        }
    }


//snippet to loop through radio to check for checked radio
/*function radioChecked(){
        for(var i = 0; i <= type.length; i++){
            if(type[i].checked){
                return i;
            }
        }
    }
*/

//snippet to check for BMi in pounds
/*function getPounds(){
    var pnds = (weight.value / height.value**2)*70;
    message.innerHTML = pnds;
    return pnds;
*/
