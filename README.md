# eroum (external)

외부에서 관리되는 **external.js**, **external.css**를 배포하기 위한 GitHub 저장소입니다.  
본사 HTML 파일은 수정 없이, CSS/JS 파일만 이 저장소에서 관리하여 유지보수합니다.

---

## ✅ 사용 목적

- 본사 HTML은 수정할 수 없고, 외부에서 JS/CSS만 지속적으로 관리 필요
- 지도, 슬라이드, 인터랙션, 전역 스타일 등 외부 유지보수 항목 통합
- jsDelivr CDN을 사용하여 최신 코드 자동 반영

---

## 📁 파일 구성

| 파일명          | 설명 |
|-----------------|------|
| `external.js`   | 외부 전용 통합 자바스크립트 |
| `external.css`  | 외부 전용 통합 스타일시트 |

---

## 📌 실제 적용 코드

```html
<!-- 외부 JS 적용 -->
<script src="https://cdn.jsdelivr.net/gh/smartnm/eroum@main/external.js"></script>

<!-- 외부 CSS 적용 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/smartnm/eroum@main/external.css" />
```

- 위 코드는 본사 HTML에서 `<head>` 또는 `<body>`에 삽입
- 수정 후 **파일명 변경 없이** 자동 적용됨

---

## ⚙️ 캐시 문제 해결 (자동 캐시 제거 설정)

아래 GitHub Actions를 통해 커밋 시 CDN 캐시를 강제로 초기화할 수 있습니다.

`.github/workflows/purge-jsdelivr.yml` 파일을 생성하고 다음 코드 추가:

```yaml
name: Purge jsDelivr Cache

on:
  push:
    branches: [main]
    paths:
      - 'external.js'
      - 'external.css'

jobs:
  purge:
    runs-on: ubuntu-latest
    steps:
      - name: Purge jsDelivr CDN cache
        run: |
          curl -X GET "https://purge.jsdelivr.net/gh/smartnm/eroum@main/external.js"
          curl -X GET "https://purge.jsdelivr.net/gh/smartnm/eroum@main/external.css"
```

> ✅ 설정 후 파일만 수정하면 즉시 CDN에 반영됩니다.

---

## 🔄 수동 갱신 (선택)

```html
<script src="https://cdn.jsdelivr.net/gh/smartnm/eroum@main/external.js?v=20250822"></script>
```

- 쿼리스트링(`?v=날짜`)을 붙이면 브라우저 캐시를 우회할 수 있음
- 수동으로 매번 변경해야 하므로 GitHub Action을 추천

---

## 🛠️ 유지방침

- `external.js`, `external.css`는 파일명 고정
- 커밋만 하면 본사 적용됨 (HTML 수정 불필요)
- 커밋 시 캐시 자동 초기화 기능 활성화됨

---

## 👤 관리자

- GitHub 계정: [smartnm](https://github.com/smartnm)
- 운영 담당: 이로움 콘텐츠 외부 유지보수자
