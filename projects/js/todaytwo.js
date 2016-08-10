var date = new Array()
date[0] = "Sunday"
date[1] = "Monday"
date[2] = "Tuesday"
date[3] = "Wednesday"
date[4] = "Thursday"
date[5] = "Friday"
date[6] = "Saturday"

var Today = new Date()
var Day = Today.getDay()
document.write(date[Day] + "!")
