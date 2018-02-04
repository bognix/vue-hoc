<template>
    <div>
        <button @click="$emit('click', 'aloha')">CLICK ME!</button>
        <br/>
        {{data}}
    </div>
</template>

<script>
    export default {
        props: ['data', 'id']
    }
</script>
