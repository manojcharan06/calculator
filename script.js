let input = document.getElementById('Input')
let buttons = document.querySelectorAll('button')
//  operators = document.querySelectorAll('operator')

let arr = Array.from(buttons)
let string = ""
arr.forEach(btn => {
    btn.addEventListener('click', e => {
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1)
            input.value = string
        }
        // else if(e.target.innerHTML == /[+\-*/]$/){
        //     // string = replace((string[string.length-1]).target.innerHTML, e.target.innerHTML)
        //     // input.value = string
        //     console.log("hai")
        // }
        else{
            string += e.target.innerHTML
            input.value = string
        }
    })
})