const text = document.querySelector(' .text');
const title = document.querySelector('.content .main-title');
const slide = document.querySelector('.slide');
const contentRight = document.querySelector('.content-right');
const contentLeft = document.querySelector('.content-left');
let hidden = false;
//슬라이드 화면 구성  
text.addEventListener('mouseenter', () => {
    if (hidden) return; 
    slide.style.transition = 'transform 4s ease, opacity 0.1s ease';
    slide.style.transform = 'translateY(-180%)';
    slide.style.opacity = '0';   
    title.style.transition = 'transform 4s ease, opacity 0.1s ease';
    title.style.transform = 'translateY(-20%)';
    contentRight.style.opacity = '0';
    contentLeft.style.opacity = '0';
    setTimeout(() => {
        contentRight.style.opacity = '1'; 
        contentLeft.style.opacity = '1'; 
        title.style.opacity = '0'; 
    }, 2000); 
    hidden = true;  
});
//앨범 리스트
const albumlist = [{
        image: './src/assets/img/jennie.jpg',
        artist: '제니 (JENNIE)',
        name: 'Rudy',
        date: '2025. 03. 17',
        songCount: 15,
        likes: 18877,
        feedImg: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/009/95/173/995173_20250131132131_500.jpg?YUV444/melon/resize/416',
        feedText: '"like JENNIE 곡이 주간 1위가 되었습니다."'
    },{
        image: './src/assets/img/nflying.jpg',
        artist: '엔플라잉 (N.Flying)',
        name: 'TURBULENCE',
        date: '2021. 10. 06',
        songCount: 13,
        likes: 3705,
        feedImg: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/61/430/861430_20250527180510_500.jpg?YUV444/melon/resize/416',
        feedText: 'Sober (Sober) · N.Flying · 이현승 · TM · 이승협 (J.DON) · 이현승'
    }
    ,{
        image: './src/assets/img/qwer.jpg',
        artist: 'QWER',
        name: '3rd Mini Album \'난 네 편이야, 온 세상이 불협일지라도\'',
        date: '2025. 06. 09',
        songCount: 6,
        likes: 4550,
        feedImg: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/036/10/529/3610529_20250609121241_500.jpg?156bef68f0834eb6ae1da7543798a6b2/melon/resize/416/quality/80/optimize',
        feedText: '"3rd Mini Album 으로 돌아온 QWER"'
    },{
        image: './src/assets/img/asepa.jpg',
        artist: 'aespa',
        name: 'Whiplash - The 5th Mini Album',
        date: '2024. 10. 21',
        songCount: 6,
        likes: 23473,
        feedImg: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/028/99/555/2899555_20241016140306_500.jpg?b77f88c284b4942f1e779097ff66199c/melon/resize/416/quality/80/optimize',
        feedText: 'aespa \"Whiplash\" #chalenge #aespa #에스파 #Whiplash'
    }
    ,{
        image: './src/assets/img/day6.jpg',
        artist: 'DAY6 (데이식스)',
        name: 'The Book of Us : The Demon',
        date: '2020. 05. 11',
        songCount: 8,
        likes: 38967,
        feedImg: 'https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/94/864/894864_20250502185834_500.jpg?YUV444/melon/resize/416',
        feedText: '"미소로 하루를 시작해볼까요?"'
    }
];
 // 앨범 렌더링 함수
