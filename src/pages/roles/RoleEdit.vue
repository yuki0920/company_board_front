<template>
  <form @submit.prevent="submit">
    <div class="mb-3 mt-3 row">
      <label>Name</label>
      <div class="col-sm-10">
        <input v-model="formData.name" class="form-control" name="name">
      </div>
    </div>
    <div class="mb-3">
      <label>Permissions</label>
      <div class="col-sm-10">
        <div class="form-check form-check-inline col-3" v-for="permission in permissionList" :key=permission.id>
          <input class="form-check-input" type="checkbox" :value="permission.id"
          :checked="checked(permission.id)"
          @change="select(permission.id, $event.target.checked)">
          <label class="form-check-label">{{permission.name}}</label>
        </div>
      </div>
    </div>
    <button class="btn btn-outline-secondary" type="submit">Save</button>
  </form>
</template>

<script lang="ts">
import {onMounted, reactive, ref} from 'vue'
import axios from 'axios'
import {useRouter, useRoute} from 'vue-router'
import {Permission} from '@/models/permission'

export default {
  name: 'RoleEdit',
  setup () {
    const {push} = useRouter()
    const {params} = useRoute()
    const formData = reactive({
      name: '',
      permissions: [] as number[]
    })
    const permissionList = ref([])

    onMounted(async() => {
      const {data} = await axios.get('permissions')

      permissionList.value = data

      const response = await axios.get(`roles/${params.id}`)

      formData.name = response.data.name
      formData.permissions = response.data.permissions.map((permission: Permission) => permission.id)
    })

    const select = (id: number, checked: boolean) => {
      if (checked) {
        formData.permissions = [...formData.permissions, id]
        return
      } else {
        formData.permissions = formData.permissions.filter(permissionId => permissionId !== id)
      }
    }

    const checked = (id: number) => {
      return formData.permissions.some(p => p === id)
    }

    const submit = async () => {
      await axios.put('roles', formData)

      await push('/roles')
    }

    return {
      formData,
      permissionList,
      select,
      checked,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
