const date = new Date();
const preDates = [];
const thisDates = [];
const nextDates = [];

// 년도 호출
const viewYear = date.getFullYear(); 

// 월 호출
const viewMonth = date.getMonth();  

// 저번달의 마지막 일, 요일
const prevLast = new Date(viewYear, viewMonth, 0);

// 이번달 마지막 일, 요일
const thisLast = new Date(viewYear, viewMonth +1, 0);

// 저번달 마지막날짜(PLDate), 마지막 요일(PLDay)
const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

// 이번달 마지막날짜(PLDate), 마지막 요일(PLDay)
const TLDate = thisLast.getDate();
const TLDate = thisLast.getDay();


console.log(thisLast)

//querySelector로 .year-month의 텍스트를 변경
document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;





