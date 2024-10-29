export interface Diary {
    id: string; // 고유 식별자
    title: string; // 일기 제목
    content: string; // 일기 내용
    createdAt: string; // 생성 날짜 (ISO 형식의 문자열)
}