import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/UI/Sidebar'

function ProfilePanel() {
  const location = useLocation()
  const [tab,setTab] = useState('')
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])
  console.log(tab)  

  return (
    <div className='h-min-screen items-center md:items-start flex flex-col md:flex-row'>
      <Sidebar />
    </div>
  )
}

export default ProfilePanel