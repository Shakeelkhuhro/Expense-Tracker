import styled from "styled-components";
import HomeComponent from "./modules/home";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin: 30px 0 10px
font-family: Montserrat;
`;

const Header = styled.span`
color: black;
font-size: 25px;
font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent />
      </Container>
      <h4>Created By: Shakeel Khuhro</h4>
    </div>
  );
}

export default App;
