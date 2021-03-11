import axios, {AxiosResponse} from "axios";
import config from "../config/consts";

export interface RequestParam {
    key: string
    value: string
}

const buildUrl = (path: any) => `${config.api_host}/${path}?client_id=${config.client_id}`

const buildQueryParams = (params: RequestParam[]) => params.map((elem) => `&${elem.key}=${elem.value}`)

const get = async (path: any, params: RequestParam[]): Promise<AxiosResponse> => {
    try {
        const _p = buildQueryParams(params)
        const result = await axios.get(buildUrl(path) + _p.join(','))
        return result
    } catch (e) {
        console.error(e)
        throw e
    }
}

export const apiInstance = {
    get
}