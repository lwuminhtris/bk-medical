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
      </v-row>
      <v-row align="center" justify="center" style="margin-top: 80px;">
          <h3 style="color: white; margin-bottom: 10px;">DANH SÁCH BỆNH NHÂN NỘI TRÚ</h3>      
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="auto" sm="auto" style="min-width: 1000px;">
         <v-card light>
              <v-card-title>
                Danh sách bệnh nhân nội trú 
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Tìm kiếm"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="users"
                :search="search"
                :expanded.sync="expanded"
                item-key="name"
                
              >
              </v-data-table>
            </v-card>
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
      id: '',
      name: '',
      room: '',
      bed: '',
      in_doctor: '',
      out_doctor: '',
      insurance_id: '',
      headers: [
        {
          text: "Mã số CMND",
          align: "start",
          sortable: true,
          value: "id",
        },
        { text: "Họ và tên", value: "name" },
        { text: "Phòng bệnh", value: "room" },
        { text: "Giường bệnh", value: "bed" },
        { text: "Bác sĩ nhập viện", value: "in_doctor" },
        { text: "Bác sĩ xuất viện", value: "out_doctor" },
        { text: "Mã bảo hiểm y tế", value: "insurance_id"},
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
    this.getInPatientInformation();
  },
  methods: {
    getInPatientInformation(){
      axios.get('http://localhost:3000/inPatients/')
      .then(Response => {
        this.userList = Response.data
        this.userLength = this.userList.length
        for(let i = 0; i < this.userLength; i++) {
          // console.log(this.userList[i].issn)
          this.users.push({
            id: this.userList[i].issn,
            name: this.userList[i].Patient_name,  
            room: this.userList[i].room,
            bed: this.userList[i].position,  
            in_doctor: this.userList[i].indoctorssn,
            out_doctor: this.userList[i].outdoctorssn,
            insurance_id: this.userList[i].insurance_id,
          })
        }
      })
    }
  }
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