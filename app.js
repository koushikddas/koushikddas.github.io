//particles
particlesJS.load('particles-js','particles.json',function(){
    console.log('particle loaded')
})
//main script
$('.carousel.carousel-slider').carousel({fullWidth: true});

/*slider func*/
let skillBtn = document.querySelector('.skill-btn') 

skillBtn.addEventListener('click',slide)

function slide(e){
    e.preventDefault()
    document.querySelector('.skills-slide').style.left = '4em'

}
document.querySelector('.skills-slide').addEventListener('click',hideSlide)
function hideSlide(e){
    document.querySelector('.skills-slide').style.left = '-31%'
}


/*end of func*/
