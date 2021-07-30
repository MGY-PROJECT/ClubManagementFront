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

// 화면 보여질 때 제일 먼저 일어나는 이벤트
window.onclick = function(){
    
}
