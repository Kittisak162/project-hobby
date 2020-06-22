<template>
  <ion-page>
    <div style="height: 100px;background-color: blue">
    </div>
    <ion-content>
      <ion-segment value="login">
        <ion-segment-button value="login">
          <ion-label>{{ $t('login') }}</ion-label>
        </ion-segment-button>
        <ion-segment-button value="register">
          <ion-label>{{ $t('register') }}</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "HomePage",
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