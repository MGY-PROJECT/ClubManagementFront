

const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduce = document.querySelector('.introduces'); // 동아리 소개 버튼
const introduce_view = document.querySelector('.introduce_section'); // 동아리 소개 창
const picture = document.querySelector('.pictures') // 동아리 사진 버튼
const picture_view = document.querySelector('.picture_section'); // 동아리 사진 창

// 동아리 소개 창 생성
introduce.addEventListener('click', function(){
    introduce_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
introduce.addEventListener('mouseover',function(){
    introduce.classList.add('event');
})
introduce.addEventListener('mouseout',function(){
    introduce.classList.remove('event');
})

// // 동아리 사진 창 생성
picture.addEventListener('click', function(){
    picture_view.classList.add('event');
    slide();
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
const join = document.querySelector('.joins');
const all = document.querySelector('.all');
join.addEventListener('click', function(){
    location.replace('https://docs.google.com/forms/d/1sy1X48qtSN6saIMrJcVjj4v-IJcjUMLWv37v1tjw5hE/edit?usp=forms_home&ths=true');
})
all.addEventListener('click', function(){
    location.replace('http://127.0.0.1:5500/html/club_type.html');
})


// 화살표 누르면 사이트 상단으로 이동
    // const up_arrow = document.querySelector('.up_arrow');
    // up_arrow.addEventListener('click', function(){
    //     window.scrollBy(0, -10000);
    // })

// 사진 슬라이드 
const slide = _ =>{
    const wrap = document.querySelector('.slide'); // slide 선택
    const target = wrap.children[0]; // ul 선택
    const len = target.children.length; // li 개수

    target.style.cssText = `width: calc(100% * ${len});display : flex; transition : 1s;`;
    Array.from(target.children).
    forEach(ele => ele.style.cssText = `width: calc(100% / ${len});`)
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        target.style.marginLeft = `${-pos * 100}%` // 장면 전환
    }, 1500) // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행   
}


