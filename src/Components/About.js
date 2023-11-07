import React from 'react'

export default function About(props) {
  return (
    <>
        <div className="container"  style={{ color: props.mode === "light" ? "black" : "white" }}>
            <h1 className={`py-1 text-${props.mode==='light'?'black':'white'}`} style={{fontSize:'32px'}}>The Top 10 Most Difficult-to-Spot Writing Mistakes</h1>
            <p className={`text-${props.mode==='light'?'black':'light'}  `}  style={{ color: props.mode === "light" ? "black" : "white" }}> Writing is like trying to juggle flaming knives while riding a unicycle – it requires skill, precision, and a healthy dose of madness. But even the most seasoned writers can get a little lost in the word jungle, and typos and grammatical blunders can sneak up on them like ninjas in the night. So, without …</p>
       
            <h1 className={`py-2 text-${props.mode==='light'?'black':'white'}`} style={{fontSize:'32px'}}>Simple Tips for Great Writing</h1>
            <p className={`   text-${props.mode==='light'?'black':'light'}  `} > Writing the English language is just as much an art as it is a science. No doubt, your schoolteachers gave you rules to stick to in class. But out in the real world, there’s more leeway than you may have realized. Not to worry. You don’t need a master’s degree in publishing to be a …</p>
       
            <h1 className={`py-2 text-${props.mode==='light'?'black':'white'}`} style={{fontSize:'32px'}}>The Oxford Comma: The Splice of Life</h1>
            <p className={`   text-${props.mode==='light'?'black':'light'}  `} > Debates among writers, editors, teachers, and others who use English are common. One of the longest-standing debates is that over the Oxford comma, aka the serial comma. People arguing over a punctuation mark? As silly as it sounds, it’s been going on for decades. If you’re not aware of this debate, we don’t want you …</p>

            <h1 className={`py-2 text-${props.mode==='light'?'black':'white'}`} style={{fontSize:'32px'}}>Who vs. Whom</h1>
            <p className={`   text-${props.mode==='light'?'black':'light'}  `} > Who or whom? The question trips up even grammar-lovers. And in many circles, whom is becoming obsolete, which may sadden grammar purists. Although who and whom are similar, each serves a distinct purpose. In order to understand how to use these pronouns correctly, you’ll have to refresh yourself on sentence structure. Once you’ve got this …</p>

            <h1 className={`py-2 text-${props.mode==='light'?'black':'white'}`} style={{fontSize:'32px'}}>Affect vs. Effect</h1>
            <p className={`   text-${props.mode==='light'?'black':'light'}  `} > Don’t let the difference between affect and effect affect your self-confidence. Learning these two words is a cinch. You might get away with not knowing the difference when speaking, as these two words are usually homophones (soundalikes). But your basic spell-checker won’t always catch a usage error if you type a correctly spelled version of …</p>
        </div>
    </>
  )
}
