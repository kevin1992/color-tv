import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import UserCard from "./components/UserCard";
import {getUsers} from "../../api/users";
import {User} from "../../interfaces/User";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setProfileActionCreator} from '../../redux/profile';

const Container = styled.div`
display: flex;
justify-content: center;
`

const CardContainer = styled.div`
width: 70%;
margin-top: 50px;
&:hover{
cursor:pointer;
}
`

const CardsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Input = styled.input`
margin-top: 30px;
flex: 1;
max-width: 800px;
height: 50px;
background-color: #f2f2f2;
border: none;
border-radius: 10px;
outline: none;
padding-left:25px;
font-size:32px;
`

const UsersPage: React.FC = () => {
    const [userList, setUserList] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [requested, setRequested] = useState<boolean>(false)
    const [query, setQuery] = useState<string>("")
    const history = useHistory();
    const dispatch = useDispatch()

    const fetchUser = useCallback(async (query: string) => {
        const result = await getUsers(query)
        setUserList(result)
        setLoading(false)
        setRequested(true)
    }, [setUserList, setLoading, setRequested])

    const onInputChange = useCallback((event: any) => {
        fetchUser(event.target.value)
        setQuery(event.target.value)
        setLoading(true)
    }, [setQuery, fetchUser])

    const goToProfile = useCallback((user: User) => {
        dispatch(setProfileActionCreator(user));
        history.push(`profile/${user.username}`)
    }, [history, dispatch])
    return <>
        <Container>
            <Input onChange={onInputChange} type="text" placeholder={"Find a user..."}/>
        </Container>
        <CardsContainer>
            {
                loading ?
                    <p>Loading data...</p> : userList.length === 0 && requested && query ?
                    <p>No results...</p> : userList.map((user) => <CardContainer onClick={() => goToProfile(user)}>
                            <UserCard user={user}/>
                        </CardContainer>
                    )
            }
        </CardsContainer>
    </>
}


export default UsersPage;