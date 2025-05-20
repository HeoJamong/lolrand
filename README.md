
## ✅ 예시: `README.md`

# 🎮 롤 내전 팀 섞기

포지션별로 입력한 10명의 플레이어를 블루팀과 레드팀으로 랜덤하게 섞고,  
각 팀의 승/패 결과에 따라 팀원들의 개인 승점을 기록할 수 있는 React 기반 웹 앱입니다.

## ✨ 주요 기능

- 탑, 정글, 미드, 바텀, 서폿 포지션별로 이름 입력
- 버튼 클릭 시 각 포지션별로 무작위 팀 배정 (블루팀 / 레드팀)
- 각 팀 옆에 **승리 / 패배 버튼**으로 팀원 전체 승점 조정
- 각 플레이어의 **이름 옆에 승점 표시**
- 점수는 세션 단위로 유지됨

## 📷 스크린샷

<img src="./screenshot.png" width="600" />

## 🛠 사용 기술

- React
- useState를 활용한 상태 관리
- 기본 HTML/CSS 기반 UI 구성

## 📁 프로젝트 구조

```

src/
├── App.js
├── components/
│   ├── PlayerInputForm.js    # 이름 입력 폼
│   ├── ShuffleButton.js      # 팀 섞기 버튼
│   └── TeamDisplay.js        # 팀 결과 + 승/패 버튼


```

## ▶️ 실행 방법

1. 프로젝트 클론

```bash
git clone https://github.com/your-username/lol-team-shuffle.git
cd lol-team-shuffle
````

2. 의존성 설치

```bash
npm install
```

3. 실행

```bash
npm start
```

## 💡 향후 추가 예정

* localStorage를 이용한 점수 저장
* 팀 밸런스 점수 계산 기능
* 테마 / 디자인 개선

## 👨‍💻 개발자

* **Your Name (github.com/your-username)**

```

---

## 📌 사용 팁

- `screenshot.png` 이미지를 root 경로에 넣고, 위에 있는 `img` 태그 경로를 그대로 두면 깃허브에서 미리보기가 나옵니다.
- 필요하다면 깃허브 페이지 배포 주소 (`gh-pages` 브랜치)도 추가할 수 있어요.

---

필요하면 `README.md` 완성된 버전도 `.md` 파일로 만들어 드릴게요!  
혹시 닉네임/깃허브 주소/이미지 캡처 추가할 항목 있으면 말해줘요!
```
