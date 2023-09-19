import { useState } from 'react'
import './App.css'
import quotes from './database/quote.json'
import quotesCelebres from './database/famousPhrases.json'
import { getRandom } from './utils/random'
import { QuoteBox } from './components/QuoteBox'

const bgSpace = ["bg1", "bg2", "bg3", "bg4"]
const bgTruty = ["bg1opt2", "bg2opt2", "bg3opt2", "bg4opt2"]

function App() {
  const [isModeSpace, setIsModeSpace] = useState(true)

  const [quote, setQuote] = useState(getRandom(quotes))
  const [currentBg, setCurrentBg] = useState(getRandom(bgSpace))

  // estados para frases celebres
  const [bgtruty, setBgtruty] = useState(bgTruty)
  const [phrasesCelebres, setPhrasesCelebres] = useState(getRandom(quotesCelebres))

  const handleChangeMode = () => {
    setIsModeSpace(!isModeSpace)
    if (isModeSpace === true) {      
      setCurrentBg(getRandom(bgSpace))      
    } else {      
      setBgtruty(getRandom(bgTruty))      
    }
  }

  const handleChangeQuote = () => {
    if (isModeSpace === true) {
      setQuote(getRandom(quotes))
      setCurrentBg(getRandom(bgSpace))  
    }else{
      setBgtruty(getRandom(bgTruty))
      setPhrasesCelebres(getRandom(quotesCelebres))
    }
  }

  return (
    <main className={`App ${isModeSpace === true ? currentBg : bgtruty}`} >
      {isModeSpace ? 
      <div className='divchangeMode bx-burst-hover'>
        <button onClick={handleChangeMode} className='changeMode' >Change to Phrases Celebres</button>
      </div>
    :
    <div className='divbtn'>
      <button onClick={handleChangeMode} className='changeModeCelebre' >Change to Space</button>
    </div>
    }
      <QuoteBox handleChangeQuote={handleChangeQuote} isModeSpace={isModeSpace} phrasesCelebres={phrasesCelebres}  quote={quote} />
    </main>
  )
}

export default App
