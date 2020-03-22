import { Bubble } from 'vue-chartjs'
import database from './firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            datasets: []
          },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            legend:{
              display:true


            },
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },

  methods: {
    fetchItems: function () {
      database.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.datasets.push(
              {
                label:doc.data().Label,
                backgroundColor: doc.data().backgroundColor,
                borderColor: doc.data().borderColor,
                data:[{x:doc.data().GDP, y:doc.data().Happiness,r:doc.data().Size}]
            })
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  },

  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}