import 'intersection-observer'

const options = {
    root: null, // 타겟의 가시성 검사를 위해 뷰포트 대신 사용할 요소를 지정
    rootMargin: "0px",
    threshold: 0.25 // 타겟의 기사성이 25%일 때 옵저버 실행, [0, 0.3, 1] 타겟의 가시성이 0%, 30%, 100%일 때 옵저버 실행
}
const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // entry.boundingClientRect 관찰 대상의 사각형 정보
        // entry.intersectionRect 관찰 대상의 교차한 영역 정보
        // entry.intersectionRatio 관찰 대상의 교차한 영역 백분율 (intersectionRect 영역에서 boundingClientRect 영역까지 비율)
        // entry.isIntersecting 관찰 대상의 교차 상태
        // entry.rootBounds 지정한 루트 요소의 사각형 정보
        // entry.target 관찰 대상 요소
        // entry.time 변경이 발생한 시간 정보

        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
        }
    })
}, options)

const targets = document.querySelectorAll('img')
targets.forEach((t) => { io.observe(t) })