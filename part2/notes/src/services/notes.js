import axios from 'axios'
const baseUrl = '/api/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonexisting = {
    id: 1000,
    content: "this not is not saved to server",
    important : true,}
    
  return request.then(response => response.data.concat(nonexisting))
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, create, update 
}