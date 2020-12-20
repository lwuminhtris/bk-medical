<template>
  <div>
    <v-app id="background">
      <v-content>
        <v-row align="center" justify="center">
          <v-col md="auto">
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col md="auto">
                  <v-text-field
                    dark
                    v-model="username"
                    :rules="usernameRules"
                    outlined
                    label="Tên đăng nhập"
                    required
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="password"
                    :rules="passwordRules"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    outlined
                    label="Mật khẩu"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="rePassword"
                    :rules="rePasswordRules"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show2 ? 'text' : 'password'"
                    @click:append="show2 = !show2"
                    outlined
                    label="Nhập lại mật khẩu"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="email"
                    :rules="emailRules"
                    outlined
                    label="Email"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="fullName"
                    :rules="fullNameRules"
                    outlined
                    label="Họ và tên"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="age"
                    outlined
                    label="Tuổi"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="citizenID"
                    :rules="citizenIDRules"
                    outlined
                    label="Mã chứng minh nhân dân"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="medicalId"
                    outlined
                    label="Mã bảo hiểm y tế"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="phonenumber"
                    outlined
                    label="Số điện thoại"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="address"
                    outlined
                    label="Địa chỉ liên lạc"
                    required
                    style="margin-top: -20px;"
                  ></v-text-field>

                  <v-btn
                    class="white--text"
                    color="primary"
                    :disabled="!valid"
                    @click="register"
                  >ĐĂNG KÝ</v-btn>
                  <div class="termOfUse">
                    <p>
                      Bằng cách bấm vào nút đăng ký, bạn đã chấp nhận
                      <b>Điều khoản sử dụng</b> và
                      <b>Chính sách dữ liệu</b>
                    </p>
                  </div>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
// const axios = require("axios");
export default {
  data() {
    return {
      isCompleted: false,
      valid: true,
      show1: false,
      show2: false,
      username: "",
      password: "",
      rePassword: "",
      email: "",
      fullName: "",
      age: "",
      citizenID: "",
      address: "",
      phonenumber: "",
      medicalId: "",
      numberOfStudent: 0,
      usernameRules: [
        (v) => !!v || "User is required",
        (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must have at least 6 characters",
      ],
      rePasswordRules: [
        (v) => !!v || "Re-enter password is required",
        (v) => v === this.password || "Password do not match",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      fullNameRules: [(v) => !!v || "Full name is required"],
      citizenIDRules: [(v) => !!v || "Citizen ID is required"],
    };
  },
  created() {

  },
  methods: {
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css2?family=Roboto");
.termOfUse {
  color: hsl(227, 58%, 65%);
  margin-top: 10px;
  font-size: 10px;
}
#title {
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 24px;
}
#background {
  /*background-image: url("../assets/tsignup_img.jpg");*/
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
  height: 100%;
}
.v-btn {
  width: 100%;
  background-color: hsl(227, 58%, 65%);
}
.v-card {
  position: flex;
  width: 440px;
  height: 44rem;
}
</style>