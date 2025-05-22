import axios from 'axios'
import { useEffect, useState } from 'react'

const useCallApi = (api) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setData(res.data.result))
      .catch((err) => console.error(err))
  })
  return data
}

export default useCallApi
