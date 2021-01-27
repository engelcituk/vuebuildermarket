<template>
        
<v-app-bar app dark>
      <v-app-bar-nav-icon @click="$emit('collapse-sidebar', !drawer)"></v-app-bar-nav-icon>
                                                
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</template>


<script>

export default {
      
  computed:{
  },
  methods:{
    collapseSidebar(){
      
    }
  },
    props:{
        drawer: {
            type: Boolean,
            required: true
        }
    },
}
  
</script>
