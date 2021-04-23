<template lang="">
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="prev">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="javascript:void(0)" @click="next">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import {ref, SetupContext, watch} from 'vue'

export default {
  name: 'Paginator',
  props: {
    lastPage: Number
  },
  emits: ['page-changed'],
  setup(props: { lastPage: number }, context: SetupContext) {
    const page = ref(1)

    // pageの変更を監視し、変更があればイベントを発火する
    watch(page, () => {
      // @page-changedイベントをリッスンするハンドラは引数にページ数を受け取る
      context.emit('page-changed', page.value)
    })

    const prev = () => {
      if (page.value > 1) {
        page.value--
      }
    }

    const next = () => {
      if (page.value < props.lastPage) {
        page.value++
      }
    }

    return {
      prev,
      next
    }
  }
}
</script>
<style lang="">

</style>
