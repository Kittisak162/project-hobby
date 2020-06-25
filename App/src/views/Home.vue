<template>
  <ion-page>
    <ion-content>
      <ion-button expand="block" @click="logout()">{{ $t('logout') }}</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Home",
  methods: {
    ...mapActions(['logout'])
  },
};
</script>

<style scoped>
</style>