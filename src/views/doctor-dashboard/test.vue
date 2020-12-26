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
        <!--
        <v-col md="auto" align-self="center">
          <h4 style="margin-right: 50px; color: white;">CHỨC NĂNG KIỂM TRA XÉT NGHIỆM CỦA BỆNH NHÂN</h4>
        </v-col>
        -->

      </v-row>
      <v-row align="center" justify="center" style="margin-top: 80px;">
          <h4 style="color: white;">CHỨC NĂNG KIỂM TRA XÉT NGHIỆM</h4>
      </v-row>
      <v-row align="center" justify="center"  >
        <v-col md="auto" sm="auto">



          <v-text-field
            dark
            outlined
            label="Nhập mã id của buổi khám"
            style="width: 300px;"
            v-model="id"
          >
            
          </v-text-field>
        </v-col>
        <v-col md="auto">
          <v-btn
            style="margin-top: -31px; height: 55px; margin-left: -10px;"
            @click="check"
          >
            Kiểm tra
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col md="auto">
          <v-data-table
            :headers="headers"
            :items="health"
            item-key="name"
          >
            <template v-slot:expanded-item="{ headers }">
              <td :colspan="headers.length">
                
              </td>
            </template>
          </v-data-table>
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
      /*
      name: '',
      detail: '',
      username: '',
      id: '',
      notation: '',
      */
      id: 0,
      examination_id: [],
      name: [],
      result: [],
      type_name: [],
      notation: [],
      doctor_in_ssn: [],
      doctor_out_ssn: [],
      headers: [
        { text: "Tên xét nghiệm", value: "name", sortable: false },
        { text: "Kết quả", value: "result", sortable: false },
        { text: "Loại xét nghiệm", value: "type_name", sortable: false},
        { text: "Ghi chú", value: "notation", sortable: false},
        { text: "Người thực hiện", value: "doctor_in_ssn", sortable: false},
        { text: "Người chẩn đoán", value: "doctor_out_ssn", sortable: false}
      ],
      test_list: [],
      health: [],
    };
  },
  computed: {

  },
  created() {
    this.getInformation();
  },
  methods: {
    getInformation() {
      axios.get('http://localhost:3000/testResults')
      .then(Response => {
        this.test_list = Response.data
        for(let i = 0; i < this.test_list.length; i++){
          this.name[i] = this.test_list[i].tid
          this.examination_id[i] = this.test_list[i].medicalExamination_id
          this.notation[i] = this.test_list[i].note
          this.result[i] = this.test_list[i].result
          this.type_name[i] = this.test_list[i].type_name
          this.doctor_in_ssn[i] = this.test_list[i].doctor_assign_ssn
          this.doctor_out_ssn[i] = this.test_list[i].doctor_take_ssn
        }
      })
    },

    check() {
      for(let i = 0; i < this.test_list.length; i++){
        if(this.id == this.test_list[i].medicalExamination_id){
          this.health.push({
            name: this.test_list[i].tid,
            notation: this.test_list[i].note,
            result: this.test_list[i].result,
            type_name: this.test_list[i].type_name,
            doctor_in_ssn: this.test_list[i].doctor_assign_ssn,
            doctor_out_ssn: this.test_list[i].doctor_take_ssn       
          })
        }
      }
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