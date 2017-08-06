// Returns the longest word in the sentence 
module.exports = function longestWord(sentence) {
    var arr = sentence.match(/[a-z0-9]+/gi);

    var sorted = arr.sort(function (a, b) {
        return b.length - a.length;
    });

    return sorted[0];
}