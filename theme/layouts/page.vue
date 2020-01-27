<template>
  <Base :page="page">
    <div class="page">
      <slot name="default" />
    </div>
  </Base>
</template>

<script>
import Base from '../components/Base'

export default {
  props: ['page'],
  components: { Base },
}
</script>
