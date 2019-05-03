const app = new Vue({
    el: '#app',
    // The data object is where you store the data relevant to your page or component
    // and can add any data you wish as this is just a JS object
    //
    // you can access this data within your HTML or this vue instance
    // to access it in the HTML use the template syntax --> {{ liveIncidents }} 
    // to access it in this instance use this. syntax -----> if (this.releaseDate)
    data: {
        liveIncidents: 9,
        description: 'live incidents',
        linkToMSM: 'https://www.moneysupermarket.com',
        lotsOfIncidents: true,
        tickets: [
            {
                title: 'MBURN-316',
                releaseDate: '20th apr 2019',
                done: false
            },
            {
                title: 'MBURN-317',
                releaseDate: '20th apr 2019',
                done: false
            }
        ],
        releaseDate: '',
        ticketTitle: '',
    },
    methods: {
        // Methods are functions available to the page to allow the user to
        // get or set data to effect the page state or update the server side DB
        // Methods are defined using function expressions or the es6 shorthand method

        // Function expression
        addTicket: function() {
            if (this.releaseDate !== '' && this.ticket !== '') {
                this.tickets.push({
                    title: this.ticketTitle,
                    releaseDate: this.releaseDate,
                    done: false
                })
            };

            this.emptyFields();
        },

        // ES6 shorthand
        emptyFields() {
            this.releaseDate = '';
            this.ticket = '';
        },

        completeTicket(id) {
            this.tickets.forEach((t, i) => {
                if (i === id) {
                    t.done = true;
                }
            });
        },

        removeTicket(id) {
            this.tickets.forEach((t, i) => {
                if (i === id) {
                    this.tickets.splice(i, 1); 
                }
            })
        }
    },
    computed: {
        // Computed properties run on build or when any of the 
        // dependant values update, they're also cached until this happens
        title() {
            return `Number of live incidents: ${this.liveIncidents}`
        }
    },
});
