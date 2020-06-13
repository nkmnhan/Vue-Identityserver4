<template>
</template>

<script>
import Mgr from "../services/SecurityService";
import router from '../router'
export default {
  mounted() {
    let mgr = new Mgr();
    mgr.silent();
  },
};
</script>