function renderAlbums(data) {
    const container = document.getElementById('albumContainer');
    container.innerHTML = ''; // 기존 내용 초기화
    data.forEach(album => {
    const wrap = document.createElement('div');
    wrap.className = 'album-wrap';
    wrap.innerHTML = `
        <div class="album">
            <img src="${album.image}" data-bg="${album.image}" alt="${album.artist} 앨범 이미지" class="album-img">
            <div class="album-info">
                <p><a href="#" aria-label="${album.artist} 나무위키 검색 페이지">${album.artist}</a></p>
                <p>${album.name}</p>
                <p><time datetime="${album.date}">${album.date}</time> | ${album.songCount} 곡</p>
                <p>좋아요  <span aria-label="좋아요 수">♥️ ${album.likes.toLocaleString()}</span></p>
            </div>
            <div class="btn-wrap">
                <button type="button"><img src="./src/assets/img/free-icon-play-button-3293639.png" alt="">앨범 듣기</button>
                <button type="button"><img src="./src/assets/img/free-icon-download-8701873.png" alt="">앨범 다운</button>
            </div>
        </div>
        <div class="album-feed">
            <img src="${album.feedImg}" alt="${album.artist} 프로필 이미지">
            <p>${album.feedText}</p>
        </div>
    `;
    container.appendChild(wrap);
    });
}
renderAlbums(albumlist); // 배경 이미지 바뀌게 앞에 와야함.
// 배경 이미지 바뀌게
const container = document.querySelector('.star-post .container .star-post-content');
const originalBg = container.style.backgroundImage;
const albumImages = document.querySelectorAll('.album .album-img');
albumImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        const bg = img.dataset.bg;
        container.style.backgroundImage = `linear-gradient(rgba(18,18,18,0.8)), url('${bg}')`;
    });
    img.addEventListener('mouseleave', () => {
        container.style.backgroundImage = originalBg;
    });
});
//Rank5 영역
document.querySelectorAll('.artist').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.artist').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        let artislist = [{}];
        if(item.classList.contains("artist1")){
            artislist = [{
                share: '11',
                male: 43,
                female: 57,
                teenager: 5,
                twenties: 37,
                thirties: 25,
                Forties: 16,
                Fifties: 12,
                etc: 2
            }];
        }else if(item.classList.contains("artist2")){
            artislist = [{
                share: '10',
                male: 26,
                female: 74,
                teenager: 15,
                twenties: 35,
                thirties: 14,
                Forties: 16,
                Fifties: 11,
                etc: 2
            }];
        }else if(item.classList.contains("artist3")){
            artislist = [{
                share: '10',
                male: 19,
                female: 81,
                teenager: 36,
                twenties: 22,
                thirties: 4,
                Forties: 23,
                Fifties: 9,
                etc: 1
            }];
        }else if(item.classList.contains("artist4")){
            artislist = [{
                share: '10',
                male: 39,
                female: 61,
                teenager: 17,
                twenties: 32,
                thirties: 12,
                Forties: 21,
                Fifties: 11,
                etc: 2
            }];
        }else if(item.classList.contains("artist5")){
            artislist = [{
                share: '10',
                male: 37,
                female: 63,
                teenager: 11,
                twenties: 31,
                thirties: 20,
                Forties: 20,
                Fifties: 14,
                etc: 3
            }];
        }
        let current = 0;
        let target= parseInt(artislist[0].share);
        const interval = setInterval(() => {
            document.querySelector(".percent-text").innerText = current + "%";
            if (current >= target) {
                clearInterval(interval);
            }
            current++;
        }, 30);
        document.querySelector(".male").innerText = artislist[0].male + "%";
        document.querySelector(".female").innerText = artislist[0].female + "%";
        document.querySelector(".male").style.width = artislist[0].male+"%";
        document.querySelector(".female").style.width = artislist[0].female+"%";

        function animateHeight(selector, targetHeight) {
            const element = document.querySelector(selector);
            let current = 0;
            const max = parseInt(targetHeight);
            const speed = 10; // 높이 증가 속도

            const interval = setInterval(() => {
                if (current >= max) {
                    clearInterval(interval);
                } else {
                    current++;
                    element.style.height = current + "px";
                }
            }, speed);
        }

       // 애니메이션 실행
        animateHeight(".bar1", artislist[0].teenager);
        animateHeight(".bar2", artislist[0].twenties);
        animateHeight(".bar3", artislist[0].thirties);
        animateHeight(".bar4", artislist[0].Forties);
        animateHeight(".bar5", artislist[0].Fifties);
        animateHeight(".bar6", artislist[0].etc);
    });
});
