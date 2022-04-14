// 검색
const searchBg = document.querySelector(".gnb_bg");
const searchCon = document.querySelector(".gnb_search_area");

document.querySelector(".ico_search").addEventListener("click", e => {
    e.preventDefault();
    searchBg.classList.add("on");
    searchCon.classList.add("on");
    langBtn.classList.remove("on");
    document.querySelector(".language_list").classList.remove("on");
});
document.querySelector(".search_close").addEventListener("click", e => {
    e.preventDefault();
    searchBg.classList.remove("on");
    searchCon.classList.remove("on");
});

// 언어 설정
const langBtn = document.querySelector(".btn_language");
langBtn.addEventListener("click", e => {
    e.preventDefault();
    langBtn.classList.toggle("on");
    document.querySelector(".language_list").classList.toggle("on");
});

// 회사소개 2depth
let gnbHover = document.querySelector(".gnb_hover");
let gnb2depth = document.querySelector(".gnb_2depth_wrap");
let gnbClose = document.querySelector(".gnb_2depth_close");
gnbHover.addEventListener("mouseout", function() {
    gnb2depth.classList.remove("on");
});
gnbHover.addEventListener("mouseover", function() {
    gnb2depth.classList.add("on");
});
gnb2depth.addEventListener("mouseout", function() {
    gnb2depth.classList.remove("on");
});
gnb2depth.addEventListener("mouseover", function() {
    gnb2depth.classList.add("on");
});
gnbClose.addEventListener("click", e => {
    e.preventDefault();
    gnb2depth.classList.remove("on");
});