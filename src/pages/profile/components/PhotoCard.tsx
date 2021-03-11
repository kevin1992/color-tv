import React, {useCallback} from 'react'
import styled from 'styled-components'

const Container = styled.div`
transition: all 235ms ease 0s;
box-shadow: 15px 28px 25px -18px rgb(0 0 0 / 20%);
border: 1px solid #c3c3c3;
display: flex;
width: 100%;
margin: 10px;
justify-content: center;
flex-direction: column;
align-items: center;
`
const ItemContainer = styled.div`
display: flex;
flex-direction: row;
flex:0 1 300px;
justify-content: center;
 transition: transform .5s; /* Animation */
&:hover{
cursor:pointer;
transform: scale(1.1);
background-color: white;
z-index: 9;
}
`

const Img = styled.img`
max-width: 100%;
height: auto;

`


interface Props {
    src: string
}


const PhotoCard: React.FC<Props> = ({src}) => {
    const goToImage = useCallback((src: string) => {
        window.location.href = src
    }, [])
    return <>
        <ItemContainer onClick={() => goToImage(src)}>
            <Container>
                <Img
                    src={src}/>
            </Container>
        </ItemContainer>
    </>
}


export default PhotoCard;