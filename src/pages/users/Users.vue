<template>
  <div class="table-responsive">
    <table class="table table-striped table-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.first_name}} {{user.last_name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.role.name}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
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
import {onMounted, ref} from 'vue'
import axios from 'axios'

export default {
  name: "Users",
  setup() {
    const users = ref([])
    const page = ref(1)
    const lastPage = ref(0)

    const load = async ()=> {
      const {data} = await axios.get(`users?page=${page.value}`)

      users.value = data.data
      lastPage.value = data.meta.last_page
    }

    onMounted(load)

    const prev = async () => {
      // first_pageは必ず1
      if (page.value > 1) {
        page.value--
        await load()
      }
    }

    const next = async () => {
      if (page.value < lastPage.value) {
        page.value++
        await load()
      }
    }

    return {
      users,
      prev,
      next
    }
  }
}
</script>
