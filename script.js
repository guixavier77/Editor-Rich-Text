let textarea = document.getElementById("txt");
let divarea = document.getElementById("txtSecond");
let selectedText;
let currentValue;
let startselectedText;
let endSelectedText;
let startWrapText;
let endWrapText;

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

const getWrapText = () => {
  startWrapText = currentValue.slice(0, startselectedText);
  endWrapText = currentValue.slice(endSelectedText, currentValue.length);
};
const insertElement = (tagClass) => {
  getWrapText();
  divarea.innerHTML += `<p> ${startWrapText}<span class='${tagClass}'>${selectedText}</span>${endWrapText}</p>`;
};

const transformFontBold = () => {
  const buttonBold = document.querySelector(".bold");
  const boldAction = (e) => {
    e.preventDefault();
    if (!textarea.value) alert("Digite algo");
    insertElement("strong");
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

const transformFontItalic = () => {
  const buttonItalic = document.querySelector(".italic");
  const italicAction = (e) => {
    e.preventDefault();
    if (!textarea.value) alert("Digite algo");
    insertElement("italic");
  };
  buttonItalic.addEventListener("click", italicAction);
};

const transformFontUnderline = () => {
  const buttonUnderline = document.querySelector(".underline");
  const underlineAction = (e) => {
    e.preventDefault();
    if (!textarea.value) alert("Digite algo");
    insertElement("underline");
  };
  buttonUnderline.addEventListener("click", underlineAction);
};
transformFontBold();
transformFontSize();
transformFontItalic();
transformFontUnderline();

//
