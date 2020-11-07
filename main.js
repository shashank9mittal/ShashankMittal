let content = [
    "make internet look beautiful",
    "Front-End Developer",
    "an aspiring Designer",
  ];
  let part = 0;
  let partIndex = 0;
  let intervalVal;
  let element;
  let cursor;


let initialize = function() {
    element = document.querySelector("#text");
    cursor = document.querySelector("#cursor");
    // this.typing();
    // this.initialize();
    intervalVal = setInterval(() => {
    typing();
    }, 100);
}

// Implements typing effect
let typing = function() {
    // Get substring with 1 characater added
    let text = content[part].substring(0, partIndex + 1);
    element.innerHTML = text;
    partIndex++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === content[part]) {
      // Hide the cursor
      cursor.style.display = 'none';

      clearInterval(intervalVal);
      setTimeout(() => {
        intervalVal = setInterval(() => {
          deleteTyping();
        }, 50);
      }, 1000);
    }
  }

// Implements deleting effect
   function deleteTyping() {
    // Get substring with 1 characater deleted
    let text = content[part].substring(0, partIndex - 1);
    element.innerHTML = text;
    partIndex--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
      clearInterval(intervalVal);

      // If current sentence was last then display the first one, else move to the next
      if (part == (content.length - 1))
        part = 0;
      else
        part++;

      partIndex = 0;

      // Start to display the next sentence after some time
      setTimeout(() => {
        cursor.style.display = 'inline-block';
        intervalVal = setInterval(() => {
          typing();
        }, 100);
      }, 200);
    }
  }
  
  document.getElementById("typing"),addEventListener('load', initialize);
