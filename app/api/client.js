import { create } from 'apisauce'

const apiClient = create({
	baseURL: 'http://10.0.0.18:9000/assets/',
})

apiClient.get('/listings').then((response) => {
	if (!response.ok) {
		response.problem
	}
})
