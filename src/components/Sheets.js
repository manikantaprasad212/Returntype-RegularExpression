import React, { useEffect, useRef } from 'react';

function Sheets() {
    
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hindiInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let resultParaRef = useRef();
    let emailInputRef=useRef();
    let passwordInputRef=useRef();
    let phoneInputRef=useRef();
    let firstNameRegEx = /^[A-Z][a-z]{1,24}(\s[A-Z][a-z]{1,24})*$/;
    let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{12,}$/;
    let phoneRegEx = /^(\+91)?(\d{10}|\d{3,4}[- ]?\d{6,8})$/;

    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let telResultRef = useRef();
    let engResultRef = useRef();
    let hindiResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();
    let emailResultRef=useRef();
    let passwordResultRef=useRef();
    let phoneResultRef=useRef();


    let validateName=(namestr,resultRef)=>{
let result=firstNameRegEx.test(namestr);
if(result == true){
resultRef.current.innerHTML="Valid"
resultRef.current.style.backgroundColor="green"
}else{
resultRef.current.innerHTML="Invalid"
resultRef.current.style.backgroundColor="red"
}
 }
 let validateEmail=(emailstr,resultRef)=>{
    let result=emailRegEx.test(emailstr);
    if(result == true){
    resultRef.current.innerHTML="Valid"
    resultRef.current.style.backgroundColor="green"
    }else{
    resultRef.current.innerHTML="Invalid"
    resultRef.current.style.backgroundColor="red"
    }
     }
     let validatePassword=(passwordstr,resultRef)=>{
        let result=passwordRegEx.test(passwordstr);
        if(result == true){
        resultRef.current.innerHTML="Valid"
        resultRef.current.style.backgroundColor="green"
        }else{
        resultRef.current.innerHTML="Invalid"
        resultRef.current.style.backgroundColor="red"
        }
         }
         let validatePhone=(phonestr,resultRef)=>{
            let result=phoneRegEx.test(phonestr);
            if(result == true){
            resultRef.current.innerHTML="Valid"
            resultRef.current.style.backgroundColor="green"
            }else{
            resultRef.current.innerHTML="Invalid"
            resultRef.current.style.backgroundColor="red"
            }
             }

    let firstNameonFocus=()=>{
firstNameInputRef.current.style.backgroundColor="yellow"
    }
    let firstNameonChange=()=>{
        console.log("First Name-onChange");
        firstNameInputRef.current.style.backgroundColor="green"
        firstNameInputRef.current.style.color="black"
    }
    let firstNameonBlur=()=>{
        console.log("firstName-onBlur");
         firstNameInputRef.current.style.backgroundColor="red"
    }


    let lastNameonFocus=()=>{
        lastNameInputRef.current.style.backgroundColor="yellow"
            }
            let lastNameonChange=()=>{
                console.log("last Name-onChange");
                lastNameInputRef.current.style.backgroundColor="green"
                lastNameInputRef.current.style.color="black"
            }
            let lastNameonBlur=()=>{
                console.log("lastName-onBlur");
                lastNameInputRef.current.style.backgroundColor="red"
            }



            let emailonFocus=()=>{
                emailInputRef.current.style.backgroundColor="yellow"
                    }
                    let emailonChange=()=>{
                        console.log("First Name-onChange");
                        emailInputRef.current.style.backgroundColor="green"
                        emailInputRef.current.style.color="black"
                    }
                    let emailonBlur=()=>{
                        console.log("firstName-onBlur");
                         emailInputRef.current.style.backgroundColor="red"
                    }
                    let passwordonFocus=()=>{
                        passwordInputRef.current.style.backgroundColor="yellow"
                            }
                            let passwordonChange=()=>{
                                console.log("First Name-onChange");
                                passwordInputRef.current.style.backgroundColor="green"
                                passwordInputRef.current.style.color="black"
                            }
                            let passwordonBlur=()=>{
                                console.log("firstName-onBlur");
                                 passwordInputRef.current.style.backgroundColor="red"
                            }
                            let phoneonFocus=()=>{
                                phoneInputRef.current.style.backgroundColor="yellow"
                                    }
                                    let phoneonChange=()=>{
                                        console.log("First Name-onChange");
                                        phoneInputRef.current.style.backgroundColor="green"
                                        phoneInputRef.current.style.color="black"
                                    }
                                    let phoneonBlur=()=>{
                                        console.log("firstName-onBlur");
                                         phoneInputRef.current.style.backgroundColor="red"
                                    }
    let telonFocus=()=>{
        console.log("Telugu-onFocus");
         telInputRef.current.style.backgroundColor="yellow"
    }

    let telonChange=()=>{

        telInputRef.current.style.backgroundColor="green"
        telInputRef.current.style.color="black"
        if(telInputRef.current.value>= 0 &&
            telInputRef.current.value <= 100
           ){
 

        if(telInputRef.current.value>=35){
        telResultRef.current.innerHTML ="Pass";
        telResultRef.current.style.backgroundColor = "green";
    }else{
        telResultRef.current.innerHTML ="Fail";
        telResultRef.current.style.backgroundColor = "red";
    }

}else{
telResultRef.current.innerHTML ="Invalid";
        telResultRef.current.style.backgroundColor = "purple";
    
   }
    }
    let telonBlur=()=>{
console.log("Telgu-onBlur");
         telInputRef.current.style.backgroundColor="red"
    }

    let hindionFocus=()=>{
console.log("Hindi-onFocus");
          hindiInputRef.current.style.backgroundColor="yellow"
    }
    let hindionChnage=()=>{
        hindiInputRef.current.style.backgroundColor="green"
        hindiInputRef.current.style.color="black"
        if(hindiInputRef.current.value>= 0 &&
            hindiInputRef.current.value <= 100
           ){

        if(hindiInputRef.current.value>=35){
        hindiResultRef.current.innerHTML ="😀";
        
    }else{
        hindiResultRef.current.innerHTML ="😞";
        
    }
}else{
    hindiResultRef.current.innerHTML ="Invalid";
        hindiResultRef.current.style.backgroundColor = "orange";
    
   }
    }

    let hindionBlur=()=>{
console.log("Hindi-onBlur");
           hindiInputRef.current.style.backgroundColor="red"
    }

    let mathsonFocus=()=>{
             console.log("Maths-onFocus");
          mathsInputRef.current.style.backgroundColor="yellow"
    }
    let mathsonChange=()=>{
     mathsInputRef.current.style.backgroundColor="green"
     mathsInputRef.current.style.color="black"
        if(mathsInputRef.current.value>= 0 &&
            mathsInputRef.current.value <= 100
           ){
        
        if(mathsInputRef.current.value>=35){
        mathsResultRef.current.innerHTML ="Excellent";
        
    }else{
        mathsResultRef.current.innerHTML ="Next Time";
        
    }

}else{
    mathsResultRef.current.innerHTML ="Invalid";
        mathsResultRef.current.style.backgroundColor = "purple";
    
   }
    }
    let mathsonBlur=()=>{
         console.log("Maths-onBlur");
           mathsInputRef.current.style.backgroundColor="red"

    }
    let scionFocus=()=>{
        console.log("Science-onFocus");
         sciInputRef.current.style.backgroundColor="yellow"
    }
    let scionChange=()=>{

        sciInputRef.current.style.backgroundColor="green"
        sciInputRef.current.style.color="black"
        if(sciInputRef.current.value>= 0 &&
            sciInputRef.current.value <= 100
           ){

        if(sciInputRef.current.value>=35){
            sciResultRef.current.innerHTML ="Pass";
            
        }else{
            sciResultRef.current.innerHTML ="Fail";
            
        }

    }else{
        sciResultRef.current.innerHTML ="Invalid";
            sciResultRef.current.style.backgroundColor = "purple";
        
       }

    }

    let scionBlur=()=>{
        console.log("Science-onBlur");
           sciInputRef.current.style.backgroundColor="red"
    }
    let soconFocus=()=>{
        socInputRef.current.style.backgroundColor="yellow"

    }

    let soconChange=()=>{
        socInputRef.current.style.backgroundColor="green"
        socInputRef.current.style.color="black"
        if(socInputRef.current.value>= 0 &&
            socInputRef.current.value <= 100
           ){

        if(socInputRef.current.value>=35){
        socResultRef.current.innerHTML ="Pass";
        socResultRef.current.style.backgroundColor = "green";
    }else{
        socResultRef.current.innerHTML ="Fail";
        socResultRef.current.style.backgroundColor = "red";
    }

}else{
    socResultRef.current.innerHTML ="Invalid";
        socResultRef.current.style.backgroundColor = "purple";
    
   }
    }

    let soconBlur=()=>{
 socInputRef.current.style.backgroundColor="red"
    }

    let engonFocus=()=>{
        console.log("English-onFocus");
         engInputRef.current.style.backgroundColor="yellow"

    }
    let engonChange=()=>{
        engInputRef.current.style.backgroundColor="green"
        engInputRef.current.style.color="black"
        if(engInputRef.current.value>= 0 &&
            engInputRef.current.value <= 100
           ){
            
          if(engInputRef.current.value>=35){
        engResultRef.current.innerHTML ="Pass";
        engResultRef.current.style.color = "green";
    }else{
        engResultRef.current.innerHTML ="Fail";
        engResultRef.current.style.color = "red";
    }

}else{
    engResultRef.current.innerHTML ="Invalid";
        engResultRef.current.style.backgroundColor = "purple";
    
   }


    }
    let engonBlur=()=>{
         console.log("English-onBlur");
         engInputRef.current.style.backgroundColor="Red"

    }

    useEffect(()=>{
      //alert("Welcome to the mark sheet page");
    },[])




    let prasadDegreeDetails=(numMarks,mathMarks,appMarks,eleMarks,dataMarks,pythonMarks)=>{

        let totalmarks=numMarks+mathMarks+appMarks+eleMarks+dataMarks+pythonMarks ;
let passMarks=35;
let percentage=(totalmarks/600)*100;
let result;
        let a=totalmarks;
        if(numMarks>=passMarks || mathMarks>=passMarks || appMarks>=passMarks || dataMarks>=passMarks || eleMarks>=passMarks || pythonMarks>=passMarks){
result="passed"
        }else{
result="failed"
        }

        let summary={ a:totalmarks,result:result,perc:percentage}
        return summary;
    }
    let result=prasadDegreeDetails(90,63,84,60,83,89);
 console.log(result);
 
    return (
  <div>
  <form >
    <h2>Marks sheets</h2>
  
    <div>
        <label>First Name:</label>
        <input type="text" ref={firstNameInputRef}
        onFocus={()=>{
firstNameonFocus();
        }} onChange={()=>{
            validateName(firstNameInputRef.current.value,firstNameResultRef);
        }} onBlur={()=>{
            firstNameonBlur();
        }}></input>
        <span ref={firstNameResultRef}></span>
     </div>
     <div>
        <label>Last Name:</label>
        <input type="text" ref={lastNameInputRef }onFocus={()=>{
            lastNameonFocus();

        }} onChange={()=>{
validateName(lastNameInputRef.current.value,lastNameResultRef);
        }} onBlur={()=>{
            lastNameonBlur();
        }}></input>
        <span ref={lastNameResultRef}></span>
     </div>
     <div>
        <label>Email Address:</label>
        <input type="text" ref={emailInputRef }onFocus={()=>{
           emailonFocus();

        }} onChange={()=>{
validateEmail(emailInputRef.current.value,emailResultRef);
        }} onBlur={()=>{
          emailonBlur();
        }}></input>
        <span ref={emailResultRef}></span>
     </div>
     <div>
        <label>Password:</label>
        <input type="text" ref={passwordInputRef }onFocus={()=>{
            passwordonFocus();

        }} onChange={()=>{
validatePassword(passwordInputRef.current.value,passwordResultRef);
        }} onBlur={()=>{
            passwordonBlur();
        }}></input>
        <span ref={passwordResultRef}></span>
     </div>
     <div>
        <label>Phone:</label>
        <input type="text" ref={phoneInputRef }onFocus={()=>{
            phoneonFocus();

        }} onChange={()=>{
validatePhone(phoneInputRef.current.value,phoneResultRef);
        }} onBlur={()=>{
            phoneonBlur();
        }}></input>
        <span ref={phoneResultRef}></span>
     </div>
     <div>
        <label>Telugu</label>
        <input type="number" ref={telInputRef}
        onFocus={()=>{
telonFocus();
        }} onChange={()=>{
telonChange();

            
        }} onBlur={()=>{
            telonBlur();
        }}></input>
        <span ref={telResultRef}></span>
     </div>
     <div>
        <label>English</label>
        <input type="number" ref={engInputRef}onFocus={()=>{
            engonFocus();

        }} onChange={()=>{
            
           engonChange();
        }} onBlur={()=>{
            engonBlur();
           
        }}></input>
        <span ref={engResultRef}></span>
     </div>
     <div>
        <label>Hindi</label>
        <input type="number" ref={hindiInputRef}
        onFocus={()=>{
hindionFocus();
        }} onChange={()=>{
            
           hindionChnage();

        }} onBlur={()=>{
            hindionBlur();
        }}></input>
        <span ref={hindiResultRef}></span>
     </div>
     <div>
        <label>Maths</label>
        <input type="number" ref={mathsInputRef}
        onFocus={()=>{
            mathsonFocus();
        }} onChange={()=>{
            mathsonChange();

        }} onBlur={()=>{
           mathsonBlur();
        }}></input>
        <span ref={mathsResultRef}></span>
     </div>
     <div>
        <label>Science</label>
        <input type="number"ref={sciInputRef} 
        onFocus={()=>{
scionFocus();
        }} onChange={()=>{
scionChange();
            
        }} onBlur={()=>{
scionBlur();
        }}></input>
        <span ref={sciResultRef}></span>
     </div>

     <div>
        <label>Social</label>
        <input type="number" ref={socInputRef}
        onFocus={()=>{
            console.log("Social-onFocus");
        soconFocus();
        }} onChange={()=>{
            soconChange();  

        }} onBlur={()=>{console.log("Social-onBlur");
          
           soconBlur();
        }}></input>
        <span ref={socResultRef}></span>
     </div>
     
     <div>
        <button type="button" onClick={()=>{
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let telMarks = Number(telInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let hindiMarks = Number(hindiInputRef.current.value);
            let mathsMarks = Number(mathsInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);

            let totalMarks = telMarks+engMarks+hindiMarks+mathsMarks+sciMarks+socMarks;
          
              let result;

            if(telMarks< 35|| engMarks< 35|| hindiMarks< 35|| mathsMarks< 35|| sciMarks< 35|| socMarks< 35){
                result = "Failed";
            }else{
                 result = "Passed"
            }

          //alert(enginputRef.current.value);
          alert(`Total Marks are ${totalMarks}`);
          resultParaRef.current.innerHTML = `${firstName} ${lastName} ${ result}  in ssc got total Marks of ${totalMarks}`;
          console.log(totalMarks);


        }}>Calculate Result</button>
     </div>
    <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
    </form>
    
    </div>
  )
}

export default Sheets