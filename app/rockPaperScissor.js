// Rock paper scissors game
module.exports = function rockPaperScissor(choice1, choice2) {
    if (choice1 == choice2) {
        return "It's a tie!"
    }
    else if (choice1 == 'rock') {
        if (choice2 == 'scissors') {
            return 'rock wins'
        } else {
            return 'paper wins'
        }
    }
    else if (choice1 == 'paper') {
        if (choice2 == 'rock') {
            return 'paper wins'
        } else {
            return 'scissors win'
        }
    }
    else if (choice1 == 'scissors') {
        if (choice2 == 'paper') {
            return 'scissors win'
        } else {
            return 'rock wins'
        }
    }
}