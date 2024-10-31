# 1단계: 빌드 단계
# Node.js 이미지 사용 (Node 16 버전)
FROM node:16 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 소스 코드 복사
COPY . .

# React 애플리케이션 빌드
RUN npm run build

# 2단계: 실행 단계
# Nginx 이미지를 사용하여 빌드된 파일 제공
FROM nginx:alpine

# Nginx 설정을 설정하여 빌드 결과를 제공
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 기본 포트 80 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
