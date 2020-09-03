import React, {useState} from 'react'

const {Provider, Consumer} = React.createContext()


const ContextProvider = (props) => {

    const uglyThings = {

        title: 'Ugly Fish',
        discription:'Worlds Ugliest Fish',
        imgUrl: 'https://cff2.earth.com/uploads/2019/06/02000526/blobfish-730x410.jpg'
    }
    
    const [iniInput, setInitInput] = useState(uglyThings)
    const [title, setTitle]= useState('')
    const [discription, setDiscription] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    
    


   

    const change = (e) =>{
        e.preventDefault();
        const newInput = {title: title, 
          discription: discription, 
          imgUrl: imgUrl}
        const newThing = [...iniInput, newInput]
      setInitInput(prev =>({
          ...prev,
          newThing
      }))

      
      console.log(iniInput)
    }
      

    
    return(
        <div>
        <Provider value={iniInput}>
                {props.children}
            </Provider>

            <div>
            <form onSubmit={change}>
                <input
                  type='text'
                  name='title'
                  placeholder='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value) }
                  
                />
                <input
                  type='text'
                  name='discription'
                  placeholder='discription'
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  
                />
                <input
                  type='text'
                  name='imgUrl'
                  placeholder='image'
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  
                />
                <button>Submit</button>
            </form>
        </div>
        </div>
    )
}

export  {ContextProvider, Consumer as ContextConsumer}

