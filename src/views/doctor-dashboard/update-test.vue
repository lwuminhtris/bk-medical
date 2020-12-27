<template>
  <div class="adminimage">
    <v-content>
      <v-row justify="start" style="background-color: black;">
        <v-col md="auto" style="margin-left: 50px;">
          <v-btn to="../doctor-dashboard">
            <v-icon style="margin-bottom: 3px;"> mdi-keyboard-backspace </v-icon>
            QUAY LẠI DASHBOARD
          </v-btn>
        </v-col>
        <v-col md="200px">

        </v-col>
      </v-row>
      <v-row align="center" justify="center" style="margin-top: 80px;">
        <v-col md="auto" sm="auto">

          <h3 style="color: white; margin-bottom: 10px;">CHỨC NĂNG CẬP NHẬT LỊCH KHÁM CỦA BỆNH NHÂN</h3>

          <v-text-field
            dark
            outlined
            label="Mã id của đơn khám"
            style="width: 500px;"
            v-model="examination_length"
            disabled
          >

          </v-text-field> 

          <v-text-field
            dark
            outlined
            label="Mã id của bệnh nhân"
            style="width: 500px; margin-top: -20px;"
            v-model="id"
          >
            
          </v-text-field>

          <v-text-field
            dark
            outlined
            label="Mã id buổi khám"
            style="width: 500px; margin-top: -20px;"
            v-model="shift_id"
          >
            
          </v-text-field>

          <v-text-field
            dark
            outlined
            label="Từ khoảng thời gian"
            style="width: 500px; margin-top: -20px;"
            v-model="from_time"
          >
            
          </v-text-field>

          <v-text-field
            dark
            outlined
            label="Đến khoảng thời gian"
            style="width: 500px; margin-top: -20px;"
            v-model="to_time"
          >
            
          </v-text-field>

          <v-btn
            style="margin-top: -20px; width: 100%;"
            @click="update_examination"
          >
            Cập nhật buổi khám
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
      examination_id: 0,
      id: '',
      shift_id: 0,
      from_time: 0,
      to_time: 0,
      examination_length: 0,
    };
  },
  computed: {

  },
  created() {
    this.getlength();
  },
  methods: {
    getlength() {
      /*
      axios.get('http://localhost:3000/examinations')
      .then(Response => {
        this.examination_length = Response.data.length
      })
      */
      this.examination_length = 8
      this.examination_id = this.examination_length
    },
    update_examination () {
      let data = {
        medical_examination_id: this.examination_id,
        patient_ssn: this.id,
        shift_id: this.shift_id,
        fromtime: this.from_time,
        totime: this.to_time,
      }
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.post('http://localhost:3000/examinations', data, config)
      .then((Response) => Response.data[this.Response.data.length + 1])
      //.then(Response => Response.data)
      .then(({medical_examination_id, patient_ssn, shift_id, fromtime, totime}) => {
        this.examination_id = medical_examination_id,
        this.id = patient_ssn,
        this.shift_id = shift_id,
        this.from_time = fromtime,
        this.to_time = totime
      })
      window.alert("Cập nhật buổi khám thành công!")
    }
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