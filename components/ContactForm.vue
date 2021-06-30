<template>
  <form @submit.prevent="sendEmail">
    <div class="columns is-multiline">
      <div class="column is-6">
        <input
          class="input"
          type="text"
          placeholder="Nome"
          name="from_name"
          required
        />
      </div>
      <div class="column is-6">
        <input
          v-mask="['(##) ####-####', '(##) # ####-####']"
          class="input"
          type="tel"
          placeholder="Telefone"
          required
          name="from_phone"
        />
      </div>
      <div class="column is-12">
        <input
          class="input"
          type="email"
          placeholder="E-mail"
          name="from_email"
          required
        />
      </div>
      <div class="column is-12">
        <textarea
          class="textarea"
          placeholder="Mensagem"
          name="message"
          required
        ></textarea>
      </div>
      <div class="column is-12">
        <button class="button is-primary is-fullwidth">Fale conosco</button>
      </div>
    </div>
  </form>
</template>

<script type="module">
import { mask } from 'vue-the-mask'
import emailjs from 'emailjs-com'

export default {
  directives: {
    mask,
  },
  setup() {
    const sendEmail = (e) => {
      emailjs
        .sendForm(
          'service_kokm0v8',
          'template_xx6n2jm',
          e.target,
          'user_JHg4QMviCAb1Te25eKPoQ'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
          },
          (error) => {
            console.log('FAILED...', error)
          }
        )
    }

    return {
      sendEmail,
    }
  },
}
</script>
