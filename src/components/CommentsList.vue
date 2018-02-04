<template>
    <ul>
        <li v-for="(comment, index) in data" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'comments-list',
        props: ['data']
    }
</script>
