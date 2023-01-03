import React, {useContext} from 'react'
import { NavBackContext } from '../../context/context'
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link, useNavigate } from 'react-router-dom'

const OnlineFormSubmission = () => {
    let navBack = useContext(NavBackContext)
    let navigate = useNavigate();

    const handleBack = ()=>{
        navigate(-1, {replace: true})
    }
  return (
    <>
    <div className="navback" style={{background: navBack.navBack}}></div>


    <div className='ofsPage-container' style={{padding: '3rem'}}>
    <ConstructionIcon sx={{fontSize: '15rem', color: 'var(--purple)'}} />
      <h1 style={{fontSize: '4rem', color: 'var(--purple)', fontFamily:'var(--primary-font)'}}>This page is under developments</h1>
      <h2 style={{fontSize: '3rem', fontFamily: 'var(--text-font)', color: 'var(--light-gray)'}}>Sorry for the inconvinience, head back later.</h2>
    </div>
    <br/>
      <h3 className="text-center">Head to <Link to="/"><span  style={{textDecoration: 'underline'}}>home page</span></Link></h3>
      <h3 className="text-center">Head <span  style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleBack}>back</span></h3>
    </>
  )
}

export default OnlineFormSubmission
