import React,{useState} from 'react';
import Modal from 'react-modal';
function App(){

    const [modal, setModal] = useState(false)

    return(
        <div>
           <button onClick={()=>setModal(true)}>Open Modal</button>
           <Modal isOpen={modal} onRequestClose={()=>setModal(false)}>
               <form>
                   <label>ID</label>
                   <br />
                   <input type="text" placeholder="enter id"/>
                   <br />
                   <br />
                   <label>User Name</label>
                   <br />
                   <input type="text" placeholder="enter your username"/>
               </form>
               <br />
               <div>
                   <button onClick={()=>setModal(false)}>Close</button>
               </div>
           </Modal>
        </div>
    )
}
export default App;