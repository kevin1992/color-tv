import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import PhotoCard from "./components/PhotoCard";
import {State} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {getUser, getUserPhotos, getUsers} from "../../api/users";
import {setProfileActionCreator} from "../../redux/profile";
import {useParams} from 'react-router-dom';
import {Photo} from "../../interfaces/Photo";

const Container = styled.div`
display: flex;
flex-direction: column;
`
const ImageContainer = styled.div`
position: relative;
background-color: #61dafb;
height: 300px;
flex: 1 1 300px;
display: flex;
justify-content: center;
`

const CircleImg = styled.img`
border-radius: 50%;
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: -100px;
`
const ProfileInfoContainer = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StatsConatiner = styled.div`
flex-direction: row;
display: flex;

`

const Stats = styled.div`
flex-direction: column;
display: flex;
align-items: center;
margin-right: 30px;
margin-left: 30px;
`

const PhotosContainer = styled.div`
margin-left: 30px;
margin-right: 30px;
margin-top: 30px;
display: flex;
flex-wrap: wrap;
`


const ProfilePage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [requested, setRequested] = useState<boolean>(false)
    const [photos, setPhotos] = useState<Photo[]>([])
    const user = useSelector((state: State) => state.profile);
    const dispatch = useDispatch();
    const {username} = useParams<{ username: string }>();

    useEffect(() => {
        (async () => {
            const fetchUser = async (username: string) => {
                const result = await getUser(username)
                await dispatch(setProfileActionCreator(result));
            }
            if (!user?.id) {
                setLoading(true)
                await fetchUser(username)
            }
            const photos = await getUserPhotos(username)
            setLoading(false)
            setRequested(true)
            setPhotos(photos)
        })()
    }, [user, username])

    return <>
        {
            <Container>
                <ImageContainer>
                    <CircleImg
                        src={user.profile_image?.large}/>
                </ImageContainer>
                {
                    user && requested && !loading ? <>
                        <ProfileInfoContainer>
                            <h1>{user.name}</h1>
                            <p>{user.location}</p>
                            <p>{user.bio}</p>
                            <StatsConatiner>
                                <Stats>
                                    <h2>{user.total_likes}</h2>
                                    <h3>Likes</h3>
                                </Stats>
                                <Stats>
                                    <h2>{user.total_photos}</h2>
                                    <h3>Photos</h3>
                                </Stats>
                            </StatsConatiner>
                        </ProfileInfoContainer>
                        <PhotosContainer>
                            {
                                photos.map(photo => <PhotoCard src={photo.urls.regular}/>)
                            }
                        </PhotosContainer>
                    </> : <p style={{textAlign: 'center'}}>Loading...</p>
                }
            </Container>
        }
    </>
}


export default ProfilePage;