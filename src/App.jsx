import { useState } from "react"
import "./App.css"
import { Configuration, OpenAIApi } from "openai"

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_key,
  })
  const openai = new OpenAIApi(configuration)

  const generateImg = async () => {
    try {
      const response = await openai.createImage({
        n: 1,
        prompt: prompt,
        size: "1024x1024",
      })
      setResult(response.data.data[0].url)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <h1>Generate an image using Open Ai API</h1>
      <input
        placeholder=""
        onChange={(e) => setPrompt(e.target.value)}
        type="text"
      />
      <button onClick={generateImg}>Generate Image</button>
      <img className="img" src={result} alt="" />
    </div>
  )
}

export default App
