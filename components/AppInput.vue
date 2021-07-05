<template>
  <div
    class="input-component field"
    :class="{
      filled: isFilled,
      hovered: isHovered,
      focused: isFocused,
      disabled: disabled,
      error: error,
      'is-small': small,
      'is-horizontal': isHorizontal,
    }"
  >
    <label v-if="showLabel" class="label">
      {{ label }}
    </label>

    <div class="input-container" :class="{ 'has-icon': hasIcon }">
      <input
        ref="inputEl"
        v-model="inputValue"
        :type="type"
        :name="name"
        :disabled="disabled"
        :required="required"
        class="input"
        :placeholder="placeholder"
        @keydown.enter.stop.prevent=""
        @keyup.enter.stop.prevent="emitEnter"
        @mouseover="() => (isHovered = true)"
        @mouseleave="() => (isHovered = false)"
        @focus="() => (isFocused = true)"
        @blur="() => (isFocused = false)"
      />
      <slot />
    </div>

    <span v-if="showMessage" class="info">
      {{ message }}
    </span>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from '@vue/composition-api'

export default {
  props: {
    placeholder: String,
    message: String,
    label: String,
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
    isSynchronized: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    isHorizontal: {
      type: Boolean,
      default: false,
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['input', 'enterPressed'],
  setup(props, { emit }) {
    const inputValue = ref(props.value)
    const isFocused = ref(false)
    const isHovered = ref(false)

    const isFilled = computed(() => !!inputValue.value)

    const inputEl = ref(null)

    watch(inputValue, (value) => {
      emit('input', value)
    })

    watchEffect(() => {
      if (props.isSynchronized) inputValue.value = props.value
    })

    const emitEnter = () => {
      emit('enterPressed', inputValue)
    }

    return {
      inputValue,
      isFilled,
      isFocused,
      isHovered,
      inputEl,
      emitEnter,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/input.scss';
</style>
