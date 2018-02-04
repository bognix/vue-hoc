import DataSource from '../store/source'
import Vue from 'vue'


const withSubscription = (component, selectData) => {
    const inheritedProps = component.props || [];

    return Vue.component('withSubscription', {
        render(createElement, context) {
            return createElement(component, {
                props: {
                    ...inheritedProps,
                    data: this.fetchedData
                },
                ...context
            })
        },
        props: [...inheritedProps],
        data() {
            return {
                fetchedData: null
            }
        },
        methods: {
            handleChange() {
                this.fetchedData = selectData(DataSource, this._props)
            }
        },
        mounted() {
            DataSource.addChangeListener(this.handleChange)
        },
        beforeDestroy() {
            DataSource.removeChangeListener(this.handleChange)
        }
    })
}

export default withSubscription
