const date = new Date();

const viewYear = date.getFullYear(); // 년도 호출
const viewMonth = date.getMonth();  // 월 호출

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`; //querySelector로 .year-month의 텍스트를 변경 