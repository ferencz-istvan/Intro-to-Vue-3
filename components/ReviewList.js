app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /* html */
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{review.name}} gave this {{review.rating}} stars 
                <br>
                {{ review.review}} 
                <br>
                <span>{{typeof review.recommending}} : {{review.recommending}}</span>
                <br>
                <span v-if="review.recommending"> {{review.name}} recommends this product</span>
                <span v-else> {{review.name}} doesn't recommend this product</span>
            </li>
        </ul>
    </div>
    `
})