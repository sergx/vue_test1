<template>
  <form action="" @submit="submit">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{formState.title}}</p>
      </header>
      <section class="modal-card-body">
        <b-field :label="user_inputs.username.title" v-if="formState.actionName == 'signUp'">
          <b-input
            type="text"
            v-model="user_inputs.username.value"
            :placeholder="user_inputs.username.title"
            required>
          </b-input>
        </b-field>

        <b-field :label="user_inputs.email.title">
          <b-input
            type="email"
            v-model="user_inputs.email.value"
            :placeholder="user_inputs.email.title"
            required>
          </b-input>
        </b-field>

        <b-field :label="user_inputs.password.title" v-if="formState.actionName == 'signUp' || formState.actionName == 'signIn'">
          <b-input
            type="password"
            v-model="user_inputs.password.value"
            password-reveal
            :placeholder="user_inputs.password.title"
            required>
          </b-input>
        </b-field>

        <!--<b-checkbox>Remember me</b-checkbox>-->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-primary" v-if="formState.actionName == 'signIn'" @click="auth_signin">Войти</button>
        <button class="button is-primary" v-if="formState.actionName == 'signUp'" @click="auth_signup">Зарегистрироваться</button>
        <button class="button" type="button" @click="$parent.close()">Закрыть</button>
      </footer>
    </div>
  </form>
</template>
<script>
function defaultInputsAuth() {
  return {
    username: {title:"Имя пользователя", value: "asdd"},
    email: {title:"Email", value: "asd@sad.dd"},
    password: {title:"Пароль", value: "asdasdasdsa"}
  }
}
export default {
  data() {
    return {
      user_inputs: {}
    }
  },
  created() {
    this.user_inputs = defaultInputsAuth();
  },
  props: ['form-state'],
  methods: {
    submit: function (e) {
      e.preventDefault();
      console.log(this);


      //console.log(this.$store.getters.getAxiosSettings);
      // Тут может быть авторизация
      //console.log(this);
      //this.$emit('my-event');
    },
    auth_signup: function () {
      var total_validate = true;
      /*
      for (var v in this.user_inputs) {
        var validate = true;
        switch (v) {
          case "username":
            if (this.user_inputs[v].value.length <= 5) {
              validate = false;
            }
            break;
          case "email":
            if (!this.user_inputs[v].value.length || /.+@.+\..+/i.test(this.user_inputs[v].value) == false) {
              validate = false;
            }
            break;
            //case "phone":
            //break;
          case "password":
            if (this.user_inputs[v].value.length <= 6) {
              validate = false;
            }
            break;
        }
        if (!validate) {
          total_validate = false;
          this.user_inputs[v].type = "is-danger";
        } else {
          this.user_inputs[v].type = "";
        }
      }
      */
      if (total_validate) {
        var thisX = this;
        axios(Object.assign({}, this.$store.getters.getAxiosSettings, {
        data: {
          auth_signup: thisX.user_inputs
        }
      })).then(function (response) {
          if (typeof response.data !== 'object') {
            console.log(response.data);
            alert("Ошибка в консоли");
            return;
          }
          if (response.data.success.length) {
            thisX.result_message_class = "success";
            thisX.$buefy.dialog.alert(response.data.success)
            //window.location.reload();
          } else if (response.data.error.length) {
            thisX.result_message_class = "error";
            thisX.$buefy.dialog.alert(response.data.error)
          }
        });
      }
    },
    auth_signin: function () {
      var thisX = this;
      axios(Object.assign({}, this.$store.getters.getAxiosSettings, {
        data: {
          auth_signin: thisX.user_inputs
        }
      })).then(function (response) {
        console.log(response.data);
        if (typeof response.data !== 'object') {
          console.log(response.data);
          alert("Ошибка в консоли");
          return;
        }
        if (response.data.success.length) {
          //thisX.result_message_class = "success";
          //thisX.result_message = response.data.success;
          thisX.$buefy.dialog.alert(response.data.success)
          //window.location.reload();
        } else if (response.data.error.length) {
          //thisX.result_message_class = "error";
          //thisX.result_message = response.data.error;
          thisX.$buefy.dialog.alert(response.data.error)
        }
      });
    },
  },
}
</script>