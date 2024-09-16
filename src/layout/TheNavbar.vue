<template>
  
  <nav>
    <TheToolbar @click="isDrawer = !isDrawer"/>
    
    <!-- <v-navigation-drawer app v-model="isDrawer" class="blue">
      <div v-for="link in links" :key="link.text">
        <NavListItem :route="link.route" :text="link.text" :icon="link.icon" />
      </div>
    </v-navigation-drawer> -->
  </nav>
</template>

<script>
// import NavListItem from "@/components/NavListItem.vue";
import TheToolbar from "@/components/TheToolbar.vue";
export default {
  components: { TheToolbar },
  data() {
    return {
      isDrawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/project" },
        { icon: "person", text: "Teams", route: "/teams" },
        { icon: "test", text: "test", route: "/test" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
