import React from 'react'


const InputForm = (props) =>{

      const {
          change, 
          submit, 
          input:{
             title,
             discription,
             imgUrl
          }
        } = props
   
    return(
        <div>
            <form onSubmit={submit}>
                <input
                  type='text'
                  name='title'
                  placeholder='title'
                  value={title}
                  onChange={change}
                  
                />
                <input
                  type='text'
                  name='discription'
                  placeholder='discription'
                  value={discription}
                  onChange={change}
                  
                />
                <input
                  type='text'
                  name='imgUrl'
                  placeholder='image'
                  value={imgUrl}
                  onChange={change}
                  
                />
            </form>
        </div>
    )
}

export default InputForm