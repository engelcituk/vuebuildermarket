<template>
  <v-app id="inspire"> 
      <Loading :active.sync="loading"></Loading>
      <v-navigation-drawer
        v-model="drawer"
        app
        v-if="isLogged"
        dark
      >
      <ListMenu/>      
      </v-navigation-drawer>
      <navbar :drawer="drawer" @collapse-sidebar="collapseSidebar" v-if="isLogged"/>
      <v-main>
        <router-view/>      
      </v-main>
    </v-app>
</template>

<script>
import {mapState} from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import ListMenu from '@/components/shared/ListMenuSidebar'
import Navbar from '@/components/shared/Navbar'

export default {
  data: () => ({ drawer: false}),
    components: { 
      Loading,     
      ListMenu,
      Navbar      
    },
    methods:{
      collapseSidebar(){
        this.drawer = !this.drawer       
      }
    },
    computed:{
      ...mapState('auth',['isLogged','user']),          
      ...mapState(['loading'])
    }
}
</script>