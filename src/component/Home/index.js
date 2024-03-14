import {useState,useEffect} from "react"
import {TailSpin} from "react-loader-spinner"
import "./index.css"

const apiStatus = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProcess: 'PROCESS',
    failure: 'FAIL',
  }
  

const Home =()=>{
    const [jokesArr,setJokesArr]=useState([])
    const [status,setStatus] = useState('INITIAL')

    useEffect(()=>{
        const fetchJoke=async()=>{
            setStatus("PROCESS")
            const response = await fetch("https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10")
            const data = await response.json()
            console.log(data)
            setJokesArr(data.jokes)
            setStatus("SUCCESS")
        }
        fetchJoke()
    },[])

   const renderTheLoader = () => (
        <div className="loader-container">
          <TailSpin color="#F7931E" height={50} width={50} />
        </div>
      )

    const renderTheTable=()=>(
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
     
      )

      const renderTheView = () => {
        switch (status) {
          case apiStatus.inProcess:
            return renderTheLoader()
          case apiStatus.success:
            return renderTheTable()
    
          default:
            return null
        }
      }


    return(
        <>
        <div className="home-page">
            <h1>Home</h1>
            {renderTheView()}
        </div>
        </>
        
    )
}


export default Home