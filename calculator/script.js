var display = ' '
let keys = document.getElementsByClassName("key")
Array.from(keys).forEach((key) => {
    key.addEventListener("click", (e) => {
        // console.log(e.target.innerHTML);
        var data = e.target.innerHTML
        if (data == '=') {
            try {
                // console.log(display);
                var result = eval(display)
                document.querySelector(".display").innerHTML = result
                // console.log(result);
                display = result
            } catch (error) {
                document.querySelector(".display").innerHTML = "Synatx Error"
            }
        }
        else if (data == 'DEL') {
            let str = Array.from(display)

            str.pop()
            display = str.join('')
            document.querySelector(".display").innerHTML = display
        }
        else {
            display += data
            document.querySelector(".display").innerHTML = display
        }
    })
})

function clearDisplay() {
    display = ''
    document.querySelector(".display").innerHTML = display
}

function on_off() {
    document.querySelector(".display").classList.toggle("on_off")
    clearDisplay()
}

// document.querySelector(".display").style.color = "white"





