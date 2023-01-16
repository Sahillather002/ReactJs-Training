console.log(undefined === undefined)
console.log(null === null)
console.log(null + undefined === null + undefined)
// null + undefined = nan
// nan === nan is false

//We have a list of podcasts and we need to filter only podcasts which are free. Create a function to take input podcasts data and return an array of free podcasts
const pod=[
    {title:"Learn React",rating:9,paid:true},
    {title:"Learn JS",rating:8,paid:false},
    {title:"Learn Redux",rating:7,paid:true},
    {title:"Learn HTML",rating:5,paid:false},
    {title:"Learn CSS",rating:9,paid:false},
    {title:"Learn Node",rating:7,paid:true}

]
