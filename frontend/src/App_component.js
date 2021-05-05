import { useState } from 'react';

// Two Components with Fixed Contents

// function MyComponent() {
//     return (
//         <div>我是一個 Component</div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <MyComponent />
//         </div>
//     )
// }

// using props

// function MyComponent(prop) {
//     return (
//         <div style={{ color: prop.color }}>我是一個 {prop.color} 的 Component</div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <MyComponent color="#FF2222" />
//             <MyComponent color="#2222FF" />
//             <MyComponent color="#FF22FF" />
//         </div>
//     )
// }

// Using array and map to generate many components

// function MyComponent(prop) {
//   return (
//       <div style={{ color: prop.color }}>我是一個 {prop.color} 的 Component</div>
//   )
// }

// function App() {
//   const colors = ['#FF0000', '#FF4500', 'orange', '#FE2233']
//   return (
//       <div>
//           {colors.map(x => <MyComponent color={x} />)}
//       </div>
//   )
// }

// multiple props to one Component

// function MyComponent(prop) {
//   return (
//       <div style={{ color: prop.color, background: prop.background }}>
//           我是一個 {prop.color} 的 Component
//       </div>
//   )
// }

// function App() {
//   const colors = [
//       { color: '#FF0000', background: '#eee' },
//       { color: '#FF4500', background: '#aaa' },
//       { color: 'orange', background: '#eee' },
//       { color: '#FE2233', background: '#aaa' }
//   ]
//   return (
//       <div>
//           {colors.map(x => <MyComponent color={x.color} background={x.background} />)}
//       </div>
//   )
// }

// <Tag>THERE ARE SOMETHING</Tag> will be props.children

// function MyComponent(prop) {
//   return (
//       <div style={{ color: prop.color, background: prop.background }}>
//           我是一個 {prop.color} 的 Component，內容是 {prop.children}
//       </div>
//   )
// }

// function App() {
//   const colors = [
//       { color: '#FF0000', background: '#eee', content: '項目 1' },
//       { color: '#FF4500', background: '#aaa', content: '項目 2' },
//       { color: 'orange', background: '#eee', content: '項目 3' },
//       { color: '#FE2233', background: '#aaa', content: '項目 4' }
//   ]
//   return (
//       <div>
//           { colors.map(x =>
//               <MyComponent color={x.color} background={x.background}>{x.content}</MyComponent>
//           ) }
//       </div>
//   )
// }

// you can set state in the sub-component as usual

function MC2(props) {
  const [striked, setStriked] = useState(false);
  
  const strike = () => {
      setStriked(!striked);
  };
  
  return <div style={{ textDecoration: striked ? 'line-through' : '' }}>
      {props.children}
      <button onClick={strike}>幹掉</button>
  </div>
}

function App() {
  const list = ['task1', 'task2', 'task3'];
  
  return (
      <div>
          {list.map(x => <MC2>{x}</MC2>)}
      </div>
  )
}




export default App;