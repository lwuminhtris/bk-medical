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
                  <v-list-item-title>Chào bạn</v-list-item-title>
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
        <v-row align="center" justify="center" style="margin-top: -100px;">
          <v-col md="auto">

          </v-col>
          <v-col md="auto">

          </v-col>
          <v-col md="auto">
            <v-card
              light
              width="1000px"
              height="280px"
            >
            <v-card-title>
              <b style="color: red;">KHẨN, CẬP NHẬT THÔNG BÁO CỦA BỘ Y TẾ VỀ TRƯỜNG HỢP BỆNH NHÂN 1342</b>
            </v-card-title>
            <v-card-subtitle>
              <p style="text-align: left;">Đăng bởi: Ban Quản lý Bệnh viện Đại học Bách Khoa, 02/12/2020</p>
            </v-card-subtitle>
            <v-card-text>
              <p style="text-align: left;">
                Ngày 02/12/2020, Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC) cập nhật thêm những địa điểm bệnh nhân 1342, 1347, 1348 từng đến. Cụ thể như sau:
                1. Quán ăn Củ Hành Tây địa chỉ 189 Lê Văn Sỹ, Phường 14, Phú Nhuận từ 12 giờ 30 ngày 21/11/2020.<br>
                2. Đại học Hutech Bình Thạnh phòng pB14-06 lầu 14 từ 9-11 giờ và 15-16 giờ ngày 22/11/2020.<br>
                3. Bún Đậu Mẹt Hà Thành địa chỉ 839/12 Lê Hồng Phong Q10 từ 20-21 giờ ngày 27/11/2020 <br>
                Như vậy, nếu như ông/ bà có từng ghé qua các địa điểm nếu trên hoặc có người thân ghé qua địa điểm nêu trên vui lòng
                báo lại với Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC) để được hướng dẫn cách ly và điều trị. <br>
                Thân ái.
              </p>
            </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col md="auto">

          </v-col>
          <v-col md="auto">

          </v-col>
          <v-col md="auto">
            <v-card
              light
              width="1000px"
              height="260px"
            >
            <v-card-title>
              <b> THÔNG TIN VỀ VIỆC CÁCH LY KHOA TRUYỀN NHIỄM ĐỂ ĐIỀU TRỊ CHO BỆNH NHÂN COVID-19</b>
            </v-card-title>
            <v-card-subtitle>
              <p style="text-align: left;">Đăng bởi: Ban Quản lý Bệnh viện Đại học Bách Khoa, 27/11/2020</p>
            </v-card-subtitle>
            <v-card-text>
              <p style="text-align: left;">
                Theo yêu cầu của Bộ Y tế, Trung tâm Kiểm soát Bệnh tật TP.HCM (HCDC), từ ngày 27/11/2020, các tòa nhà
                bao gồm H6, H4, H3, H2 trực thuộc khoa Truyền nhiễm sẽ được sử dụng để điều trị cho bệnh nhân mắc phải COVID-19, bệnh viện
                khẩn thiết yêu cầu những người không có trách nhiệm không lảng vảng quanh khu vực này. Đồng thời các bệnh nhân hiện đang điều trị 
                tại các tòa nhà H6, H4, H3, H2 cũng sẽ được thuyên chuyển sang các tòa khác để điều trị theo danh sách đính kèm sau
                của bệnh viện <br>
                Bệnh viện xin lỗi quý ông/ bà vị sự bất tiện này và đồng thời cảm ơn quý ông/ bà đã hợp tác.<br>
                Thân ái.
              </p>
            </v-card-text>
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
      room: '',
      email: '',
      university: '',
      studentId: '',
      update: false,
      citizenId: '',
      name: '',
      detail: '',
      informText: "",
      informLate: false,
      sendNoti: false,
      expanded: [],
      singleExpand: false,
      drawer: true,
      items: [
        {
          title: "Thông tin cá nhân",
          icon: "mdi-plus-outline",
          link: "user-dashboard/update-information",
        },
        {
          title: "Thuốc đã sử dụng",
          icon: "mdi-plus-thick",
          link: "user-dashboard/test  ",
        },
        {
          title: "Xét nghiệm đã thực hiện",
          icon: "mdi-update",
          link: "../doctor-dashboard/update-test"
        },
        {
          title: "Bác sĩ điều trị",
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
          text: "ID",
          align: "start",
          sortable: true,
          value: "dormUID",
        },
        { text: "Họ và tên", value: "name" },
        { text: "Mã số CMND", value: "citizenId" },
        { text: "Phòng bệnh", value: "room" },
        { text: "Email", value: "email" },
        { text: "Số điện thoại", value: "phone" },
      ],
      userLength: 0,
      userList: [],
      users: [
        /*
        {
          dormUID: "",
          name: "",
          citizenId: "",
          room: "",
          email: "",
          phone: "",
          studentId: "",
          university: "",
        },
        */
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
    this.getStudentInfo()
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
    updateInfo() {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        room: this.room,
        studentId: this.studentId,
        email: this.email,
        university: this.university,
      };
      axios.put('http://admin-database.herokuapp.com/student/updateInformation/' + this.citizenId, data, config)
      .then((Response) => Response.data)
      .then(({ room, email, studentId, university}) => {
        this.room = room
        this.studentId = studentId
        this.email = email
        this.university = university
      })
      alert('Information updated')
    },
    sendNotification() {
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        name: this.name,
        detail: this.detail
      };
      axios.post('http://admin-database.herokuapp.com/notification/students/' + this.citizenId, data, config)
      .then(({ name, detail }) => {
        this.name = name
        this.detail = detail
      })
      this.sendNoti = false
    },
    getStudentInfo(){
      axios.get('http://admin-database.herokuapp.com/student/getAll')
      .then(Response => {
        this.userList = Response.data 
        this.userLength = this.userList.length  
        for(let i = 0; i < this.userLength; i++){
          console.log(this.userList[i].room)
          this.users.push({
            dormUID: 10000 + i,
            name: this.userList[i].name,
            citizenId: this.userList[i].citizenId,
            room: this.userList[i].room,
            email: this.userList[i].email,
            studentId: this.userList[i].studentId,
            university: this.userList[i].university
          })
        }
      }) 
    }  
  },
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