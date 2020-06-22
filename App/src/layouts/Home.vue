<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div style="height: 100px;background-color: blue">
        </div>
      </ion-toolbar>
      <ion-toolbar>
     <ion-segment :value="$route.name" @ionChange="changeContent">
      <ion-segment-button value="Login">
        <ion-label>{{ $t('login') }}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="Register">
        <ion-label>{{ $t('register') }}</ion-label>
      </ion-segment-button>
    </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-vue-router />
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  methods: {
    changeContent(event) {
      this.$router.replace({ name: event.detail.value })
    }
  }
}
</script>
