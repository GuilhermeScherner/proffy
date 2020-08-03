import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/36202255?s=460&u=769ba59c2408ca4921c9e35a28bcdab1fccf6223&v=4" alt="Guilherme"/>
      <div>
        <strong>Guilherme Scherner</strong>
        <span>Quimica</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <br />
      <br />
       Inventore exercitationem necessitatibus reiciendis ullam quod nisi incidunt explicabo voluptatem! Rerum optio doloribus molestias, voluptatibus harum odit fugit similique delectus numquam sequi?
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;