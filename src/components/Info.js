import React from 'react'
import styled from 'styled-components'

const StyledInfo = styled.div`
background-color: #fafafa;
/* background: url("./images/space3.png");
filter: grayscale(0.4);
background-size: cover; */
margin: 0;
padding-top: 100px;
height: 100%;
padding-bottom: 10px;
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
div{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}
ul{
margin: 0;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 0;
list-style: none;
width: 80vw;
li{
  width: calc(80% / 3);
  height: 70vh;
  background-color: #FFFFFF;
  margin: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(143,134,134,0.75);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: solid #CDCDCD 1px;
  div{
      display: none;
    }
  :hover{
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
    img{
      display: none;
    }
  }
  img{
    margin-top: 50px;
    padding: 1px;
    border: black 2px solid;
    border-radius: 100%;
    width: 40%;
  }
}
}
`

const Info = () => {
//   const [astro, setAstro] = React.useState([])

//   const obtenerDatos = async () => {
//     const data = await fetch('https://ll.thespacedevs.com/2.0.0/astronaut/')
//     const astronauts = await data.json()
//     setAstro(astronauts.results)
//   }

// React.useEffect(() => {
//   obtenerDatos()
// }, [])

  return (
    <StyledInfo>
      <div>
        <button></button>
        <button></button>
      </div>
      <ul>
        {/* {
          astro.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        } */}
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
        <li>
          <img src="./images/astronaut.jpg" alt=""/>
          <div>
            <h3>Nombre:</h3>
            <h4>Nacionalidad</h4>
          </div>
        </li>
      </ul>
    </StyledInfo>
  )
}

export default Info
