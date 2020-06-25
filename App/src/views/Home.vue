<template>
  <ion-page>
    <ion-content>
      Home
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      countries: [
        {
          "name": "United States",
          "dial_code": "+1",
          "code": "US"
        }
      ],
      confirmData: { code: '+1' }
    }
  },
};
</script>

<style scoped>
</style>