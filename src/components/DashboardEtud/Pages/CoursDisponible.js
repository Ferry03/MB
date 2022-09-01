import React from 'react'
import Navbar from '../Navbar';
import * as MbIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as Ionicons from 'react-icons/io5';
import Footer from '../../Footer';
import diplome from '../../../Images/diplome.jpg';
import { Link } from 'react-router-dom';


const CoursDisponible = () => {
  return (
    <>
   
    <Navbar/>
    <h1 className='text-center ' style={{color: 'black', marginTop:"100px"}}>Nos Cours</h1>
    <div className='cours d-flex justify-content-center col-xs-12 col-lg-12 row  mx-auto ' style={{marginTop: '80px' , marginBottom: '200px'}}>
        
          <div className='col-xs-12 col-lg-3 outils  mb-3 '>
            <MbIcons.MdVideoLibrary className='icons mb-3 mt-3' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Videos </h4>
            <p className='text-center px-2'>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
          <div className='col-xs-12 col-lg-3 outils  mb-3'>
            <BiIcons.BiStats className='icons mb-3 mt-3 ' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Statistique </h4>
            <p className='text-center px-2 '>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
          <div className='col-xs-12 col-lg-3 outils mb-3'>
            <Ionicons.IoTicketSharp className='icons mb-3 mt-3' style={{fontSize: '50px'}}/>
            <h4 className='text-center mb-5'>Coupons et Lot </h4>
            <p className='text-center px-2'>Recevez un accompagnement sur mesure de la part de nos Experts qui travaillent sur MbSchool. Alors qu'attendez-vous pour nous rejoindre et recevoir des critiques et suggestions de nos experts. </p>
          </div>
    </div>

    <div className='cours d-flex justify-content-center col-xs-12 col-lg-12 row  mx-auto ' style={{marginTop: '80px' , marginBottom: '200px'}}>

    <div className="card" style={{width: "18rem"}}>
      <img src={diplome} className="card-img-top" alt="style"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link href="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
    </div>
    <Footer/>
    
    
    </>
  )
}

export default CoursDisponible;