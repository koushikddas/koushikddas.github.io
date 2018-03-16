//about click
let about_click = document.querySelector('.about')
about_click.addEventListener('click',show_about)
function show_about(e){
    e.preventDefault();
    let div = document.createElement('div')
    let heading_about = document.createElement('h1')
    let content = 'HI, I am a simple guy who loves coding and readig that\'s it nothing fancy about me.'
    let about_text = document.createTextNode(content)

    heading_about.appendChild(about_text)
    div.appendChild(heading_about)
    div.classList.add('theme-look')

    document.querySelector('.main-view').appendChild(div)
}