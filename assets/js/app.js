let checkbox = document.getElementById('checkbox')
let darkMode = localStorage.getItem('darkMode')

checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        darkModeOn()
    }else{
        darkModeOff()
    }
})

function darkModeOn(){
    localStorage.setItem('darkMode', 'active')
    document.body.classList.add('darkMode')
    trans()
}

function darkModeOff(){
    localStorage.setItem('darkMode', null)
    document.body.classList.remove('darkMode')
    trans()
}

if(darkMode === 'active'){
    darkModeOn()
    checkbox.checked = true;
}else{
    checkbox.checked = true;
    darkModeOn()
}


function trans(){
    document.documentElement.classList.add('transition')
    window.setTimeout(() =>{
        document.documentElement.classList.remove('transition')
    },1000)
}
