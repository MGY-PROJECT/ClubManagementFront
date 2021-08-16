
const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduces = document.querySelector('.introduces'); // 동아리 소개 버튼
const introduces_view = document.querySelector('.introduce_section'); // 동아리 소개 창
const picture = document.querySelector('.pictures') // 동아리 사진 버튼
const picture_view = document.querySelector('.picture_section'); // 동아리 사진 창

// 동아리 수정 창 생성
const profile_correction_text = document.querySelector('.profile_correction_text');
const profile_correction = document.querySelector('.profile_correction');

profile_correction_text.addEventListener('click', function(){
    profile_correction.classList.add('event');
})


// 동아리 소개 창 생성
introduces.addEventListener('click', function(){
    introduces_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
introduces.addEventListener('mouseover',function(){
    introduces.classList.add('event');
})
introduces.addEventListener('mouseout',function(){
    introduces.classList.remove('event');
})

// 동아리 사진 창 생성
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
        introduces_view.classList.remove('event'); 
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

// 이미지 파일 선택시 특정 지역에 선언
const reader = new FileReader();
// 프로필 지정
const profileImg= document.getElementById("profile");
function readImage_profile(input){
    if(input.files && input.files[0]){
        reader.onload = e => {
            profileImg.src = e.target.result;
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
const backImg= document.getElementById("backImg");
function readImage_backImg(input){
    if(input.files && input.files[0]){
        reader.onload = e => {
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
const slide_ul = document.querySelector("#picture_inner"); // ul 지정
  function previewFiles() {

    var files   = document.querySelector('.picture_choice input[type=file]').files; // 파일 선택 부분
  
    function readAndPreview(file) {
  
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        const reader = new FileReader();
  
        reader.addEventListener("load", function () {
          var image = new Image();
          image.src = this.result;
          slide_ul.appendChild( image );
          alert("동아리 사진이 지정되었습니다.");
        }, false);
  
        reader.readAsDataURL(file);
      }
  
    }
  
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  
  }

// 사진 슬라이드 
const wrap = document.querySelector('.slide'); // slide 선택
const slide = _ =>{
    const ul = wrap.children[0]; // ul 선택
    let len = ul.children.length; // li 개수
    ul.style.cssText = `width: calc(100% * ${len});display : flex; transition : 1s;`;
    Array.from(ul.children).
    forEach(ele => ele.style.cssText = `width: calc(50% / ${len}); height : 500px`)
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % len // 장면 선택
        ul.style.marginLeft = `${-pos * 100}%` // 장면 전환
    }, 3000) 
}


// 동아리 문구 설정
const introduce_submit = document.querySelector('.introduction .introduction_submit'); // 전송 창
const explanation = document.querySelector('.explanation');


function printName()  {
    const input_text = document.getElementById('input_name').value;
    introduce_submit.addEventListener('click', function(){
        explanation.innerText = input_text;
    })
}

// 초기화
const initial_value = document.querySelector('.initial_value input');
const slide_del = slide_ul.children;
initial_value.addEventListener('click', function(){
    explanation.innerText = " "; // 소개글 초기화
    backImg.src = "https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"; // 배경 초기화
    profileImg.src = "https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"; // 프로필 초기화
    for(var i = 0; i <= slide_del.length; i++){
        slide_del[i].remove();
    }
    alert("초기화 되었습니다!");
})