<template>
  <div
    class="mx-auto"
    width="256"
    tile
  >
        
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <!-- <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"            
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="_logout">
            <v-list-item-icon>
              <v-icon >mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    
  </div>
</template>


<script>

import { mapMutations } from 'vuex'


  export default {
    data(){
    return {
      selectedItem: 0,
      items: [
        // { text: 'My Files', icon: 'mdi-folder' },
        // { text: 'Shared with me', icon: 'mdi-account-multiple' },
        // { text: 'Starred', icon: 'mdi-star' },
        // { text: 'Recent', icon: 'mdi-history' },
        // { text: 'Offline', icon: 'mdi-check-circle' },
        // { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' }        
      ]        

    }
  },  
  computed:{
  },
  methods:{
      ...mapMutations('auth',['logout']),

      _logout(){
          this.logout()
          this.$router.push('/login')                
      },      
    },
   
}
  /**
  
// v-if="$route.name != 'operation'"
// v-if="$route.name != 'operation'"
// v-if="$route.name != 'operation'"
 */
</script>
