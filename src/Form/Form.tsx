 import { useState } from "react";
 import emailjs from '@emailjs/browser'

 import styled from './Form.module.css'

 function FormSend(){
     const [name, setName] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')

     function sendEmail(e:any){
      e.preventDefault()

      if(name === '' || email === '' || message === ''){
         alert('Preencha todos os campos')
         return // para a execução do código
      }

      const templateParams ={
         from_name: name,
         message: message,
         email: email
      }
      
      emailjs.send("service_lqnlsr4", "template_gun2dvm", templateParams, "Jh05qmVnHf-j76rzP")
      .then((response) => {
         console.log('EMAIL ENVIADO!', response.status, response.text)

         setName('')
         setEmail('')
         setMessage('')
      }, (err) =>{
         console.log('ERRO:', err)
      })

     }

     function handleKeyDownEmail(e: any){
      if(e.key === 'Enter'){
         sendEmail(e)
      }
     }

     return(
      <div className={styled.form}>
         <h4>Escreva sua mensagem abaixo!</h4>

         <form onSubmit={sendEmail}>
            <span>Seu nome:</span>
            <input type="text" 
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <span>Seu E-mail:</span>
            <input type="text" 
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <span>Sua mensagem:</span>
            <textarea
            placeholder="Digite sua mensagem..." rows={3}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />

            <button onKeyDown={handleKeyDownEmail} type="submit" value='Enviar'>Enviar</button>
         </form>
      </div>
     )
}

export default FormSend;