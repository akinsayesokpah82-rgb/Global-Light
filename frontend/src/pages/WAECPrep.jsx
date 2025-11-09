import React, {useState} from 'react'
import axios from 'axios'
import { useSpeechSynthesis } from 'speech-synthesis-react';

export default function WAECPrep(){
  const [q, setQ] = useState('')
  const [ans, setAns] = useState(null)
  const { speak } = useSpeechSynthesis()

  const ask = async () => {
    try {
      const res = await axios.post('/api/openai/chat', { message: q, mode: 'waec' })
      setAns(res.data)
      const text = res.data?.choices?.[0]?.message?.content || JSON.stringify(res.data)
      speak({ text })
    } catch (e) {
      setAns({ error: e.message })
    }
  }
  return (
    <div>
      <h2>WAEC / WASSCE Tutor</h2>
      <textarea value={q} onChange={e=>setQ(e.target.value)} rows={4} cols={60} />
      <br/>
      <button onClick={ask}>Ask AI Tutor</button>
      <pre style={{whiteSpace: 'pre-wrap'}}>{ans && JSON.stringify(ans, null, 2)}</pre>
    </div>
  )
}
