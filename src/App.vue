<template>
  <v-app id="inspire">        
    <sidebar :drawer="drawer" v-if="isLogged"/>
    <navbar :drawer="drawer" @collapse-sidebar="collapseSidebar" v-if="isLogged"/>
    <v-main>
      <router-view/>      
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import Sidebar from '@/components/shared/Sidebar'
import Navbar from '@/components/shared/Navbar'

export default {
  data: () => ({ drawer: false}),
    components: {      
      Sidebar,
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