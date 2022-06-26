import axios from "axios"
import { useEffect } from "react"


function Popular() {

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.data
        console.log(data)
    }

  return (
    <div>Popular</div>
  )
}

export default Popular