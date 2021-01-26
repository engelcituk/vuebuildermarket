<template>
  <v-app id="inspire">
    
    <sidebar :drawer="drawer"/>

    <v-app-bar app color="indigo">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati ea adipisci placeat quo deleniti minima consectetur commodi eaque aliquam error impedit cumque, repellat eligendi? In voluptatibus omnis rerum dolore.
    </v-main>
  </v-app>
</template>

<script>
  import Sidebar from '@/components/shared/Sidebar'

  export default {
    data: () => ({ drawer: false ,items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],}),
    components: {      
      Sidebar
    },
  }
</script>