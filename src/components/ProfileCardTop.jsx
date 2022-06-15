import imagen from '../src/assets/foto.png';
import React from 'react'

function ProfileCardTop() {
  return (
   <>
   <div class="profile-card-top">
        <imagen src={imagen} alt="perfil"></imagen>
    </div>
   </>
  )
}

export default ProfileCardTop

