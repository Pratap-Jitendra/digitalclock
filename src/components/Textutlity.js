import React from 'react'
import { useState } from 'react';

export default function Textutlity(props) {

  const [Text, setText] = useState("");
  const handleupcase = () => {
    setText(Text.toUpperCase())
    props.showAlert("Upper case:", "Success");
  }
  const conversion = () => {
    
    var Obj = {
    
    ẹ: "&#x1EB9;",
    ạ: "&#x1EA1;",
    ū: "&#x016B;",
    ġ: "&#x0121;",
    ṙ: "&#x1E59;",
    ḁ: "&#x1E01;",
    ṡ: "&#x1E61;",
    ṣ: "&#x1E63;",
    ṅ: "&#x1E45;",
    ṇ: "&#x1E47;",
    ḣ: "&#x1E23;",
    ḥ: "&#x1E25;",
    ṫ: "&#x1E6B;",
    ṭ: "&#x1E6D;",
    à: "&#x00E0;",
    á: "&#x00E1;",
    ă: "&#x0103;",
    â: "&#x00E2;",
    ã: "&#x00E3;",
    å: "&#x00E5;",
    ä: "&#x00E4;",
    ā: "&#x0101;",
  
    æ: "&#x00E6;",
    ą: "&#x0105;",
    À: "&#x00C0;",
    Á: "&#x00C1;",
    Â: "&#x00C2;",
    Ä: "&#x00C4;",
    è: "&#x00E8;",
    é: "&#x00E9;",
    ë: "&#x00EB;",
    È: "&#x00C8;",
    ì: "&#x00EC;",
    í: "&#x00ED;",
    î: "&#x00EE;",
    ï: "&#x00EF;",
  
    ō: "&#x014D;",
    Ì: "&#x00CC;",
    Ï: "&#x00CF;",
    ò: "&#x00F2;",
    ó: "&#x00F3;",
    ô: "&#x00F4;",
    ø: "&#x00F8;",
    ö: "&#x00F6;",
    ù: "&#x00F9;",
    ú: "&#x00FA;",
    ü: "&#x00FC;",
    Ü: "&#x00DC;",
    ś: "&#x015B;",
    ŝ: "&#x015D;",
    š: "&#x0161;",
    ŕ: "&#x0155;",
    ň: "&#x0148;",
    β: "&#x03B2;",
    μ: "&#x03BC;",
    ς: "&#x03C2;",
    ω: "&#x03C9;",
    ê: "&#x00EA;",
    ξ: "&#x03BE;"

      
      
  };
  let text = Text.replace(/ẹ|ạ|ū|ġ|ṙ|ḁ|ṡ|ṣ|ṅ|ṇ|ḣ|ḥ|ṫ|ṭ|à|á|ă|â|ã|å|ä|ā|ū|æ|ą|À|Á|Â|Ä|è|é|ë|È|ì|í|î|ï|ă|ō|Ì|Ï|ò|ó|ô|ø|ö|ù|ú|ü|Ü|ś|ŝ|š|ŕ|ň|β|μ|ς|ω|ê|ξ/gi, function(matched){
        return Obj[matched];
  });
  setText(text);
  props.showAlert("Entity Changed", "Success");   
  }
 
   const handleformat =()=>
  {
    let text=Text.replace(/\n/g, " ")
    text=text.replace(/‘/g, `&#x2018;`)
    text=text.replace(/’/g, `&#x2019;`)
    text=text.replace(/“/g, `&#x201C;`)
    text=text.replace(/”/g, `&#x201D;`)
   
     
    setText(text);
    props.showAlert("Hard Enter Merge", "Success");
  }

  const handleclearcase = () => {
    setText("")
  }
 
  const handlecopycase = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Text Copied", "Success");

  }

  const Edit = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>{props.title}</h1>
          <div className="form-floating my-3">
            <textarea className="form-control" rows="8" cols="50" value={Text} onChange={Edit} id="floatingTextarea"></textarea>
          </div>
          <button className="btn btn-info mx-2 my-2" onClick={handleupcase}>Upper Case</button>
          
          <button className="btn btn-info mx-2 my-2" onClick={handlecopycase}>Copy</button>
          <button className="btn btn-info mx-2 my-2" onClick={handleformat}>Format</button>
          <button className="btn btn-info mx-2 my-2" onClick={handleclearcase}>Clear Text</button>
          <button className="btn btn-info mx-2 my-2" onClick={conversion}>Entity</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>Text Preview:</h2>
          <p style={{color:"red"}}>{Text===""?"Please Enter some to conversion...":Text}</p>
          <p><b>No of Text:</b> {Text.length}</p>
          <p><b>No of Words:</b> {Text.split(" ").length}</p>
        </div>


      </div>

    </>
  )
}
