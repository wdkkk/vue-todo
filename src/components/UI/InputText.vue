<template lang="">
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
  export default {
    props: {
      modelValue: String,
    },
  };
</script>
<style lang="sass">
  input
    outline: 0
    height: 50px
    width: 100%
    font-size: 24px
    padding: 10px
</style>
