// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        // 예: 필수 필드가 비어 있으면 경고 메시지 표시
        const name = document.getElementById('name').value;
        if (!name) {
            alert('이름을 입력해주세요.');
            event.preventDefault(); // 폼 제출 방지
        }
    });
});

