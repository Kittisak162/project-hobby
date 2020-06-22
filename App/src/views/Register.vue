<template>
  <ion-page>
    <ion-content>
      <form>
        <ion-list lines="full" class="ion-no-margin ion-no-padding">
          <ion-item>
            <ion-label position="stacked">{{ $t('email') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">{{ $t('password') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="password"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">{{ $t('password_confirmation') }}<ion-text color="danger">*</ion-text></ion-label>
            <ion-input required type="password"></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding">
          <ion-button expand="block" type="submit" class="ion-margin-bott">{{ $t('register') }}</ion-button>
          <ion-button expand="block" class="ion-margin-bott">{{ $t('register_with', { provider: 'Facebook' }) }}</ion-button>
          <ion-button expand="block" class="ion-margin-bott">{{ $t('register_with', { provider: 'Google' }) }}</ion-button>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>