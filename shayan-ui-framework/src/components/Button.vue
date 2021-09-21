<template>
    <q-btn :color="color" :text-color="textColor" :label="label" />
</template>
<script>
export default {
    name:"t-button",
     props: {
    color: {
      type:String,
    default: "primary"
    },
     label: {
      type:String,
    default: "primary",
  
    },
     textColor: {
      type:String,
    default: "white"
    },
     }

}
</script>

<style>

</style>