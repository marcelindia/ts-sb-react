import * as React from 'react';
import styled from 'styled-components';
import { Button } from '../../stories/Button';

export interface IMainProps {
    handleOnClick: () => void;
}

const StyledMain = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 1rem;


`

export default function Main (props:IMainProps){
    const {handleOnClick} = props;
    return(
        <StyledMain>
            <div>
                <Button label="White" onClick={handleOnClick} />
            </div>
            <div>
                <Button label="Red" onClick={handleOnClick}/>
            </div>
            <div>
                <Button label="Rose" onClick={handleOnClick} />
            </div>
            <div>
                <Button label="Sparkling" onClick={handleOnClick} />
            </div>
            <div>
                <Button label="Dessert" onClick={handleOnClick} />
            </div>
            <div>
                <Button label="Port" onClick={handleOnClick} />
            </div>
        </StyledMain>
    )
}