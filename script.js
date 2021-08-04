// '// // class movie{
// // //     constructor(title,studio,rating)
// // //     {
// // //         this.title=title;
// // //         this.studio=studio;
// // //         this.rating=rating;

// // //     }
// // //     setTitle(title){
// // //         this.title=title;
// // //     }
// // //     setStudio(studio){
// // //         this.studio=studio;
// // //     }
// // //     setRating(rating){
// // //         this.rating=rating;
// // //     }
// // //     getTitle(){
// // //         console.log(this.title)
// // //     }
// // //     getStudio(){
// // //         console.log(this.studio);
// // //     }
// // //     getRating(){
        
// // //         console.log(this.rating);
// // //     }

// // // }
// // // var ans=new movie("Casino Royale","Eon Productions","PG13");
// // // ans.getRating();
// // // ans.getStudio();
// // // ans.getTitle();
// // // class uber{
// // //     constructor(distance){
// // //         this.distance=distance;

// // //     }
// // //     setDistance(distance){
// // //         this.distance=distance;
// // //     }
// // //     getPrice(){
// // //         console.log(this.distance*11)
// // //     }
// // // }
// // // var price=new uber(10);
// // // price.setDistance(20);
// // // price.getPrice()
// // // class person
// // // {
// // //     constructor(name,age,degree,){
// // //     this.name=name;
// // //     this.age=age
// // //     this.degree=degree;
// // //     }
// // //     setName(name)
// // //     {
// // //         this.name=name;
// // //     }
// // //     setAge(age)
// // //     {
// // //         this.age=age;
// // //     }
// // //     setDegree(degree)
// // //     {
// // //         this.degree=degree;
// // //     }
// // //     getName(){
// // //         console.log(this.name)
// // //     }
// // //     getAge(){
// // //         console.log(this.age)
// // //     }
// // //     getDegree(){
// // //         console.log(this.degree)
// // //     }
// // // }
// // // var detail=new person("dinesh",24,"be");
// // // const arr1=[1,2,3,4,5,6,];
// // // const arr2=[7,8,9,0];
// // // console.log(...arr1,...arr2)
// // // var arr3=[1,2,3,4,5,6,7,89,0]
// // // var a=(a,...b)=>{console.log(a,b)
// // // };a(4,arr3)
// // var _this=this;
// // firstname="dinesh";
// // lastname="babu";

// // var a=function (b,c){
// //     return (b +c);
// // }
// // a(firstname,lastname)
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// xhr.onload = function () 
// {
//     var t = JSON.parse(this.response);
//     var currency=t.filter((element)=>
//     {
//         if(element.currencies[0].name=="United States dollar")
//         {
//             return element.name;
//         }
//     })
    
//     console.log(currency)
    

//     // t.forEach(element => {
//     //     console.log(element.name);
//     //     console.log(element.capital);
// //     //     console.log(element.flag);
// //     // });
// //     // // var filtering=t.filter((element)=>
// //     // {
// //     //     if(element.region=="Asia")
// //     //     {
// //     //         return element;
// //     //     }
// //     // })
// //     // console.log(filtering)
// //     // var population=t.filter((element)=>
// //     // {
// //     //     if (element.population<200000)
// //     //     {
// //     //     return element.population;
// //     //     }
        
// //     // })
// //     // console.log(population)
    
// //     // var reducer=population.reduce((element1,element2)=>
// //     // {
// //     //    return element1+element2
// //     // })
// //     // console.log(reducer)
// // }
// // xhr.onerror = function () 
// // {
// //     console.log("Error", this.statusText);
// // };
// //     xhr.send();
   
        
   
   

// // // let arr = [{
// // //     name: 'Butters',
// // //     age: 3,
// // //     type: 'dog'
// // // },
// // // {
// // //     name: 'Lizzy',
// // //     age: 6,
// // //     type: 'dog'
// // // },
// // // {
// // //     name: 'Red',
// // //     age: 1,
// // //     type: 'cat'
// // // },
// // // {
// // //     name: 'Joey',
// // //     age: 3,
// // //     type: 'dog'
// // // },
// // // ];

// // // var mapping=arr.map((element)=>
// // // {
// // //     return element.age*5;
// // // })
// // // console.log(mapping)
// // // var ages=arr.map((element)=>
// // // {
// // //     return element.age;
// // // })

// // // var reducing=ages.reduce((total,age)=>
// // // {
 
// // //     return total+age
// // // })
// // // console.log(reducing)'
// var resume=[{objective:"A highly disciplined and hardwoking individual looking for a responsible person to gain good experience",
//               education:[
//               {school_degree:"BE EEE",
//                institute:"university college of engineering,panruti",
//                board_university:"anna university",
//                year:2019,
//                percentage:58},
//                {school_degree:"HSC",
//                 institute:"Adharsh vidhyalaya higher secondary school",
//                 board_university:"stateboard",
//                 year:2015,
//                 percentage:82.5},
//               {school_degree:"SSLC",
//                institute:"government boys.hr.sec.school",
//                board_university:"stateboard",
//                year:2013,
//                percentage:87}],
//               project:
//                 {title:"A hybrid technique for performance improvement in ac-dc converter system",
//                  object:"This project highlights the power qualityissues"},
//               softwareskills:["javascript","python","html","css"],
//             personel_details:{name:"dinesh",
//                               fathername:"palani",
//                               contact_no:"1234567890",
//                               mail_ID:"dineshbabu0831@gmail.com"},
//               declaration:"i hereby declare that information furnished above is true to the best of my knowledge"
// }]
// console.log(resume)
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () 
 {
     var t = JSON.parse(this.response);
     for(i=0;i<t.length;i++)
     {
     console.log(t[i].name)
     console.log(t[i].region)
     console.log(t[i].subregion)
     console.log(t[i].population)
     console.log(t[i].flag)
     }
}

 xhr.onerror = function () 
 {
     console.log("Error", this.statusText);
 };
     xhr.send();
   