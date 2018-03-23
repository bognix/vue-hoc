<template>
  <div>
    <slot :data="fetchedData"></slot>
  </div>
</template>
<script>
import DataSource from '../store/source'

export default {
  data() {
    return {
      fetchedData: null
    }
  },
  props: {
    selectData: {
      type: Function,
      required: true
    },
  },
  methods: {
    handleChange() {
      this.fetchedData = this.selectData(DataSource, this.$props)
    }
  },
  mounted() {
    DataSource.addChangeListener(this.handleChange)
  },
  beforeDestroy() {
    DataSource.removeChangeListener(this.handleChange)
  }
}
</script>
