<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <td>{{role.id}}</td>
          <td>{{role.name}}</td>
          <td>
            <div>
              <router-link :to="`/roles/${role.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit</router-link>
              <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" @click="del(role.id)">Delete</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {ref, onMounted} from 'vue'
import axios from 'axios'
import {Role} from '@/models/role'

export default {

  name: "Roles",
  setup () {
    const roles = ref([])

    onMounted(async () => {
      const {data} = await axios.get('roles')

      roles.value = data
    })
    const del = async (id: number) => {
      if (confirm('Are you sure?')) {
        await axios.delete(`roles/${id}`)

        roles.value = roles.value.filter((r: Role) => r.id !== id)
      }
    }
    return {
      roles,
      del
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
