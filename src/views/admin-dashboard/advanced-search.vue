<template>
  <div class="adminimage">
    <v-content>
      <v-row justify="start" style="background-color: black;">
        <v-col md="auto" style="margin-left: 50px;">
          <v-btn to="../admin-dashboard">
            <v-icon style="margin-bottom: 3px;"> mdi-keyboard-backspace </v-icon>
            QUAY LẠI DASHBOARD
          </v-btn>
        </v-col>
        <v-col md="200px">

        </v-col>

        <v-col md="auto" align-self="center">
          <h4 style="margin-right: 50px; color: white;">TỔNG HỢP CÁC CÔNG CỤ NÂNG CAO</h4>
        </v-col>

      </v-row>
      <v-row align="center" justify="center" style="margin-top: 80px;">
        <v-col md="auto" sm="auto">

          <h3 style="color: white; margin-bottom: 10px;">CHỨC NĂNG CẬP NHẬT XÉT NGHIỆM CỦA BỆNH NHÂN</h3>

          <v-text-field
            dark
            outlined
            label="Mã id của bệnh nhân"
            style="width: 500px;"
          >
            
          </v-text-field>

          <v-text-field
            dark
            outlined
            label="Tên người xét nghiệm"
            style="width: 500px; margin-top: -20px;"
          >
            
          </v-text-field>

          <v-textarea
            outlined
            dark
            label="Thông tin chi tiết xét nghiệm"
            style="margin-top: -20px;"
          ></v-textarea>

          <v-btn
            style="margin-top: -20px; width: 100%;"
          >
            Cập nhật xét nghiệm
          </v-btn>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  data() {
    return {
      adminHealth: 0,
      numberOfHealth: 0,
      name: '',
      detail: '',
      username: '',
      id: '',
      notation: '',
      headers: [
        { text: "Tên xét nghiệm", value: "title", sortable: false },
        { text: "Bác sĩ thực hiện", value: "detail", sortable: false },
        { text: "Ghi chú", value: "notation", sortable: false}
      ],
      health: [
        /*
        {
          title: "TEST",
          detail: "TEST",
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
    this.getDataFromServer();
    this.getNumber();
  },
  methods: {
    getNumber(){
      axios.get('http://admin-database.herokuapp.com/student-health/health/students/admin')
      .then(Response => {
        this.adminHealth = Response.data.length
      })
      axios.get('http://admin-database.herokuapp.com/student-health/health/students/' + this.id )
      .then(Response => {
        this.numberOfHealth = Response.data.length
        console.log(this.numberOfHealth)
        for(let i = 0; i < this.numberOfHealth; i++){
          this.health.push({
            title: Response.data[i].name,
            detail: Response.data[i].detail
          })
        }
      })
    },
    sendHealth(){
      this.health.push({
        title: this.name,
        detail: this.detail
      })
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        name: this.name,
        detail: this.detail,
      };
      axios.post('http://admin-database.herokuapp.com/student-health/health/students/' + this.id, data, config)
      .then((Response) => Response.data[this.numberOfHealth + 1])
      .then(({ name, detail}) => {
        this.name = name
        this.detail = detail
      })
      axios.post('http://admin-database.herokuapp.com/student-health/health/students/admin', data, config)
      .then((Response) => Response.data[this.adminHealth + 1])
      .then(({ name, detail}) => {
        this.name = name
        this.detail = detail
      })
    },
    getDataFromServer() {
      /*
      this.username = this.$store.state.gloUsername
      this.id = this.$store.state.gloUserId
      */
      this.username = this.$store.state.gloUsername;
      this.id = this.$store.state.gloUserId;
      this.lock = true;
      console.log(this.username);
      console.log(this.id);
    },
  },
};
</script>


<style scoped>
.adminimage {
  background: #4b6cb7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #182848, #4b6cb7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100%;
}
</style>