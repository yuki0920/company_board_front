<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <label>Title</label>
        <input v-model="formData.title" class="form-control" name="title">
    </div>
    <div class="mb-3">
      <label>Description</label>
      <textarea v-model="formData.description" class="form-control" name="description" />
    </div>
    <div class="mb-3">
      <label>Image</label>
      <div class="input-group">
        <input v-model="formData.image" class="form-control" name="image">
        <ImageUpload @uploaded="formData.image = $event" />
      </div>
    </div>
    <div class="mb-3">
      <label>Price</label>
      <input type="number" v-model="formData.price" class="form-control" name="price">
    </div>
    <button class="btn btn-outline-secondary" type="submit">Save</button>
  </form>
</template>

<script lang="ts">
import {reactive, ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'
import ImageUpload from '@/components/ImageUpload.vue'

export default {
  name: 'ProductCreate',
  components: {ImageUpload},
  setup () {
    const {push} = useRouter()
    const formData = reactive({
      title: '',
      description: '',
      image: '',
      price: 0 // 空文字で初期化するとエラーになる
    })

    const submit = async () => {
      const data = {...formData, price: Number(formData.price)}

      await axios.post('products', data)

      await push('/products')
    }


    return {
      formData,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
