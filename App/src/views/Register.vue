<template>
  <ion-page>
    <ion-content>
      <validation-observer v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmitRegister)">
          <validation-provider name="name" rules="required" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('name') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="registerData.name"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <validation-provider name="email" rules="required|email" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('email') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="registerData.email" type="email"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <validation-provider vid="password" name="password" rules="required|min:8|regex_password:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('password') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="registerData.password" type="password"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <validation-provider name="password_confirmation" rules="required|confirmed:password" v-slot="{ errors }">
            <ion-item>
              <ion-label position="stacked">{{ $t('password_confirmation') }}<ion-text color="danger">*</ion-text></ion-label>
              <ion-input-vue v-model="registerData.passwordConfirmation" type="password"></ion-input-vue>
            </ion-item>
            <ion-label>{{ errors }}</ion-label>
          </validation-provider>
          <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-margin-bott">{{ $t('register') }}</ion-button>
            <ion-button expand="block" class="ion-margin-bott">{{ $t('register_with', { provider: 'Facebook' }) }}</ion-button>
            <ion-button expand="block" class="ion-margin-bott">{{ $t('register_with', { provider: 'Google' }) }}</ion-button>
          </div>
        </form>
      </validation-observer>
    </ion-content>
  </ion-page>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  data() {
    return {
      registerData: {
        name: null,
        email: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmitRegister() {
      this.register(this.registerData);
    }
  },
}
</script>
