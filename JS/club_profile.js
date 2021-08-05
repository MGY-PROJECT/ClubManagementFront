

const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduce = document.querySelector('.introduce'); // 동아리 소개 버튼
const introduce_view = document.querySelector('.introduce_section'); // 동아리 소개 창
const picture = document.querySelector('.picture') // 동아리 사진 버튼
const picture_view = document.querySelector('.picture_section'); // 동아리 사진 창

// 동아리 소개 창 생성
introduce.addEventListener('click', function(){
    introduce_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
// 동아리 사진 창 생성
picture.addEventListener('click', function(){
    picture_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
for(var i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        // close를 누르면 화면 사라지도록 하기
        introduce_view.classList.remove('event'); 
        picture_view.classList.remove('event');
        for(var j = 0; j < dark_bg.length; j++){
            dark_bg[j].classList.remove('event');
        }
    })
}


// body에 이벤트가 생기면 위로 이동
const body = document.querySelector('body');
const profile = document.querySelector('.profile');
const header_back = document.querySelector('header');
const section = document.querySelector('section');

const body_event = profile.addEventListener('click', function(){
    body.classList.toggle('event');
    section.classList.toggle('event');
})
if(body_event){
    header_back.style.opacity = .1;
}
// 동아리 가입 버튼을 누르면 사이트 이동, 동아리 전체보기 누르면 이전 사이트로 이동
const join_button = document.querySelector('.join button');
const all = document.querySelector('.all');
join_button.addEventListener('click', function(){
    location.replace('https://docs.google.com/forms/d/1sy1X48qtSN6saIMrJcVjj4v-IJcjUMLWv37v1tjw5hE/edit?usp=forms_home&ths=true');
})
all.addEventListener('click', function(){
    location.replace('http://127.0.0.1:5500/html/club_type.html');
})


// 화살표 누르면 사이트 상단으로 이동
const up_arrow = document.querySelector('.up_arrow');
up_arrow.addEventListener('click', function(){
    window.scrollBy(0, -10000);
})

/* 슬라이드 */
new Swiper('.picture_inner .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 처음에 보여질 슬라이드가 왼쪽이 아니라 가운데에 보여지도록 하기.
    loop: true, // 슬라이드가 반복적으로 보여지도록 해줌.
    // autoplay: true 슬라이드가 자동으로 널어가짐.
    autoplay: {
        delay: 5000 // 5초에 한번씩 이미지가 이동 기본 값은 3초
    }
})