function scuberGreetingForFeet(feet){
  // gives customers a free sample if the ride is less than or equal to 400 feet
  // if
  // less than or equal
  // 400
  let x = feet;
  if (x <= 400) {
    return "This one is on me!"
  }
  else if (x <= 2000) {
    return "That will be twenty bucks."
  }
  else if (2000 < x && x <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return ('Thank you so much.')
    case 'not as generous':
      return ('Thank you.')
    default:
      return 'Bye.'
  }
}