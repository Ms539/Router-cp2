import React from 'react'
import ReactDOM  from 'react-dom'
 function Modal({pop,Close,TitleField,ImgField,RateField,URLField,TypeField,DescriptionField,Submit}) {
  
    if (!pop){return null}
  return ReactDOM.createPortal(
    <div class="modalContainer">
      
      <p style={{color:'white'}}></p>
      <div class="inputx">
      <input name='movieTitle' class="inputMovie" onChange={(e)=>TitleField(e)} minLength={'15cm'} placeholder='Movies Title'></input>
      <input name='Img' class="input" onChange={(e)=>ImgField(e)} placeholder='Image url'></input>
      <input name='Rate' type={'number'} class="input"  onChange={(e)=>RateField(e)}  placeholder='Rate a number from 1 to 7'></input>
      <input name='url' class="input"  onChange={(e)=>URLField(e)} placeholder='Movie trailer url'></input>
      <input name='Type' class="input" onChange={(e)=>TypeField(e)} placeholder='Type'></input>
      <input  name='Description' class='description'  onChange={(e)=>DescriptionField(e)} placeholder='Description'></input>
      </div>
      <button class="submitPop" onClick={()=>Submit()}>submit</button>
      <button class="closePop" onClick={()=>Close()}>Close </button>
      <div>
      
      
      </div>
    </div>,
    document.getElementById('portal')
  )
}
export default Modal