import React from 'react'
import styled from 'styled-components'
import {User} from "../../../interfaces/User";

const PhotoContainer = styled.div`
display: flex;
flex-direction: column;
flex:0;
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
flex:1;
`

const Card = styled.div`
display: flex;
padding: 10px;
transition: all 235ms ease 0s;
box-shadow: 15px 28px 25px -18px rgb(0 0 0 / 20%);
border: 1px solid #c3c3c3;
`
const UserName = styled.span`
flex: 1;
font-size: 16px;
color: black;
`

const Info = styled.span`
flex: 1;
font-size: 14px;
color: gray;
`

const Img = styled.img`
max-width: 160px;
height: auto;
`

interface Props {
    user: User
}

const UserCard: React.FC<Props> = ({user}) => {
    return <Card>
        <PhotoContainer>
            <Img src={user.profile_image?.large}/>
        </PhotoContainer>
        <InfoContainer>
            <UserName>{user.name}</UserName>
            <Info>{user.bio}</Info>
        </InfoContainer>
    </Card>

}


export default UserCard;