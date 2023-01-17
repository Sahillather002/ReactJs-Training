// console.log(undefined === undefined)
// console.log(null === null)
// console.log(null + undefined === null + undefined)
//------------------------------------------
// null + undefined = nan
// nan === nan is false
// const tasks = ["task1","task2","task3","task4"]
// tasks.map((task) => {
//     return '<h1>${task}</h1>'
// })

//We have a list of podcasts and we need to filter only podcasts which are free. Create a function to take input podcasts data and return an array of free podcasts



const pod=[
    {title:"Learn React",rating:9,paid:true},
    {title:"Learn JS",rating:8,paid:false},
    {title:"Learn Redux",rating:7,paid:true},
    {title:"Learn HTML",rating:5,paid:false},
    {title:"Learn CSS",rating:9,paid:false},
    {title:"Learn Node",rating:7,paid:true}

]

const freePods = pod.filter((podcast)=>{
    return podcast.paid === false
})

console.log(freePods)

const res = freePods.map((pod)=>{
    return {
        title:pod.title,
        rating:pod.rating
    }
})

console.log(res)

function getFreePod(podcasts){
    return podcasts
    .filter(podcast => podcast.paid===false)
    .map(item => {
        return {
            title:item.title,
            rating:item.rating
        }
    })
}
console.log(getFreePod(pod))