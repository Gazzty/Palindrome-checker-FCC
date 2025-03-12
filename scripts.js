function dataSanitization(data){
    const regex = /[^a-zA-Z0-9]/g
    return data.replace(regex, "")
}

function isPalindrome(word){
    word = dataSanitization(word).toLowerCase()
    let reversedWord = word.split("").reverse().join('')

    console.log(reversedWord)

    if (word === reversedWord){
        return true
    }
    return false
}

// Check Palindrome when the user click the button
const submit = document.getElementById('check-btn')
const input = document.getElementById('text-input')
const answer = document.getElementById('result')

// Save original answer color 
const originalColor = answer.style.color

submit.addEventListener('click', (e) => {
    e.preventDefault() // To avoid page reloading
    const userInput = input.value

    answer.style.color = originalColor

    if(userInput === ""){
        alert("Please input a value")
    }
    else if(isPalindrome(userInput)){
        answer.innerText = `${userInput} is a palindrome.`
    }
    else{
        answer.innerText = `${userInput} is not a palindrome.`
    }
})