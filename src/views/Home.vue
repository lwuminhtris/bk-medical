<template>
  <div>
    <v-app id="bg">
      <v-container fluid>
        <v-row align="center" justify="space-around" id="nav">
          <v-col md="0" style="margin-left: -600px;">
            <!--<img src="../assets/home-logo.png" width="250px" height="auto" />-->
          </v-col>
          <v-col md="auto">
            <router-link id="menu" to="#">
              GIỚI THIỆU 
              <v-icon medium dark style="margin-top: -4px;">mdi-chevron-down</v-icon>
            </router-link>
            <router-link id="menu" to="#">
              KHOA/ ĐƠN VỊ
              <v-icon medium dark style="margin-top: -4px;">mdi-chevron-down</v-icon>
            </router-link>
            <router-link id="menu" to="./register">
              ĐĂNG KÝ
            </router-link>
            <router-link id="menu" to="./login" >
              ĐĂNG NHẬP
            </router-link>
          </v-col>
        </v-row>
      </v-container>
      <v-content>
        <v-row align="center" justify="center" style="margin-top: 50px;">
          <v-col md="auto" id="description">
            <h1>BỆNH VIỆN ĐẠI HỌC BÁCH KHOA</h1>
            <p>
              TỰ HÀO LÀ ĐỊA ĐIỂM KHÁM VÀ CHỮA BỆNH HÀNG ĐẦU
            </p>
          </v-col>
          <v-col md="auto">
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_vPnn3K.json"  background="transparent"  speed="1"  style="width: 400px; height: 400px;"  loop autoplay></lottie-player>
          </v-col>
        </v-row>
      </v-content>
      <v-bottom-navigation id="navfooter">
        <v-row align="center" justify="center">
          <v-col md="auto">
            <p id="footer">© 2020 Bệnh viện Đại học Bách Khoa, 268 Lý Thường Kiệt, Quận 10, Thành phố Hồ Chí Minh</p>
          </v-col>
        </v-row>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import url("https://fonts.googleapis.com/css2?family=Roboto");
#nav {
  height: 80px;
  margin-top: -12px;
  margin-bottom: -12px;
}
#menu {
  text-decoration: none;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-right: 30px;
  /*font-family: "Quicksand", sans-serif;*/
  text-shadow: 1px 1px 20px black;
}
#menu:hover {
  opacity: 60%;
}
#bg {
  /*background-image: url("../assets/bg.jpg");*/
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: cover;
}
#description {
  font-family: "Quicksand", sans-serif;
}
#description h1 {
  font-size: 48px;
  color: white;
  text-shadow: 1px 1px 20px black;
}
#description p {
  font-size: 30px;
  color: white;
  text-shadow: 1px 10px 20px black;
}
#navfooter {
  /*
	background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
	*/
  background-color: transparent;
  position: fixed;
  text-shadow: 1px 1px 100px black;
}
#footer {
  color: white;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
}
</style>