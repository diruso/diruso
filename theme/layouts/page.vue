<template>
  <Base :page="page">
    <div class="page">
      <article class="han-init-context">
        <slot name="default" />
      </article>
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
