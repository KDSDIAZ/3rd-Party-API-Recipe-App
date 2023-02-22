import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import React from 'react'
import styled from "styled-components";

function Home() {
  return (
    < Content>
      <Veggie />
      <Popular />
    </Content>
  )
}

const Content = styled.div`
width: auto;
max-width: 900px;
`;

export default Home