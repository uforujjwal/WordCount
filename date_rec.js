/*Input:Two dates 
Eg:(1993,09,02,2016,04,25)
Output:  No of days b/w given two dates
Eg:8271
*/

var diff = function (days,y1, m1, d1, y2, m2, d2) {
	//For same dates
    if (y1 == y2 && m1 == m2 && d1 == d2) 
    	return days
    //if day is not last day of month
    if (d1 < daysInMonth (m1, y1))
    	return diff(days + 1, y1, m1, d1 + 1, y2, m2, d2)
    //if month is not last month of year
    if (m1 < 12)
    	return diff(days + 1, y1, m1 + 1, 1, y2, m2, d2)
    return diff(days + 1, y1 + 1, 1, 1, y2, m2, d2)
}
//check for no of days in a month
var daysInMonth = function (m, y) {
	if (m == 2 && IsLeapYear (y))	
		return 29
	if (m == 2)	
		return 28
	if (m == 4 || m == 6 || m == 9 || m == 11)	
		return 30
    return 31;
}
//Check for leap year
var IsLeapYear = function (y) {
	if (y % 400 == 0) 
		return true;
	if (y % 100 == 0) 
		return false;
	if (y % 4 == 0) 
		return true;
	return false;
}

console.log("No. of days : "+diff(0,1993,9,2,2016,4,25))