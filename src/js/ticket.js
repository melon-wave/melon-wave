const ticketWrap = document.querySelector(".ticket-wrap");
const empty1 = document.querySelector(".empty1");
const empty2 = document.querySelector(".empty2");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible-section");
                entry.target.classList.remove("hidden-section");

                // 섹션별 함수 호출 작성부분
                if (entry.target.classList.contains("empty1")) {
                    // empty1의 작성 부분
                } else if (entry.target.classList.contains("empty2")) {
                    // empty2의 작성 부분
                } else if (entry.target.classList.contains("ticket-wrap")) {
                    // ticketWrap의 작성 부분
                    const ticketList =
                        document.querySelector(".etc-ticket-list");
                    const leftButton = document.querySelector(
                        ".etc-ticket-list-btn.left"
                    );
                    const rightButton = document.querySelector(
                        ".etc-ticket-list-btn.right"
                    );
                    const ticketItem = document.querySelector(".ticket-item");

                    console.log(ticketItem.offsetWidth);
                    const scrollAmount = ticketItem.offsetWidth + 30; //이용권 너비 + gap:30px

                    leftButton.addEventListener("click", () => {
                        ticketList.scrollBy({
                            left: -scrollAmount,
                            behavior: "smooth",
                        });
                    });
                    rightButton.addEventListener("click", () => {
                        ticketList.scrollBy({
                            left: scrollAmount,
                            behavior: "smooth",
                        });
                    });
                }
            } else {
                entry.target.classList.add("hidden-section");
                entry.target.classList.remove("visible-section");
            }
        });
    },
    {
        threshold: 0.3, //0.3은는 관찰 중인 요소가 뷰포트에 30% 이상 보이면 콜백 함수가 호출된다는 의미
        rootMargin: "0px", //여백없이 뷰포트 경계를 감시한다는 의미
    }
);

observer.observe(empty1);
observer.observe(empty2);
observer.observe(ticketWrap);
