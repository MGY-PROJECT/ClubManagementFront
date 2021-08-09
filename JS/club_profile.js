
const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduce = document.querySelector('.introduces'); // 동아리 소개 버튼
const introduce_view = document.querySelector('.introduce_section'); // 동아리 소개 창
const picture = document.querySelector('.pictures') // 동아리 사진 버튼
const picture_view = document.querySelector('.picture_section'); // 동아리 사진 창

// 동아리 수정 창 생성
const profile_correction_text = document.querySelector('.profile_correction_text');
const profile_correction = document.querySelector('.profile_correction');

profile_correction_text.addEventListener('click', function(){
    profile_correction.classList.add('event');
})


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
        profile_correction.classList.remove('event');
        introduce_view.classList.remove('event'); 
        picture_view.classList.remove('event');
        for(var j = 0; j < dark_bg.length; j++){
            dark_bg[j].classList.remove('event');
        }
    })
}


// body에 이벤트가 생기면 위로 이동
const body = document.querySelector('body');
const profile = document.getElementById('profile');
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


// 이미지 파일 선택시 특정 지역에 선언
// 프로필 지정
const reader = new FileReader();

function readImage_profile(input){
    if(input.files && input.files[0]){
        reader.onload = e => {
            const backImg= document.getElementById("profile");
            backImg.src = e.target.result;
        }   
        reader.readAsDataURL(input.files[0]);
        alert("프로필 설정이 완료되었습니다.");
    }
}
const input_profile = document.getElementById("input-profile");
input_profile.addEventListener("change", e => {
    readImage_profile(e.target);
})
// 배경화면 자정
function readImage_backImg(input){
    if(input.files && input.files[0]){
        reader.onload = e => {
            const backImg= document.getElementById("backImg");
            backImg.src = e.target.result;
        }   
        reader.readAsDataURL(input.files[0]);
        alert("배경화면 설정이 완료되었습니다.");
    }
}
const input_backImg = document.getElementById("input-backImg");
input_backImg.addEventListener("change", e => {
    readImage_backImg(e.target);
})

// 슬라이드 화면 지정
// li 생성시키는 변수, li의 id 명은 slide_img이다.
/* 다시 짜기 */
const slide_img = document.createElement('img'); // li 생성
const slide_img_count = 4;
const slide_ul = document.querySelector(".picture_inner"); // ul 지정
slide_img.className = "slide_img"; //생성되는 li의 클래스 이름은 slide_img로 지정.
slide_img.id = "slide_img"; // 생성되는 li의 id명은 slide_img로 지정.
const slide_s = document.querySelectorAll('.slide_img'); // slide_s는 slide_li 즉, slide_img의 전체 개수를 지정.

function readImg_slide(input){
    // 함수 실행 시 img 생성.
        slide_ul.appendChild(slide_img);
        if(input.files && input.files[0]){
            reader.onload = e => {
                // 파일이 생성되면 ul안에 li태그가 생성된다. li태그는 위에서 id, class이름을 slide_img로 설정.
                
                // 
                // li의 경로는 이벤트가 발생된 대상. result로 url을 출력해서 지정.
                slide_img.src = e.target.result;
            }
            //
            reader.readAsDataURL(input.files[0]);
            alert("동아리 사진이 설정되었습니다.");
        }
        // else{
        //     alert("최대 4장 까지만 설정 가능합니다.")
        // }
}
const input_slide = document.querySelector('.input-slide');
input_slide.addEventListener('change', e => {
    readImg_slide(e.target);
})


// 사진 슬라이드 
const slide = _ =>{
    const wrap = document.querySelector('.slide'); // slide 선택
    const ul = wrap.children[0]; // ul 선택
    const len = ul.children.length; // li 개수

    ul.style.cssText = `width: calc(100% * ${len});display : flex; transition : 1s;`;
    Array.from(ul.children).
    forEach(ele => ele.style.cssText = `width: calc(100% / ${len});`)
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        ul.style.marginLeft = `${-pos * 100}%` // 장면 전환
    }, 3000) 
}