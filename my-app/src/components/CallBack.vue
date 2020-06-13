<template>
  <div></div>
</template>

<script>
import Mgr from "../services/SecurityService";
import router from '../router'
export default {
  mounted() {
    let mgr = new Mgr();
    mgr.callback();
  },
};
</script>
