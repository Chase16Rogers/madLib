<template>
  <div class="card">
    <div class="card-body container-fluid">
      <div class="row">
        <div class="col-9">
          <p class="mb-0 lib-title">
            {{ libProp.title }}
          </p>
          <p class="mb-1">
            by: {{ libProp.creator.name.split('@')[0] }}
          </p>
          <div class="d-flex">
            <p v-if="libProp.tags.length > 0">
              {{ libProp.tags[0] }}
            </p>
            <p v-if="libProp.tags.length > 1">
              , {{ libProp.tags[1] }}
            </p>
            <p v-if="libProp.tags.length > 2">
              , {{ libProp.tags[2] }}
            </p>
          </div>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center flex-column ">
          <i class="fa fa-smile-o fa-2x" aria-hidden="true"></i>
          <p>{{ libProp.likes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibComponent',
  props: {
    libProp: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.lib-title{
  font-size: 1.5em;
  font-weight: 500;
}
</style>
