const transformFontBold = () => {
  const buttonBold = document.querySelector(".bold");
  const boldAction = (e) => {
    e.preventDefault();
  };
  buttonBold.addEventListener("click", boldAction);
};

const buttonItalic = document.querySelector(".italic");
const buttonUnderline = document.querySelector(".underline");
const buttonQuote = document.querySelector(".quote");

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
transformFontSize();
transformFontBold();
