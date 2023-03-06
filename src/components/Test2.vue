<template>
  <p>哈哈哈</p>
  <p>{{ name }}</p>
  <p>{{ age }}</p>
  <p @click="changeHandler"><button>获取父组件的name值</button></p>
  <p @click="changeName"><button>修改父组件的值</button></p>
</template>
<script setup lang="ts">
import { toRef } from 'vue'

interface Props {
  name: string
  age?: number
  man?: true
}
const props = withDefaults(defineProps<Props>(), {
  name: '小明',
  age: 10,
  man: true
})

const emit = defineEmits<{
  (event: 'change', human: { id: number; name?: string }): void
}>()
const name = toRef(props, 'name')
const age = toRef(props, 'age')

const changeHandler = () => {
  console.log(props)
}
const changeName = () => {
  emit('change', { id: 10 })
}
</script>

<style lang="scss" scoped></style>
