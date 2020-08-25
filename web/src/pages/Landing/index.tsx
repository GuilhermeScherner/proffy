import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api';

import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)
  const [iconAvatar, setIconAvatar] = useState("https://image.flaticon.com/icons/svg/149/149452.svg") 
  const [nameUser, setNameUser] = useState("Usuário")
  useEffect(() => {
    api.get('connections').then(response => {
      const {total, avatar, name} = response.data
      setTotalConnections(total)
      setIconAvatar(avatar)
      setNameUser(name)
    })
  }, [])

  return (
    <div id="page-landing">
     <div id="page-landing-content" className="container">
        <div className="icon-profile">
          <Link to="/profile"><img src={iconAvatar} alt=""/></Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}><p>{nameUser}</p></Link>
        </div>
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <div className="container-hero-image">
          <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
        </div>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas 
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;