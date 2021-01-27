<template>
  <v-container class="fill-height" fluid >
    <v-row align="center" justify="center" >

      <v-col cols="12" sm="8" >
        <v-alert v-model="error" border="left" close-text="Close Alert" color="red accent-2" dark dismissible >
          <div v-html="errorMessage"></div>      
        </v-alert>        
        <Login :user="user" @login="_login"/>      
      </v-col>
    </v-row>

  </v-container>        
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Login from '@/components/auth/Login'

  export default {
    data(){
    return {
      user: {
        username:'',
        password:''        
      }
    }
  },
    components: {      
      Login
    },
    computed: {
      ...mapState('auth',['error','errorMessage','isLogged'])
    },
    methods: {      
      ...mapActions('auth', ['signIn']),

      async _login(){      
        await this.signIn( this.user )
        this.$router.push('/builder')
    },      
    }
  }
</script>

