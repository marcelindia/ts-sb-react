import * as React from 'react';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
width: 100%;
`

export default function Footer (){
    return (
        <>
        <StyledFooter>
          <p>&copy; 2023, Diana Marcelin</p>
        </StyledFooter>
      </>
    )
}

