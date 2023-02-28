const buttons = document.querySelectorAll('.btn')

const contentDiv = document.querySelector('.content')

const paragraphs = document.querySelectorAll('.paragraphs-content')

contentDiv.addEventListener('click', (e)=>{
    const id = e.target.dataset.id
    if(id){
        buttons.forEach(function(btns){
            btns.classList.remove('active')
            e.target.classList.add('active')
        })

        paragraphs.forEach(function(paradivs){
            paradivs.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
})