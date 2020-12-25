import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

import DoctorDashboard from '../views/doctor-dashboard.vue'
import DoctorViewInPatient from '../views/doctor-dashboard/inpatient.vue'
import DoctorViewTest from '../views/doctor-dashboard/test.vue'
import DoctorUpdateTest from '../views/doctor-dashboard/update-test.vue'

import AdminDashboard from '../views/admin-dashboard.vue'
import AdminViewInPatient from '../views/admin-dashboard/inpatient.vue'
import AdminViewOutPatient from '../views/admin-dashboard/outpatient.vue'
import AdminAdvancedSearch from '../views/admin-dashboard/advanced-search.vue'

import UserDashboard from '../views/user-dashboard.vue'
// import UserDashboardMedicine from '.../views/user-dashboard/medicine.vue'
import UserDashboardTest from '../views/user-dashboard/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },

  // below is doctor routes
  {
    path: '/doctor-dashboard',
    name: 'doctor-dashboard',
    component: DoctorDashboard
  },
  {
    path: '/doctor-dashboard/inpatient',
    name: 'doctor-dashboard-inpatient',
    component: DoctorViewInPatient
  },
  {
    path: '/doctor-dashboard/update-test',
    name: 'doctor-dashboard-update-test',
    component: DoctorUpdateTest
  },
  {
    path: '/doctor-dashboard/view-test',
    name: 'doctor-dashboard-test',
    component: DoctorViewTest
  },

  // below is admin routes
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard
  },
  {
    path: '/admin-dashboard/inpatient',
    name: 'admin-dashboard-inpatient',
    component: AdminViewInPatient
  },
  {
    path: '/admin-dashboard/outpatient',
    name: 'admin-dashboard-outpatient',
    component: AdminViewOutPatient
  },
  {
    path: '/admin-dashboard/advanced-search',
    name: 'admin-dashboard-advanced-search',
    component: AdminAdvancedSearch
  },

  // below is user dashboard
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: UserDashboard
  },

  {
    path: '/user-dashboard/test',
    name: 'user-dashboard-test',
    component: UserDashboardTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
