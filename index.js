// console.log('hey file is connected!!')
// console.error('this is console error')
// console.warn("this to warn message")

// keywords
// var,let ,const

var variablename='hey var variable'
var variablename='value changed'
// console.log(variablename)

let letvariable='hey let variable'
letvariable='variable changed'
// console.log(letvariable)

const pi=3.14
// const pi=1.2
// console.log(pi)

// string number boolean undefined null 
// string 
let stringname="Hello welcome to my workshop my name is ayush"
// console.log(stringname)
// console.log(stringname.length)
// console.log(stringname[0])
// let upperstring=stringname.toUpperCase()
// console.log(upperstring)
// console.log(stringname.toLowerCase())

// console.log(stringname.slice(6,13))

var number=12
// console.log(typeof(number+""))
// let name1 ='csi'
// let template= `hello my name is ${name1}`
// console.log(template)

// boolean
// operator
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)

// console.log(3<=11)

// == vs ===
0
// falsy - 0,false,null,undefined,""
// console.log(12==="12")
let age=12
// if(0===""){
//     console.log('age is greater than 21')
// }
// else{
//     console.log('age is less')
// }

// console.log(age>1?'true':"false")


// while (age>0) {
//     console.log(age)
//     age=age+1
// }

// do {
    
// } while (condition);

// for (declaration; condition; incre ya decre) {
//     const element = array[index];
    
// }

// undefined null
// let carname
// console.log(carname)

// array

// let name1='ayush'
// let name2='work'

let arrayname=['1','2','3','4']
let array3=['aysushdn','asd']
// console.log(typeof(null))
// arrayname.pop()
// arrayname.push('5')
// arrayname.shift()
// arrayname.unshift('0')
// console.log(arrayname)
// arrayname[1]='ayuhs'

// let arrayname2=[...arrayname,...array3]
// console.log(arrayname2)

// forof forin map filter some every
// for(let item of array3){
//     console.log(item)
// }

// for(let itemayush in array3){
//     console.log(array3[itemayush])
// }

let arrayacha=['ayush','2nd','48']

// let mapaaray=arrayacha.map(function (data){
//     return data+" 😊"
// })
// console.log(mapaaray)

// arrayacha.forEach(function (data){
//     console.log(data+" 😎")
// })

const obj={
    name:'ayush',
    rollno:48,
    std:'2nd year'
}

// console.log(obj['name'])
// console.log(obj)
// console.log(obj.name)
// console.log(obj.std)

// function csi(){
//     console.log('yeh mera function hai!!!')
//     console.log('1asas')
// }
// csi()

// const func=function (){
//     console.log('yeh expression function!!!')
// }
// func()

// const arrowfunc = ()=>'ress'

// console.log(arrowfunc())

// let id=document.getElementById('link1')
// console.log(id)
// console.log(id.innerText)
// id.innerText='CSI WEBSITE'
// console.log(id.innerText)

// let clasname=document.getElementById('navbar')
// clasname.style.backgroundColor='red'

// let nav=document.querySelector('navbar')
// console.log(nav)
// document.

// let navbar=document.getElementById('togglepract')
// // navbar.classList.toggle('navbar')
// // console.log(navbar.classList)
// let bodyelement=document.getElementById('bodyelement')

// navbar.addEventListener('click',()=>{
//     bodyelement.classList.toggle('light')
//     bodyelement.classList.toggle('black')
// })


console.log('mein pehle')
// setInterval(()=>{
//     console.log('interval mein hu')
// },2000)

// setTimeout(()=>{
//     console.log('mujhe time hai mein thodi der baad aata hu')
// },5000)
// console.log('mein dusra')

// function func1(){
//     console.log('mein func1')
// }


// function func2(ayush){
// console.log('func2 ke andar')
// ayush()
// }


// func2(func1)
// function proceed(thanks){
//     console.log('proceed')
//     thanks()
// }
// function thanks(){
//     console.log('thanks')
// }

// let promise=fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     return data
// })
// console.log(promise)


async function asynawait(){
    const data=await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data.status)
}
asynawait()
