import { baseUrl } from './env'
import axios from 'axios'
axios.defaults.baseURL = baseUrl;

export default async(url , data , type = 'GET') => {
	type = type.toUpperCase()
	url = baseUrl + url

	switch (type) {
		case "GET":
			return axios.get(url,{
				params:data
			})
			break;
		default:
			// statements_def
			break;
	}
}