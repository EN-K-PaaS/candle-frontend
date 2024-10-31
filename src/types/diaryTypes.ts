export interface Diary {
    id: string; // 고유 식별자
    title: string; // 일기 제목
    content: string; // 일기 내용
    createdAt: string; // 생성 날짜 (ISO 형식의 문자열)
    userId: string; // 사용자 ID 추가
    progress: number; // 진행 상태 추가
    goalDate: string; // 목표 날짜 추가
}