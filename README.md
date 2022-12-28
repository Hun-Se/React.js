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

### 배운점

- bind() 함수는 새롭게 바인딩한 함수를 만드는 함수로, 바인딩한 함수는 원본 함수 객체를 감싸는 함수로써, 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 된다. (ECMAScript 2015의 exotic function object)

- 사용법
  Function.bind(thisArg, [arg1, arg2, ...])
  thisArg // this가 가리킬 객체를 지정
  [arg1, arg2 ... ] // 함수의 인자로 전달할 값
  이때 첫 번째 인자인 thisArg는 선택옵션으로 값을 전달하지 않아도 되며 null 등을 사용할 수 있다. 그 다음은 함수에 전달 할 인자 값으로 배열 타입으로 전달하게 된다. 이처럼 인자 값을 배열로 전달하는 것은 apply()와 비슷하다.

- React.memo(): React.memo는 인자로 입력한 컴포넌트가 변경이 발생할 때마다 해당 컴포넌트로 이동하여 기존 props값과 새로운 값을 비교하게 한다.그러면 리엑트는 두가지 작업을 하게 되는데, 먼저 기존의 props 값을 저장할 공간이 만들고 그 후 비교하는 작업을 한다.해당 작업들은 개별적인 성능 비용이 필요하게 된다. 따라서 React.memo는 컴포넌트가 불필요한 재평가, 리렌더링을 방지하여 최적화를 할 수 있지만 무조건적으로 쓰지말고 어떤게 더 성능효율이 좋은지를 고려하여 사용하여야 한다. 만약 트리의 크기가 큰 컴포넌트와 상위에 위치에 있는 컴포넌트라면 React.memo를 사용하는 것이 더 높은 성능 효율을 가질 확률이 높다.

- React에서 컴포넌트는 React가 호출을 하면서 결국 자바스크립트 함수처럼 재실행된다. 그러므로 App 함수가 실행될 때마다 새로운 상수, 새로운 객체, 새로운 함수가 생성된다. 그 과정에서 이전 상태와 새로운 상태를 비교하여 재평가 하게 되는데 이때 자바스크립트의 특징에 따라 number, boolean 등 원시값들은 같은값 비교할때 같다고 인식하지만 사람이 봤을땐 같은 값을 가지고 있는 객체와 객체를 비교하면 이는 다르다고 인식한다. 따라서 App.js에서 객체의 일종인 함수를 props로 전달하면 새롭게 실행되는 함수와 이전의 함수를 비교하고 같은 내용의 함수이더라도 이를 다르다고 판단하여 값이 바뀌었다고 인식한며 재렌더링 현상이 일어난다. 이는 일반적인 리엑트의 이슈이다. 해당 이슈에 React.Memo를 사용하면 컴포넌트 최적화가 되지 않는 이슈 또한 생기는데 아눈 useCallback을 사용하여 함수 재생성을 방지할 수 있다.

- useCallback(function,[]): useCallback은 인자로 받은 함수를 리엑트의 내부 저장 공간에 저장하여 함수 객체가 실행될 때마다 이를 재사용할 수 있게 한다. 위와 같은 이슈가 있을 때 App 함수가 다시 실행되더라도 useCallback으로 인해 저장된 동일한 함수를 사용 할 수 있게 해주며 따라서 적용되지 않았던 React.Memo의 최적화를 사용할 수 있게 해준다. 이외에도 변하지 말아야 하는 함수가 있으면 useCallback 함수를 사용하면 된다. 두번째 인자로는 useEffect와 마찬가지로 의존성 배열를 입력해주면된다.

- React와 DB 연결: React와 DB를 연계할 때에는 앱으로 직접 데이터를 가져오거나 저장하고, 연결을 맺는 행위를 해서는 안된다. 클라이언트 내부에서 직접연결을 하게 된다면 이는 이 코드의 인증정보를 노출시키는 행위이다.(개발자 외의 외부 사람들도 접근하고 읽을 수 있게 되기 때문이다.)

- 따라서 별도의 Backend App을 구성하여 다른서버를 구축하여 DB에 연계하고 React를 사용해서 백엔드 앱과의 통신을 통해 안전하게 데이터를 받아올 수 있다.

- 커스텀 훅 : 정규함수, 안에 상태로 설계 할 수 있는 로직을 포함한 리엑트 훅,리엑트 훅에서 공통적으로 사용되는 훅을 아웃소싱하기 위해서는 일반적인 함수로는 불가능하다. 리엑트 컴포넌트 함수이거나 커스틈 훅에서만 리엑트 훅의 사용이 가능하다. 따라서 별도의 함수의 공통적인 부분을 아웃소싱 하기 위하여 커스텀 훅을 사용한다.

- 커스텀 훅 규칙: 무조건 use로 시작한다. 필수적으로 지켜야하는 엄격한 규칙, use로 시작 함으로써 해당 함수가 hook임을 알려주고 리엑트에서는 use를 보고 훅의 규칙에 따라 사용하게 된다.

- input 입력값 value를 사용하는 방법

  1. 자바스크립트 문법으로 event.target.value로 입력값을 입력할때마다 state로 상태관리를 하는방법, 즉각적인 유효성 검증을 위하여 값이 입력 될때 마다 상태검증이 필요한 경우 유용하다. 입력된 값을 초기화 하는 경우 유용하다. 초기화해준 state를 input창의 value={}로 입력하면 초기화 할 수 있다.ref로도 초기화를 할 수 있지만 이는 자바스크립트 언어로 DOM을 직접적으로 조작하는 방법이기 때문에 바람직한 사용법이 아니다.

  ```JavaScript
  namInputRef.curret.value = ""
  ```

  2. useRef를 사용하여 ref의 current.value로 입력값을 한번에 받아오는 방법, 만약 값이 폼이 제출되었을때 한번만 필요하다면 1번 방법보다 유용하다.(모든 키 입력마다 상태 값을 업데이트하지 않기 떄문)

- 클라이언트단에서의 유효성검증은 빠른 유효성 검증으로 사용자경험을 좋게 만들 수 있지만 보통 서버단의 유효성 검증으로 구축하여야한다. 브라우저에 있는 코드는 사용자에 의해 편집될 수 있기 때문이다. 따라서 클라이언트단의 유효성검증은 사용자경험을 향상시키기 위한 편의일 뿐 보안과는 상관 없다.

- Formik: 많은 form, input을 만들어야 할 때 사용 할 수 있는 유용한 서드파티 라이브러리, 다양한 로직들과 다양한 사례들이 있어서 활용하기 좋다.
  <a href="https://formik.org/">링크</a>
