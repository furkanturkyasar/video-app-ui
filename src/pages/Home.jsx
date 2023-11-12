import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
        {
            Array.from({length: 20 }).map((_, i) => {
                return <div key={i}><Card /></div>;
            })
        }
    </Container>
  );
};

export default Home;