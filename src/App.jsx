import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"Taro Cultivation"},
    {text1:"Mesmerize with", text2:"its benefits"},
    {text1:"Protect the", text2:"crops"},
  ]
  const [heroCount,setHeroCount] = usestate(2);
  const [playStatus,setPlayStatus] = usestate(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navigation />
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App