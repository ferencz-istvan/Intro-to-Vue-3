app.component('product-details',{
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template:
    /* html */
    `<h4>Details about product:</h4>
    <p v-for="detail in details">{{ detail}} <p>`
})