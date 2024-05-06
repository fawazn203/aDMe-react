import React from 'react'
import getUrl from '../utils/getUrl'

export default function Logo() {
  return (
    <div className='logo'>
        <img src={getUrl('logo192.png')} alt="Logo" />
    </div>
  )
}
