import React from 'react'
import { Controls, BearCounter, ResetState, Users } from '../components/coba'
interface zustandPage {
  // BearCounter: () => void;
  // Controls: () => void;
}

const Zustand:React.FC<zustandPage> = () => {
  return (
    <div>
      Zustand
      <BearCounter/>
      <Controls />
      <ResetState />
      <Users />
    </div>
  )
}

export default Zustand