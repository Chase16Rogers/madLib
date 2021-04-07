<template>
  <div class="container-fluid">
    <div class="row bg-dark text-light px-5">
      <div class="col-4 pl-5 pt-3">
        <p class="mb-0 biggerT">
          {{ state.lib.title }}
        </p>
        <p class="">
          by: {{ state.lib.creator.name }}
        </p>
      </div>
      <div class="col-2 d-flex align-items-center justify-content-start">
        <i class="fa fa-smile-o" aria-hidden="true"></i>
        <p class="mb-0 ml-2">
          {{ state.lib.likes }}
        </p>
      </div>
      <div class="col d-flex align-items-center justify-content-end pr-5">
        <button class="btn btn-secondary">
          Mad Lib!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { libsService } from '../services/LibsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'ActiveLibPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      lib: computed(() => AppState.activeLib)
    })
    onMounted(() => {
      libsService.getOne(route.params.id)
    })
    return {
      state
    }
  }
}
</script>

<style>
.biggerT{
  font-size: 1.5em;
}
</style>
