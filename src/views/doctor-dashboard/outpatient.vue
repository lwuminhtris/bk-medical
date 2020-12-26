<template>
  <div>
  <span id="background"></span>
    <v-app id="background">
      <v-row>
        <v-col md="auto">
          <v-navigation-drawer
            v-model="drawer"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
          >
            <v-list dense nav class="py-0">
              <v-list-item two-line>
                <v-list-item-avatar>
                  <!--<img src="../assets/signup_img.jpg" />-->
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Chào bác sĩ</v-list-item-title>
                  <v-list-item-subtitle>{{timestamp}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <!--<v-list-item link>-->

              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <router-link :to="item.link" style="text-decoration: none;">
                  <v-list-item-content>
                    <v-list-item-title 
                      style="color: white"
                    >
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>
      </v-row>
      <v-content>
        <v-row align="center" justify="center">
          <v-col md="auto">
            <v-card style="margin-left: 120px; margin-right: -120px;" light>
              <v-card-title>
                Danh sách bệnh nhân ngoại trú
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                :single-expand="singleExpand"
                :expanded.sync="expanded"
                item-key="name"
              >
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      timestamp: '',
      id: '',
      name: '',
      next_examine_date: '',
      insurance_id: '',
      items: [
        {
          title: "Bệnh nhân nội trú",
          icon: "mdi-plus-thick",
          link: "../doctor-dashboard",
        },
        {
          title: "Bệnh nhân ngoại trú",
          icon: "mdi-plus-outline",
          link: "../doctor-dashboard/outpatient",
        },
        {
          title: "Chỉ định thuốc",
          icon: "mdi-medicine",
          link: "../doctor-dashboard/medicine"
        },
        {
          title: "Cập nhật lịch khám",
          icon: "mdi-update",
          link: "../doctor-dashboard/update-test"
        },
        {
          title: "Kiểm tra xét nghiệm",
          icon: "mdi-test-tube",
          link: "doctor-dashboard/view-test",
        },
        { title: "Đăng xuất", icon: "mdi-logout-variant", link: "/" },
      ],
      permanent: true,
      background: false,
      search: "",
      headers: [
        {
          text: "Mã số CMND",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Họ và tên", value: "name" },
        { text: "Ngày khám tiếp theo", value: "next_examine_date" },
        { text: "Mã bảo hiểm y tế", value: "insurance_id" },
      ],
      userLength: 0,
      userList: [],
      users: [

      ],
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
  created() {
    setInterval(this.getNow, 1000)
    this.getNow()
    this.getOutPatientInformation()
  },
  methods: {
    getNow() {
      const today = new Date();
      const date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      const time = (today.getHours()<10?'0'+today.getHours():today.getHours())+ ":" + 
                (today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes())
         + ":" + (today.getSeconds()<10?'0'+today.getSeconds():today.getSeconds());
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    getOutPatientInformation(){
      axios.get('http://localhost:3000/OutPatients/')
      .then(Response => {
        this.userList = Response.data
        this.userLength = this.userList.length
        for(let i = 0; i < this.userLength; i++) {
          // console.log(this.userList[i].issn)
          this.users.push({
            id: this.userList[i].ossn,
            name: this.userList[i].Patient_name,
            next_examine_date: this.userList[i].next_examinate_date,  
            insurance_id: this.userList[i].insurance_id
          })
        }
      })
    },
  }
};
</script>

<style scoped>
#background {
  /*background-image: url("../assets/bg.jpg");*/
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*position: absolute;*/
  width: 100%;
  height: 100%;
}
</style>