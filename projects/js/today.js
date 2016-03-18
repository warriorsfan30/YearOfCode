var date = new Array()
date[0] = "SUNDAY ... WAIT WHEN WAS SATURDAY"
date[1] = "MONDAY ... WEHN DOES SCHOOL END?"
date[2] = "ATLEAST IT ISN\'T MONDAY"
date[3] = "HUMP DAY"
date[4] = "TOMORROW IS FRIDAY"
date[5] = "ITS FRIDAY"
date[6] = "THE WEEKEND IS HERE"

var Today = new Date()
var Day = Today.getDay()
document.write(date[Day] + "!")
