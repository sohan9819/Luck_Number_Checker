const form = document.querySelector('#form')
const result = document.querySelector('#result')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(this.date.value)
    console.log(this.number.value)
    const date = this.date.value
    const number = this.number.value

    if ( date === "" || number === ""){
        result.innerText = "Please enter all the fields"
    }
    else {
        date.toString()
        luckyCheck(date , number)
    }
})

function luckyCheck(date , number){

    let sum = 0
    for(let i = 0 ; i < date.length; i++){
        let num = date.charAt(i);
        if(isNaN(num) === false) {
            console.log(num)
            sum=sum+parseInt(num)
            console.log("sum : " + sum )
        }
    }

    if ( sum%number == 0){
        result.innerText=`${number} is your lucky number!!! 🥳🥳🥳`
    } else {
        result.innerText=`${number} is not that lucky for you`
    }

}