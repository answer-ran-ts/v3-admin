<template>
  <p>用户名：{{ userName }}</p>
  <button @click="changeName">改变名称</button>
  <Test2 :name="name" :age="age" @change="change" />
</template>

<script setup lang="ts">
import useStore from '@/store/index'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import Test2 from '@/components/Test2.vue'
const { useInfoStore } = useStore()
const { userName } = storeToRefs(useInfoStore)
const { changeName } = useInfoStore
const name = ref('小米')
const age = ref(12)
const change = (obj: any) => {
  age.value = obj.id
}
</script>

<style lang="scss" scoped></style>
