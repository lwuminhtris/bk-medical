<template>
  <div>
    <v-app id="signUpContainer">
      <v-content>
        <v-row align="center" justify="center" style="margin-top: 120px;">
          <v-col md="auto">
            <!--<img src="../assets/home-logo.png" width="250px" />-->
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col md="auto">

                <h1 style="color: white; margin-bottom: 5px;">ĐĂNG NHẬP</h1>

                <v-text-field
                  dark
                  v-model="username"
                  outlined
                  label="Tên đăng nhập"
                  id="username-input"
                  required
                ></v-text-field>

                <v-text-field
                  dark
                  v-model="password"
                  outlined
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Mật khẩu"
                  id="password-input"
                  required
                  style="margin-top: -20px;"
                ></v-text-field>

                <div class="forgotPassword">
                  <a
                    href="/"
                    style="text-decoration:none; color:hsl(227, 58%, 65%);"
                  >Quên mật khẩu?</a>
                </div>

                <v-btn
                  class="white--text"
                  color="hsl(227, 58%, 65%)"
                  @click="checkSigningIn"
                >ĐĂNG NHẬP</v-btn>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// const axios = require('axios')
export default {
  data: () => ({
    cmp_username: [],
    cmp_password: [],
    name: [],
    citizenId: [],
    numberOfStudent: 0,
    valid: false,
    show1: false,
    username: "",
    password: "",
  }),
  created(){

  },
  methods: {
    checkSigningIn(){
      // for testing purpose
      let username = this.username
      let password = this.password
      if(username == "doctor" && password == "doctor"){
        this.$router.replace("/doctor-dashboard")
      } else if(username == "manager" && password == "manager") {
        this.$router.replace("/manager-dashboard")
      }
    }
  },
  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css2?family=Roboto");
.forgotPassword {
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: hsl(227, 58%, 65%);
  top: 150px;
  margin-top: -20px;
}
.forgotPassword:hover {
  opacity: 80%;
}
.signInDescription {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: white;
  padding-top: 24px;
  font-size: 24px;
}
#signUpContainer {
  /*background-image: url("../assets/tsignin_img.jpg");*/
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  height: 1;
}
.v-btn {
  margin-top: 10px;
  width: 360px;
  background-color: hsl(227, 58%, 65%);
}
.v-card-title {
  text-align: center;
}
.v-text-field {
  width: 360px;
}
.v-form {
  top: 0px;
  position: relative;
  left: 40px;
}
.v-card {
  width: 440px;
  height: 340px;
}
.myPageName {
  opacity: 100%;
  left: 50px;
  top: 10px;
  position: absolute;
}
</style>