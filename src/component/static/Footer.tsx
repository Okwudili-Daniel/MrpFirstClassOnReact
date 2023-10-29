import React from 'react'
import styled from 'styled-components';

const Foot = () => {
  return (
    <div>
      <Container>
        CopyRight Reserved. Okwudili Daniel
      </Container>
    </div>
  )
}

export default Foot;
const Container= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`