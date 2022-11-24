# React.js

## 년도별 구입목록 만들기

![ezgif com-gif-maker](https://user-images.githubusercontent.com/70246174/203682308-dc5f83c9-b8a2-4cfa-b3f9-f95a8b0f8af2.gif)

## 배운점

- React를 사용할 때에는 화면에 무엇이 표시되어야 하는지를 정의하고 React가 거기까지 도달하는 방법을 알아내도록 선언형 JavaScript 코드로 만들어야 한다.

선언형

- 원하는 결과(UI)를 정의하고 라이브러리(React)가 단계를 구성한다.

- React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.

- 선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 준다.

선연형 코드의 반대인 명령형 코드예시

```JavaScript
// Hello, World! 화면에 출력하기
// 순수 javaScript 명령형 코드
const root = document.getElementById('root');
const header = document.createElement('h1');
const headerContent = document.createTextNode(
	'Hello, World!'
);

header.appendChild(headerContent);
root.appendChild(header);

// React 코드 (선언적인)
const header = <h1>Hello, World!</h2>; // jsx
ReactDOM.render(header, document.getElementById('root'));

```

- 명령형으로 작성된 코드의 경우 Hello, World!를 출력하기 위해 컴퓨터가 수행하는 절차를 일일히 코드로 작성해주어야 한다.

- 반면에 React 코드의 경우 내가 UI을 선언하고 render 함수를 호출하면 React가 알아서 절차를 수행해 화면에 출력된다. 즉, 화면에 어떻게 그려야할지는 React 내부에 숨겨져 잘 추상화되어 있다.

- Jsx는 React 프로젝트에서 활성화되는 특수한 비표준 구문이다. 이는 백그라운드에서 JS코드로 컴파일된다.

- React를 사용해서 DOM 노드에 마운트되는 하나의 루트 컴포넌트를 가진 컴포넌트 트리를 구축한다.
