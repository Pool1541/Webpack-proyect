import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 150px;
  height: 130px;
  background-color: #bbb;
  border: 2px solid black;
  border-radius: 10px;
  color: white;
  margin: 100px auto 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ count }) => count ? '1.6rem' : '1.3rem'};
  text-transform: uppercase;
  cursor: ${({ count }) => count ? 'normal' : 'pointer' };
  box-shadow: 2px 2px 10px 2px #00000080;
  transition: all .1s ease;
  user-select: none;
  text-align: center;
  padding: 0 20px;

   &:active {
    box-shadow: 0 0 0 0 black;
   }
`
export default function App() {
  const [count, setCount] = useState(0);
  const [accumulator, setAccumulator] = useState([]);

  function handleClick() {
    setCount(count + 1);
    setAccumulator(accumulator.concat(count));
    // console.log(accumulator);
  }
  
  function handleRestart() {
    setCount(0);
    setAccumulator([]);
  }

  if(count === 20) {
    return(
      <>
        <div className="container">
          <h1>Hola, soy Pool Llerena</h1>
          <h2>Front-End developer</h2>
        </div>
        <Container onClick={handleRestart}>Ya llegaste a 20!</Container>
      </>
    )
  }

  return (
    <>
      <div className="container">
        <h1>Hola, soy Pool Llerena</h1>
        <h2>Front-End developer</h2>
      </div>
      <Container onClick={handleClick}>
        Click me!
      </Container>
      <Container count>{count}</Container>
    </>
  )
}