import {apiInstance} from "../index";
import {User} from "../../interfaces/User";
import {Photo} from "../../interfaces/Photo";

export const getUsers = async (query: string): Promise<User[]> => {
    const result = await apiInstance.get('search/users', [{
        key: 'query',
        value: query
    }]);
    return result.data.results
}

export const getUser = async (username: string): Promise<User> => {
    const result = await apiInstance.get(`users/${username}`, []);
    return result.data
}

export const getUserPhotos = async (username: string): Promise<Photo[]> => {
    const result = await apiInstance.get(`users/${username}/photos`, []);
    return result.data
}