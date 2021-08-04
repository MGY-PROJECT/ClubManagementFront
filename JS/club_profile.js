const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduce = document.querySelector('.introduce');
const introduce_view = document.querySelector('.introduce_section');

introduce.addEventListener('click', function(){
    introduce_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
for(var i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        introduce_view.classList.remove('event');
        for(var j = 0; j < dark_bg.length; j++){
            dark_bg[j].classList.remove('event');
        }
    })
}

