import {useState,useEffect} from "react"
import "./index.css"

const Home =()=>{
    const [jokesArr,setJokesArr]=useState([])

    useEffect(()=>{
        const fetchJoke=async()=>{
            const response = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
            const data = await response.json()
            console.log(data)
            setJokesArr(data.jokes)
        }
        fetchJoke()
    },[])


    return(
        <div className="home-page">
            <h1>Home</h1>
            <table>
                <thead>
                <tr className="headings">
                    <th>ID</th>
                    <th>CATEGORY</th>
                    <th>JOKE</th>
                    <th>LANGUAGE</th>
                    <th>SAFE</th>
                    <th>TYPE</th>
                </tr>
                </thead>
                <tbody>
                {jokesArr.map(each=>(
                <tr className="row">
                    <td>{each.id}</td>
                    <td>{each.category}</td>
                    <td>{each.joke}</td>
                    <td>{each.lang}</td>
                    {each.safe?(<td>TRUE</td>):(<td>FALSE</td>)}
                    <td>{each.type}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}


export default Home