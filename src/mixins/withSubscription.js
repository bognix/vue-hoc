import DataSource from '../store/source'

export default {
    data() {
        return {
            fetchedData: null
        }
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
