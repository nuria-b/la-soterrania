import React from 'react';
import '../css/FooterNegro.css'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'


export default function Footer(){
    return(
        <div className="divContainerNegro">
              <h3 className="h3Negro">Avís legal</h3>
              <div className="div2">
<<<<<<< HEAD
                <h3 className="h3Negro">Contacte</h3>
=======
                <h3 id="h3">Contacte</h3>
>>>>>>> 72cc4930af2078e9fea797adde0cd0044745f39e
            
            <div className="div3">
              <a href="https://www.instagram.com/lasoterrania/" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillInstagram />    
              </a> 
              <a href="https://www.facebook.com/La-soterr%C3%A0nia-101259562713131" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillFacebook/>
              </a>
              <a href="https://www.youtube.com/c/lasoterr%C3%A0nia" rel="noreferrer" target="_blank" className="link-divNegro">
                  <AiFillYoutube/>
              </a>
            </div>
            </div>
        </div>
    )
  }