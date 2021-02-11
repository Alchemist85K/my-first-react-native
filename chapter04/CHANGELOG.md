# 변경사항

## 2021-02-11

### 오타 수정

- 136 page `<Input ... />`이 `<StyledInput ... />`으로 변경되어야 합니다.
- 제보해주신 [prostars](https://github.com/prostars)님 감사합니다. [link](https://github.com/Alchemist85K/my-first-react-native/discussions/7)

```diff
  ...
  const Input = () => {
-    return <Input ... />;
+    return <StyledInput ... />
  }

  export default Input;
```
