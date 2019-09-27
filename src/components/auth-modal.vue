<template>
  <section>
    <button class="button is-primary is-medium"
      @click="isComponentModalActive = true">
      Войти
    </button>

    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <auth-modal-popup v-bind="formProps" @my-event="my_event_handle"></auth-modal-popup>
    </b-modal>
  </section>
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
        isComponentModalActive: false,
        formProps: {
          email: 'evan@you.com',
          password: 'testing'
        }
      }
    },
    methods: {
      my_event_handle: function(){
        console.log(this.formProps);
      }
    },
  }
</script>