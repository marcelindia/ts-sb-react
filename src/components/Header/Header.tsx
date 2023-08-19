import * as React from 'react';
import styled from 'styled-components';

interface IHeaderProps {
    title: string;
}

const StyledHeader = styled.div`
text-align: center;
font-size: 1.5rem;
position: relative;
color: white;
`

export default function Header (props:IHeaderProps){
    return(
        <StyledHeader>
            <h1>{props.title}</h1>
        </StyledHeader>
    )

}