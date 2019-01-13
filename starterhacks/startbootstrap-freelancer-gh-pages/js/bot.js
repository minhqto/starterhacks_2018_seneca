

function validator(){
    if(document.engine.good.checked && document.engine.bad.checked){
       alert("Invalid response")
    }
      else  if(document.engine.good.checked){
        document.getElementById("choice").innerHTML = "good"
        }else if(document.engine.bad.checked){
            document.getElementById("choice").innerHTML = "seek medical attention"

        }
    }
