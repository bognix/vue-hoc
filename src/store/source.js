const listeners = {};
const comments = ['comment one', 'comment two', 'comment three', 'comment four', 'comment five'];
const blogPosts = {
    1: `Lorem ipsum dolor sit amet, utinam scripta splendide ei cum.
        Mediocrem dissentiet est ut, nec tale ullum no, has putent scaevola mediocrem an.
        Ex quot latine denique vim, ne quot quaeque sea.
        In pri habeo diceret, an ius tale voluptatum, ad liber facilis minimum vis.
        Eos iriure concludaturque id, sed inani nulla interesset in, labores adipiscing dissentiet vel ut.`,
    2: 'Peek-A-Boo!'
}

setInterval(() => {
    comments.push(`fresh comment ${comments.length + 1}`)
    Object.keys(blogPosts).forEach(id => {
        blogPosts[id] = `${blogPosts[id]} ${comments.length}`
    })
}, 5000)

export default {
    getComments() {
        return comments;
    },

    getBlogPost(id) {
        return blogPosts[id];
    },

    addChangeListener(listener) {
        const intervalId = setInterval(() => {
            listener()
        }, 1000)

        listeners[listener] = intervalId
    },

    removeChangeListener(listener) {
        clearInterval(listeners[listener])
    }
}
