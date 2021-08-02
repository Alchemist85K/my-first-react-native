# 변경사항

리액트 네이티브의 큰 변화에 의해 소스 코드가 변경되면, 관련된 내용을 확인할 수 있습니다.

## 2021-08-02

- 오타 수정
  - `src/navigations/AuthStack.js`
    ```diff
       <Stack.Navigator
         initialRouteName="Login"
         screenOptions={{
           headerTitleAlign: 'center',
    -      cardStyle: { backgroundColor: theme.backgroundColor },
    +      cardStyle: { backgroundColor: theme.background },
           headerTintColor: theme.headerTintColor,
         }}
       >
    ```
  - `src/navigations/MainStack.js`
    ```diff
       <Stack.Navigator
         initialRouteName="Main"
         screenOptions={{
           headerTitleAlign: 'center',
           headerTintColor: theme.headerTintColor,
    -      cardStyle: { backgroundColor: theme.backgroundColor },
    +      cardStyle: { backgroundColor: theme.background },
           headerBackTitleVisible: false,
         }}
       >
    ```
  - `src/screens/ChannelList.js`
    ```diff
      const ItemDescription = styled.Text`
        font-size: 16px;
        margin-top: 5px;
    -   color: ${({ theme }) => theme.listTime};
    +   color: ${({ theme }) => theme.listDescription};
      `;
    ```

## 2021-04-25

- Expo SDK 41 업그레이드
  - `expo upgrade`
  - `AppLoading` 라이브러리 설치 및 코드 수정
    - `npm i expo-app-loading`
    - `src/App.js` 수정
  - `Permissions` 제거 및 코드 수정
    - `src/components/Image.js` 수정
  - `getFocusedRouteNameFromRoute` 추가
    - `src/navigations/MainTab.js` 수정
- Android `permissions` 수정
  - `app.json` 수정
  - [Expo Link](https://docs.expo.io/versions/v41.0.0/sdk/permissions/#permissionsmedia_library)
