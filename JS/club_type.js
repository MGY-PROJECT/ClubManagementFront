// 캠퍼스 마다 다르게 나오게 하기
const chungu = document.querySelector('.chungu button');
const chungu_list = document.querySelector('.chungu .chungu_list');
const jeungpyeong = document.querySelector('.jeungpyeong button');
const jeungpyeong_list = document.querySelector('.jeungpyeong .jeungpyeong_list');
const Uiwang = document.querySelector('.Uiwang button');
const Uiwang_list = document.querySelector('.Uiwang .Uiwang_list');
// 동아리 종류
const chungu_club = document.querySelector('.chungu_kinds');
const jeungpyeong_club = document.querySelector('.jeungpyeong_kinds');
const Uiwang_club = document.querySelector('.Uiwang_kinds');

chungu.addEventListener('click', function(){
    chungu_list.classList.add('event');
    jeungpyeong_list.classList.remove('event');
    Uiwang_list.classList.remove('event');
    chungu_club.classList.add('event');
    jeungpyeong_club.classList.remove('event');
    Uiwang_club.classList.remove('event');
})
jeungpyeong.addEventListener('click', function(){
    chungu_list.classList.remove('event');
    jeungpyeong_list.classList.add('event');
    Uiwang_list.classList.remove('event');
    chungu_club.classList.remove('event');
    jeungpyeong_club.classList.add('event');
    Uiwang_club.classList.remove('event');
})
Uiwang.addEventListener('click', function(){
    chungu_list.classList.remove('event');
    jeungpyeong_list.classList.remove('event');
    Uiwang_list.classList.add('event');
    chungu_club.classList.remove('event');
    jeungpyeong_club.classList.remove('event');
    Uiwang_club.classList.add('event');
})

// 검색창

// [...document.querySelectorAll('.search_button .material-icons')].forEach(function(item){
//     item.addEventListener('click', function(){
//         for(let i = 0; i<= search_input.length; i++){
//             search_input[i].classList.add('event');
//         }
//     })
//     item.addEventListener('blur', function(){
//         for(let i = 0; i <= search_input.length; i++){
//             search_input[i].classList.remove('event');
//         }
//     })
// })
const search = document.querySelector('.search_button .material-icons');
search.addEventListener('add', function(){
    search.classList.add('event');
})
// 화면 보여질 때 제일 먼저 일어나는 이벤트
window.onclick = function(){
    
}

// campus_list부분 특정 위치에 스크롤 되면 화면에 fixed(고정)되도록 하기.
// 스크롤 이벤트

document.addEventListener('scroll',function(){
    const campus_list = document.querySelector('.campus_list');
    var currentScrollValue = document.documentElement.scrollTop;

    console.log('currentScrollValue : ' + currentScrollValue);
    if(currentScrollValue > 500){
        campus_list.classList.add('event');
    }
    else{
        campus_list.classList.remove('event');
    }
})