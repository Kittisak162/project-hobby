<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item>
          <ion-label>Country</ion-label>
          <ion-select class="text-secondary" v-model="confirmData.code">
            <ion-select-option v-for="country in countries" :key="country.code" v-model="country.dial_code">
              {{ country.dial_code }} {{ country.name }}
            </ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-input type="number" placeholder="Enter Phone Number"></ion-input>
        </ion-item>

      </ion-list>

      <ion-button mode="ios" color="primary" expand="block">
        Confirm
      </ion-button>
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