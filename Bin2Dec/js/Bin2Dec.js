(function () {

  //  const convertButton = document.querySelector('[data-input="convert"]');
  const inputData = document.querySelector('[data-input="input"]');
  const spanResult = document.querySelector('[data-result="result"]');
  const spanError = document.querySelector('[data-span="error"]');
  const formInput = document.querySelector('[data-formulario="form"]');
  //const fields = document.querySelectorAll('[required]');

  formInput.addEventListener('submit', convert);
  inputData.addEventListener('keydown', verifyContent);

  function verifyContent(evt) {
    //console.log(evt.code)
    if (evt.code != 'Digit1' && evt.code != 'Digit0') {
      //evt.preventDefault();
      spanError.innerHTML = "Digito incorreto"
      console.log('valor incorreto')
    } else {
      spanError.innerHTML = "";
      console.log(evt.code)
    }



  }

  function convert(evt) {
    console.log('foi')
    evt.preventDefault();
    if (inputData.value) {
      spanResult.innerHTML = Bin2Dec(inputData.value);
    } else {
      console.log('erro')
    }

  }



  function isBinaryNumber(number) { }
  function Bin2Dec(binaryNumber) {

    var decimal = binaryNumber.split('').reverse().reduce(function (acumulated, currentvalue, index) {

      return acumulated += (Math.pow(2, index) * currentvalue);

    }, 0)

    return decimal;
  }
  //console.log(Bin2Dec(num));
})();
