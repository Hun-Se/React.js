# React.js

## 년도별 구입목록 만들기

![ezgif com-gif-maker](https://user-images.githubusercontent.com/70246174/203682308-dc5f83c9-b8a2-4cfa-b3f9-f95a8b0f8af2.gif)

## 쇼핑몰 프로토타입

![ezgif com-gif-maker](https://user-images.githubusercontent.com/70246174/209078055-b1cd1f6b-c687-41d1-8eeb-fb91be9c4194.gif)

- UseRef를 사용하여 Input 속성 사용

```JavaScript
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
```

- UseReducer와 UseContext를 사용하여 장바구니 item state 관리

- UseEffect를 사용하여 애니메이션 기능 추가

```JavaScript
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300)});
```

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

- React는 상태값이 변경될 때마다 리렌더링이 일어난다. 따라서 리퀘스트같은 작업은 사이드이펙트로 React 컴포넌트가 아닌 외부에서 작업해야 리렌더링이 일어났을 때 작업을 반복하지 않는다.

- 사이드 이펙트를 사용하기위해서는 useEffect를 사용한다.

```JavaScript
useEffect(() => {
    (이펙트 함수)
    return {
        (클린업 함수)
    };
}, [의존값]);

```

- useEffect는 컴포넌트가 마운트, 언마운트, 업데이트 될 때 특정 작업을 처리 할 수 있다.

- 디바운싱: 사용자 입력을 디바운스(그룹화)하는 것

- useEffect에 빈 배열을 넣는 경우는 처음으로 변수가 생성될 때, 즉 컴포넌트가 최초로 렌더링 되는 마운트 (mount)시에 단 한번 실행될 때를 위해 사용한다.

- useReducer를 사용하여 state를 관리하는게 좋을 경우

  1.  useState를 사용하면 너무 번거러운경우, 너무 많은 일을 처리해야할 경우 state를 많이 생성해야 하기 때문에 useState를 사용하기에 번거롭다. 관련 state가 서로 독립적이고 같이 업데이트가 되지 않는다면 useReducer를 사용하는게 편하다.
  2.  연관된 state 조각들로 구성된 state관련 데이터를 다루는 경우

- useReducer의 장점

1. 사용하는 쪽에서 복잡한 로직을 처리하지 않아도 된다. 복잡한 상수를 바꾸는 것은 dispatch를 통해 Reducer에서 은닉하여 처리할 수 있다.

2. 유지보수가 편하다.

- react Context를 사용하면 트리구조에 상관없이 State를 사용 할 수 있어서 편하다.
- 하지만 일반적으로는 state를 props하여 데이터를 전달한다.
- 전역적(global) 데이터 공유에 특화된 방법으로, 로그인 유저 데이터, 설정파일, 테마, 언어 등이 해당된다.
- Context 사용전에 고려할 것

1.  context를 사용하면 컴포넌트 재사용이 어려워지므로, 꼭 필요한 경우에만 사용하는 것이 좋다.
2.  많은 컴포넌트들로 구성되있어도, 정보가 한 곳에서만 사용된다면 컴포넌트 병합을, 여러 곳에서 사용된다면 Context가 유리한 것이다.
3.  context api 에서 상태값을 변경하면, provider 로 감싼 모든 자식 컴포넌트들이 리렌더링한다
4.  변경이 잦은경우 context는 적합하지 않다(최적화가 안되기 떄문)

- React Hook을 사용할 때 주의해야 할 점

  1. 해당 컴포넌트의 함수에서 선언하여 사용한다.
  2. block문에서 호출하지 말아야한다.(리엑트 훅 useContext는 콜백 내부에서 호출 할수 없다. 리엑트 훅은 리엑트 함수 컴포넌트 또는 사용자 정의 리엑트 훅 함수 안에서 호출되어야한다.), 중첩함수, if문 등에서도 사용 불가능 하다.
  3. useEffect는 항상 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가하여야 한다.

- useImperativeHandle: 프로그래밍 내에서 직접적으로 state를 호출하거나 조작해서 사용하게 해주는 훅
- const input = React.forwardRef(() => {}): React.forwardRef로 컴포넌트를 감싸주면 ref를 전달 할 수 있다. 이때 useImpreativeHandle를 사용하여 메서드를 정의하여 사용 할 수 있다.
- 단, ref를 사용하는 것은 리엑트에서 권장하지 않는다.
- focus나 스크롤링을 구현 할때는 유용하다.

### 장바구니 및 구매페이지 만들기

### 배운점

- bind() 함수는 새롭게 바인딩한 함수를 만드는 함수로, 바인딩한 함수는 원본 함수 객체를 감싸는 함수로써, 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 된다. (ECMAScript 2015의 exotic function object)

- 사용법
  Function.bind(thisArg, [arg1, arg2, ...])
  thisArg // this가 가리킬 객체를 지정
  [arg1, arg2 ... ] // 함수의 인자로 전달할 값
  이때 첫 번째 인자인 thisArg는 선택옵션으로 값을 전달하지 않아도 되며 null 등을 사용할 수 있다. 그 다음은 함수에 전달 할 인자 값으로 배열 타입으로 전달하게 된다. 이처럼 인자 값을 배열로 전달하는 것은 apply()와 비슷하다.
