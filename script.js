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

let valueLength = "";
let selectedText = "";
let startselectedText;
let endSelectedText;

let textarea = document.getElementById("txt");

const getValueChange = () => {
  let currentValue = textarea.value;
  valueLength = currentValue.length;
};

const getValueSelected = (evt) => {
  const el = evt.currentTarget;
  const selText = el.value.substr(
    el.selectionStart,
    el.selectionEnd - el.selectionStart,
  );
  selectedText = selText;
  startselectedText = el.selectionStart;
  endSelectedText = el.selectionEnd;
};

textarea.addEventListener("change", getValueChange);
textarea.addEventListener("mouseup", getValueSelected);

// IDEIA

// PEGAR O TAMANHO (LENGTH) DO TEXTO DA MINHA TEXTAREA -> OK -> currentValue
// PEGAR O RAIO E VALOR DO OBJETO SELECIONADO -> OK -> selText, selectionStart e selectionEnd
// APLICAR EFEITO NO 'RAIO'
// SUBSTITUIR A PARTE DO TEXTO EM QUE RAIO ESTA LOCALIZADO, PELO RAIO C/ EFEITO
//setar o value do text area, quando ocorrer a modificação
