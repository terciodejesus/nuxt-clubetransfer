<template>
  <form @submit.prevent="sendEmail" autocomplete="off">
    <div class="columns is-multiline">
      <div class="column is-6">
        <AppInput
          ref="nameInput"
          type="text"
          name="from_name"
          placeholder="Seu nome"
          :showMessage="false"
          :showLabel="false"
          :required="true"
          :value="name"
          @input="(e) => (name = e)"
        />
      </div>
      <div class="column is-6">
        <AppInput
          v-mask="['(##) ####-####', '(##) # ####-####']"
          ref="phoneInput"
          type="tel"
          name="from_phone"
          placeholder="Telefone"
          :showMessage="false"
          :showLabel="false"
          :required="true"
          :value="phone"
          @input="(e) => (phone = e)"
        />
      </div>
      <div class="column is-12">
        <AppInput
          ref="emailInput"
          type="email"
          name="from_email"
          placeholder="Digite seu e-mail"
          :required="true"
          :error="emailInputError"
          :showMessage="emailInputError"
          :showLabel="false"
          message="E-mail inválido! Tente novamente"
          :value="email"
          @input="(e) => (email = e)"
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
        <button class="button is-primary is-fullwidth" :disabled="isDisabled">
          Fale conosco
        </button>
      </div>
    </div>
  </form>
</template>

<script type="module">
import { ref, watch } from '@vue/composition-api'

import AppInput from '~/components/AppInput'

import { mask } from 'vue-the-mask'
import emailjs from 'emailjs-com'

export default {
  components: {
    AppInput,
  },
  directives: {
    mask,
  },
  setup() {
    const email = ref('')
    const name = ref('')
    const phone = ref('')
    const emailInputError = ref(false)
    const emailInput = ref(null)

    const isDisabled = ref(true)
    watch([email], () => {
      isDisabled.value = emailInputError.value =
        !emailInput.value.inputEl.checkValidity()
    })

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
      emailInputError,
      email,
      isDisabled,
      emailInput,
      name,
      phone,
    }
  },
}
</script>
