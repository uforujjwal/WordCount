var string = "";
string = "Ram is    a good Programmer he can make good programmers ram programmer ram ram";
string = string.toLowerCase();
var re = /\s+/gi
//replace all spaces with \n and split \n to form array of words
var arr = string.replace(re,'\n').split("\n")
var stopWords = ['is','a','the','for']
// console.log(arr)
var word = {}
// make an object called word with frequencies as values & words as keys
arr.forEach(function(a) {
	if(word[a]){
		word[a] += 1
	}
	else
		word[a] = 1
}); 
//Delete stopWords from object
stopWords.forEach(function(a){
	delete word[a]
})
//make array of objects with words and frequencies
var arrWord = []
for (var prop in word) {
	var temp = {}
	temp.WORD = prop
	temp.value = word[prop]
	arrWord.push(temp)
}
//sort on basis of key values using Array.prototype.sort()
arrWord.sort(function (a, b) {
	if (a.value > b.value) {
    	return -1
  	}
  	if (a.value < b.value) {
    	return 1
  	}
  	// a must be equal to b
  	return 0
})
console.log(arrWord)
