import { useState } from 'react'
import './App.css'
import quotes from './database/quote.json'
import { getRandom } from './utils/random'
import { QuoteBox } from './components/QuoteBox'

<style>
    @import url('https://fonts.cdnfonts.com/css/digital-numbers');
</style>

const listBg = ["bg1", "bg2", "bg3", "bg4"]
function App() { 
  const [quote, setQuote] = useState(getRandom(quotes))
  const [currentBg, setCurrentBg] = useState(getRandom(listBg))
  const handleChangeQuote = () =>{
    setQuote(getRandom(quotes))
    setCurrentBg(getRandom(listBg))
  }

  return (
    <main className={`App ${currentBg}`} >    
      <QuoteBox handleChangeQuote = {handleChangeQuote} quote= {quote}/>    
    </main>
  )
}

export default App
