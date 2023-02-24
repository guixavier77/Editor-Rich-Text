let textarea = document.getElementById("txt");
let divarea = document.getElementById("txtSecond");
let selectedText = "";
let mutation = " ";
let currentValue;
let startselectedText;
let endSelectedText;

const getValueChange = () => {
  currentValue = textarea.value;
};

textarea.addEventListener("input", getValueChange);

const getValueSelected = (evt) => {
  const el = evt.currentTarget;
  let selText = el.value.substr(
    el.selectionStart,
    el.selectionEnd - el.selectionStart,
  );
  selectedText = selText;
  startselectedText = el.selectionStart;
  endSelectedText = el.selectionEnd;
};

textarea.addEventListener("mouseup", getValueSelected);

const buttonItalic = document.querySelector(".italic");
const buttonUnderline = document.querySelector(".underline");
const buttonQuote = document.querySelector(".quote");

const transformFontBold = () => {
  const buttonBold = document.querySelector(".bold");
  const boldAction = (e) => {
    e.preventDefault();
    if (!textarea.value) alert("Digite algo");
    currentValue = currentValue.substring(0, startselectedText) + "#";
    activeContent();
  };
  buttonBold.addEventListener("click", boldAction);
};

const transformFontSize = () => {
  const buttonSize = document.querySelector(".size");
  const selectionFontSize = () => {
    const fontSize = [
      8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,
    ];
    for (var i = 0; i < fontSize.length; i++) {
      buttonSize.innerHTML += `<option value='${fontSize[i]}'>${fontSize[i]}</option>`;
    }
  };

  const getSelectValue = () => {
    buttonSize.onchange = () => {
      return buttonSize.value;
    };
  };
  getSelectValue();
  selectionFontSize();
};
transformFontBold();
transformFontSize();

const activeContent = () => {
  divarea.classList.remove("hiden");
  divarea.innerText = textarea.value;
  textarea.classList.add("hiden");
};
// IDEIA
