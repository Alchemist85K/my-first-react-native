# 변경사항

리액트 네이티브의 큰 변화에 의해 소스 코드가 변경되면, 관련된 내용을 확인할 수 있습니다.

## 2021-04-25

- Expo SDK 41 업그레이드
  - `expo upgrade`
  - `AsyncStorage` 라이브러리 패키지 변경
    - ~~`@react-native-community/async-storage`~~
    - `@react-native-async-storage/async-storage`
    - `src/App.js` 수정
  - `AppLoading` 라이브러리 설치 및 코드 수정
    - `npm i expo-app-loading`
    - `src/App.js` 수정
  - `tint-color` 경고 메시지
    - `jsconfig.json` 파일 추가
