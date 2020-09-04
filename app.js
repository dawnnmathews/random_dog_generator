import { randomDog } from './apis.js'

new Vue({
    el: '#app',
    data: {
        dogname: '',
        bredfor: '',
        breedgroup: '',
        heightinmetric: '',
        lifespan: '',
        temperament: '',
        weightinmetric: '',
        src: '',
        url: 'https://api.thedogapi.com/v1/images/search'
    },
    methods: {
        fetchRandomDog() {
            randomDog(this.url).then((result) => {
                this.dogname = result[0].breeds[0].name;
                this.bredfor = result[0].breeds[0].bred_for;
                this.breedgroup = result[0].breeds[0].breed_group;
                this.heightinmetric = result[0].breeds[0].height.metric;
                this.lifespan = result[0].breeds[0].life_span;
                this.temperament = result[0].breeds[0].temperament;
                this.weightinmetric = result[0].breeds[0].weight.metric;
                this.src = result[0].url;
            }).catch(function(err){
                console.log('Error is : ' + err);
            })
        }
    },
    created: function () {
        this.fetchRandomDog();
    }
});