<template>
<t-button color="primary" label="primary"/>

</template>

<script>
import { ref } from 'vue'
import tButton from './components/buttons/Button.vue'

export default {
  name: 'LayoutDefault',

  components: {
    tButton
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
