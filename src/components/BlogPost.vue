<template>
    <div>
        <h3>Blog Post {{id}}</h3>
        <button @click="$emit('click', 'aloha')">CLICK ME!</button>
        <br/>
        {{data}}
    </div>
</template>

<script>
    export default {
        props: ['data', 'id'],
    }
</script>
