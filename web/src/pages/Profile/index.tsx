import React, {useState} from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';

function Profile(){
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  return(
    <div id="page-profile">
      <PageHeader title="Guilherme" description="Geografia"></PageHeader>
      <main>
        <form >
          <fieldset>
            <legend>Seus dados</legend>

            <Input name="name" label="Nome"
              value={name} onChange={e => { setName(e.target.value) }}></Input>

            <Input name="surname" label="Sobrenome"
            value={name} onChange={e => { setName(e.target.value) }}></Input>

            <Input name="email" label="E-mail"
            value={email} onChange={e => { setEmail(e.target.value) }}>
            </Input>

            <Input name="whatsapp" label="Whatsapp"
              value={whatsapp} onChange={e => { setWhatsapp(e.target.value) }}></Input>

            <Textarea name="bio" label="Biografia"
              value={bio} onChange={e => { setBio(e.target.value) }}></Textarea>

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciencias', label: 'Ciencias' },
                { value: 'Educação Fisica', label: 'Educação Fisica' },
                { value: 'Fisica', label: 'Fisica' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' }
              ]}
            ></Select>
            <Input name="cost" label="Custo da sua hora por aula"
              value={cost}
              onChange={e => setCost(e.target.value)}></Input>
          </fieldset>


          <fieldset>
            <legend>Horários disponíveis
          <button type="button" onClick={()=>console.log()}>+ Novo horário</button>
            </legend>
            {scheduleItems.map((scheduleItem, index) =>
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' }
                  ]}
                ></Select>
                
                <Input name="from" label="Das" type="time"value={scheduleItem.from}
                ></Input>
                
                <Input name="to" label="Até" type="time" value={scheduleItem.to}
               ></Input>
              </div>)}

          </fieldset>


          <footer>
            <p>
              <img  alt="Aviso importante" />
          Importante<br />
          Preencha todos os dados
        </p>
            <button type="submit">
              Salvar cadastro
        </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Profile;