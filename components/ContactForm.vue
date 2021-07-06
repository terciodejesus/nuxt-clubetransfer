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
        <button
          v-if="!messageSent"
          class="button is-primary is-fullwidth"
          :disabled="isDisabled"
          :class="{ 'is-loading': submitting }"
        >
          <font-awesome-icon :icon="['far', 'paper-plane']" class="mr-2" />
          Fale conosco
        </button>
        <div v-if="messageSent" class="notification is-primary is-light">
          Mensagem enviada com sucesso! Entraremos em contato o mais breve
          possível.
        </div>
        <div
          v-if="messageSent == false"
          class="notification is-danger is-light"
        >
          Não foi possível enviar a mensagem. Tente novamente.
        </div>
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

    const submitting = ref(false)
    const isDisabled = ref(true)
    watch([email, submitting], () => {
      isDisabled.value =
        !emailInput.value.inputEl.checkValidity() || submitting.value

      if (!emailInput.value.inputEl.checkValidity()) {
        emailInputError.value = true
      } else {
        emailInputError.value = false
      }
    })

    const messageSent = ref(null)
    const sendEmail = (e) => {
      submitting.value = true

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
            messageSent.value = true
            submitting.value = false
          },
          (error) => {
            console.log('FAILED...', error)
            messageSent.value = false
            submitting.value = false
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
      messageSent,
      submitting,
    }
  },
}
</script>
