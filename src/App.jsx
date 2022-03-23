import './App.css'
import {useState} from 'react'
import axios from 'axios'


//Access key - CrDl36gxhkJx8aRcA6RgSB2JSYl97oOeSV1SE8Jq6Qc
//Secret key - hHFmwcBEWYqZdEbxmOp-ywakTwcFfg3Yww3yHNadjLA

//https://api.unsplash.com/

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const apiKey = "CrDl36gxhkJx8aRcA6RgSB2JSYl97oOeSV1SE8Jq6Qc";

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${value}&orientation=squarish&per_page=20`)
    .then(res => res.json())
    .then(data => {
      setResults(data.results)
    })
  }

  return (
    <div className="App">
      <div className="mydiv">
        <span>Search</span>
        <input 
        style={{width: "60%"}}
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)}/>
        <button className="btn" onClick={() => fetchImages()}>Send</button>
      </div>
      <div className="gallery">
        {
          results.map((item) => {
          return <img className="item" key = {item.id} src = {item.urls.regular} />
          })
        }

      </div>
    </div>
  )
}

export default App
