const averageMark = 79
switch (true) {
  case averageMark < 60:
    console.log('Unsatisfactorily');
    break;
  case averageMark < 71:
    console.log('Satisfactorily');
    break;
  case averageMark < 81:
    console.log('Good');
    break;
  case averageMark < 91:
    console.log('Very good');
    break;
  case averageMark < 101:
    console.log('Perfect');
    break;
  default:
    console.log('Not a number'); // If 'averageMark' is a string
}


