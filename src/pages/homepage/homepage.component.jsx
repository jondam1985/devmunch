import React from 'react';
import SignInModal from '../../components/modal/sign-in-modal.component';
import SingUpModal from '../../components/modal/sign-up-modal.component'


const HomePage = () => {
    
  const openModel = () =>{
    open(<SignInModal />)
  }

  const openSignUp = () => {
    open(<SingUpModal/>)
  }


  return (
    <div>
      <button onclick={openModel} >log in</button>
      <button onClick={openSignUp} >sign up</button>
    </div>
  )
}

export default HomePage;