<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>TEAM.ST</strong>
        <!--
          <img src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma">
            -->
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item :to="{ path: '/example' }" tag="router-link">
          /example
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary"
              @click="showModalAuth('signIn')">
              <strong>Вход</strong>
            </a>
            <a class="button is-light"
              @click="showModalAuth('signUp')">
              Регистрация
            </a>
          </div>
        </b-navbar-item>
      </template>

    </b-navbar>

    <b-modal :active.sync="isAuthModalActive" has-modal-card>
      <auth-modal-popup :form-state="formState"></auth-modal-popup>
    </b-modal>
  </div>
</template>
<script>
  import AuthModalPopup from './auth-modal-popup.vue'

  export default {
    components: {
      AuthModalPopup
      //'modal-form': AuthModalPopup - Первый параметр говорит о том, какой тег будет у компонента при выводе в шаблоне <modal-form>...
    },
    data() {
      return {
        isAuthModalActive: false,
        formState: {}
        //message: null,
      }
    },
    created() {
      axios(Object.assign({}, this.$store.getters.getAxiosSettings, {
        data: {
          auth_attempt: true
        }
      })).then(function (response) {
        console.log(response.data);
        /*
        if (typeof response.data !== 'object') {
          console.log(response.data);
          alert("Ошибка в консоли");
          return;
        }
        if (response.data.success.length) {
          thisX.$buefy.dialog.alert(response.data.success)
          //window.location.reload();
        } else if (response.data.error.length) {
          thisX.$buefy.dialog.alert(response.data.error)
        }
        */
      });
      //this.message = this.$store.getters.getMessage; // Берем из store
    },
    methods: {
      showModalAuth(actionName) {
        switch (actionName) {
          case 'signUp':
            this.formState.title = "Регистрация";
            break;
          case 'signIn':
            this.formState.title = "Вход";
            break;
          case 'recover':
            this.formState.title = "Восстановить пароль";
            break;
        }
        this.formState.actionName = actionName;
        this.isAuthModalActive = true;
      }
    }
  }
</script>