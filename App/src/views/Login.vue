<template>
  <ion-page>
    <ion-content>
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmitLogin)">
          <validation-provider name="email" rules="required|email" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('email') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="loginData.email" type="email"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <validation-provider name="password" rules="required" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('password') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="loginData.password" type="password"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-margin-bott">{{ $t('login') }}</ion-button>
            <ion-button expand="block" class="ion-margin-bott">{{ $t('login_with', { provider: 'Facebook' }) }}</ion-button>
            <ion-button expand="block" class="ion-margin-bott">{{ $t('login_with', { provider: 'Google' }) }}</ion-button>
          </div>
        </form>
      </validation-observer>
    </ion-content>
  </ion-page>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      loginData: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    onSubmitLogin() {
      this.login(this.loginData);
    }
  },
}
</script>
