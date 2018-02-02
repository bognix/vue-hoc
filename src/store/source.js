const listeners = {};
const comments = ['comment one', 'comment two', 'comment three', 'comment four', 'comment five'];
let blogPost = `Lorem ipsum dolor sit amet, utinam scripta splendide ei cum.
Mediocrem dissentiet est ut, nec tale ullum no, has putent scaevola mediocrem an.
Ex quot latine denique vim, ne quot quaeque sea.
In pri habeo diceret, an ius tale voluptatum, ad liber facilis minimum vis.
Eos iriure concludaturque id, sed inani nulla interesset in, labores adipiscing dissentiet vel ut.`;

setInterval(() => {
    comments.push(`fresh comment ${comments.length + 1}`)
    blogPost = `${blogPost} ${comments.length}`
}, 5000)

export default {
    getComments() {
        return comments;
    },

    getBlogPost() {
        return blogPost;
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
