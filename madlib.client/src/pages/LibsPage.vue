<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h2 class="mb-2">
          Recent
        </h2>
        <lib-component v-for="lib in state.libs" :key="lib._id" :lib-prop="lib" />
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { libsService } from '../services/LibsService'
import { AppState } from '../AppState'
export default {
  name: 'LibsPage',
  setup() {
    const state = reactive({
      libs: computed(() => AppState.libs)
    })
    onMounted(async() => {
      try {
        await libsService.getLibs()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
