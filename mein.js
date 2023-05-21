function buttons(number){
    var screen = document.getElementById('screen');
    screen.value +=number;
  }
  function operater(opr) {
    var result = document.getElementById('screen');
    result.value += opr;
  }

  function calculate() {
    var calculat = document.getElementById('screen');
    calculat.value = eval(calculat.value);
  }
  function clearData() {
    var clear = document.getElementById('screen');
    clear.value = '';
  }