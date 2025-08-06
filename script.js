const textinput = document.getElementById("text-input");
const checkvalid = document.getElementById("check-text");
const result = document.getElementById("result");
const checkbtn = document.getElementById("check-btn");
const magicbtn = document.getElementById("magic-btn");

const checkforsomething = (text) => {
  if (text ===  ""){
    alert("Please input a value");
    return false;
  }
  else{
  return true;
  }
}
const removespaces = (text) => {
  const regex = text.replace(/[\s_\-\.,():\\/]/g, "").toLowerCase();
  return regex;
}

const palindrome = (text) => {
  let reverse = "";
  for(let i = text.length - 1; i >= 0; i--){
    if("(" === text[i]){
    reverse += ")";
    }
    else if (")" === text[i]){
      reverse += "(";
    }
    else if ("/" === text[i]){
      reverse += '\\';
    }
    else if (`\\` === text[i]){
     reverse += "/";
    }
    else if (`{` === text[i]){
     reverse += "}";
    }
    else if (`}` === text[i]){
     reverse += "{";
    }
    else if (`[` === text[i]){
     reverse += "]";
    }
    else if (`]` === text[i]){
     reverse += "[";
    }
    else if (`>` === text[i]){
     reverse += "<";
    }
    else if (`<` === text[i]){
     reverse += ">";
    }
    else
    {
     reverse += text[i]
    }
  }
  return reverse;
}

const checkforpalindrome = (text) => {
  const reverse = palindrome(text)

  if (reverse === text && reverse !== ""){
    return true;
  }
  else{
    return false;
  }
}

const confirmpalindrome = () => {
  const clean = removespaces(textinput.value);
  if(checkforpalindrome(clean) === checkforsomething(clean)){
   result.textContent = `${textinput.value} is a palindrome`;
   textinput.value = '';
  }
  else{
    result.textContent = `${textinput.value} is not a palindrome`;
    textinput.value = '';
  };
  result.classList.remove("magic");
}

const palidromemagic = () => {
  if(result.textContent.match(/is a palindrome/)){
    result.classList.add("magic");
  }
  else{
    result.textContext = "The Spell did nothing (Spell only work on Palidrome: word that the same when flip)"
  }
}

magicbtn.addEventListener('click',palidromemagic);
checkbtn.addEventListener('click',confirmpalindrome);
