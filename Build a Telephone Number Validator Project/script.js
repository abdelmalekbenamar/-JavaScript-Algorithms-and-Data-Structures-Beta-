const check = document.getElementById('check-btn');
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const number = document.getElementById("user-input");

check.onclick = () => {
  if(number.innerText === ""){
    alert("Please provide a phone number");
  }
}

clear.onclick = () =>{
  result.textContent = "";
}

check.onclick = () => {
    let regex = /(^1\s[1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$|^1\s\([1-9][1-9][1-9]\)\s[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$|^1\([1-9][1-9][1-9]\)[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$|^1\s[1-9][1-9][1-9]\s[1-9][1-9][1-9]\s[1-9][1-9][1-9][1-9]$|^[1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9][1-9]$|^[1-9][1-9][1-9]-[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$|^\([1-9][1-9][1-9]\)[1-9][1-9][1-9]-[1-9][1-9][1-9][1-9]$)/;

    if(number.value ===""){
      alert("Please provide a phone number");
    }else{
      if(regex.test(number.value)){
        result.textContent = "Valid US number: " + number.value;
    }else{
        result.textContent = "Invalid US number: " + number.value
    }
    }
}