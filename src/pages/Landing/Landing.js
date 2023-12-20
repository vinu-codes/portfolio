import React, { useState } from 'react'
import { Hero } from '@components/Hero'
import { TechRender } from '@components/TechCard'
import { Button } from '@common/Button'
import { Dropdown } from '@common/Dropdown/Dropdown'

const LandingPage = () => {
  const [state, setState] = useState({
    dropdown: [
      { label: 'Thor', id: 1, active: false },
      { label: 'Captain America', id: 2, active: false },
      { label: 'Iron Man', id: 3, active: false },
      { label: 'Extra Item', id: 4, active: false },
      { label: 'Extra sdfsdf', id: 5, active: false },
    ],
  })
  return (
    <div>
      <Hero />
      <TechRender />
      <Button>button</Button>
      <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      />
    </div>
  )
}

export default LandingPage
