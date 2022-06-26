import axios from "axios"
import { useEffect, useState } from "react"


function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.data
        console.log(data)
        setPopular(data.recipes)
    }

  return (
    <div>
        {popular.map((recipe) => (
            <div key={recipe.id} className='card'>
                <p>{recipe.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Popular