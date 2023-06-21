import React from "react"



function Form(){
    const [memeDt,setDt]=React.useState({topText:"",bottomText:"",img:"https://i.imgflip.com/2wifvo.jpg"})
    const [allMemes,setAllMemes]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function getImg(){
        const meme=allMemes
        setDt(memeDt => {
            return{
            ...memeDt,
            img:meme[Math.floor(Math.random()*meme.length)].url }})
        
    }
    function handleChange(event){

           setDt(prevDt => {
            return{
                ...prevDt,
                [event.target.name]:event.target.value
            }
           })

    }
    console.log(memeDt.topText,memeDt.bottomText)

    return(
       <div>
            <div className="form">
            <input className="input-field"
             type="text"
             placeholder="Top sentence"
             name="topText"
             onChange={handleChange}
             value={memeDt.topText}
             />
            <input className="input-field"
             type="text"
             placeholder="Bottom sentence"
             name="bottomText"
             onChange={handleChange}
             value={memeDt.bottomText}
             />
            
       
            <button onClick={getImg}>Get a meme image</button>
         
       
        </div>

<div className="meme">
<img id="memeimg" src={memeDt.img} alt="MemeImage" className="meme-Img"/>
<h3 className="meme-text-top">{memeDt.topText}</h3>
<h3 className="meme-text-bottom">{memeDt.bottomText}</h3>
</div>
</div>

    )

}
export default Form