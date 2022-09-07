//When we have multiple if, we can switch to switch case. ;)

// switch(expression) {
//     case 'value1':  // if (expression == 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (expression == 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
//   }

function activityTime(time){
    switch(time){
        case (7):
            console.log('Brush');
            break;
        case (8):
            console.log('Exercise and Shower');
            break;
        case (9):
            console.log('Breakfast');
            break;
        case (10):
            console.log('Office-meeting');
            break;
        case (12):
            console.log('Lunch');
            break;
        default:
            console.log('Not mentioned.')       
    }
}
activityTime(11);