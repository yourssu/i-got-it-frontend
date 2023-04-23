import React from 'react'
import twinkle_1 from '../../images/twinkle_1.svg'
import twinkle_2 from '../../images/twinkle_2.svg'
import twinkle_3 from '../../images/twinkle_3.svg'
import twinkle_4 from '../../images/twinkle_4.svg'
import './LoginLayout.scss'

type LoginProps = {
  children: JSX.Element
}

const LoginLayout = ({ children }: LoginProps) => {
  return (
    <div className="bg">
      <div>
        <img className="twinkle_1" src={twinkle_1} alt="twinkle_1" />
        <img className="twinkle_2" src={twinkle_2} alt="twinkle_2" />
        <img className="twinkle_3" src={twinkle_3} alt="twinkle_3" />
        <img className="twinkle_4" src={twinkle_4} alt="twinkle_4" />
      </div>
      { children }
    </div>
  )
}

export default LoginLayout