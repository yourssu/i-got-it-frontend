import React from 'react'
import NameTag1 from '../../images/Cheer/name_tag_1.svg'
import NameTag2 from '@/images/Cheer/name_tag_2.svg'
import NameTag3 from '@/images/Cheer/name_tag_3.svg'
import './Cheer.scss'
import { dummy } from './dummy'

const Cheer = () => {
  const imgPath = [NameTag1, NameTag2, NameTag3]

  return (
    <div className="cheer-container">
      <div className="cheer-title">~응원의 릴레이~</div>
      <div>응원들</div>
    </div>
  )
}

export default Cheer
