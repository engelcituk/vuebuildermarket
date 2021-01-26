<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      
    >
      <!--  -->
      <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
    
  >
    

    <v-navigation-drawer
      v-model="drawer"
      absolute
      
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
        
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
    </v-navigation-drawer>
      
</template>


<script>
  import Vue from 'vue'
  import { mapMutations, mapState } from 'vuex'

  export default {
    data(){
    return {
        items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],        

    }
  },  
  computed:{
        ...mapState('cart',['cart']),
  },
  methods:{
      ...mapMutations('auth',['logout']),
      ...mapMutations('cart',['setEmptyCart']),

      _logout(){
          this.logout()
          this.$router.push('/login')                
      },

      _clearAll(){
        Vue.swal({
          title: `All data in the application will be cleaned`,
          text: `Do you want to clean up your data and log in again?`,
          icon: 'warning',                
          allowOutsideClick: false,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, clear!',
          cancelButtonText: 'Cancel!'
        }).then((result) => {
          if (result.value) {
              this.logout()
              this.setEmptyCart()
              localStorage.clear()
              this.$router.push('/login')
          }
        })
      }

    },
    props:{
        drawer: {
            type: Boolean,
            required: true
        }
    },
  //     computed:{
  //   ...mapGetters('auth',['userInfoGetter']),       
  //   ...mapState('cart',['cart','cliente'])                   
  //   },
}
  /**
  
// v-if="$route.name != 'operation'"
// v-if="$route.name != 'operation'"
// v-if="$route.name != 'operation'"
 */
</script>
