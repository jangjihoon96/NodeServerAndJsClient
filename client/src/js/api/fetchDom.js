import { renderDom } from "../dom/renderdom.js";
export const fetchDataFromServer = async () => {
  try {
    // 서버에서 데이터 가져오기
    const response = await fetch("http://localhost:4001/api");
    const data = await response.json();
    console.log(data);
    // 데이터를 DOM에 출력
    renderDom(data); // 데이터를 출력하는 함수 호출
  } catch (error) {
    // 오류가 발생하면 에러 처리
    console.error("서버 통신 오류:", error);
  }
};
