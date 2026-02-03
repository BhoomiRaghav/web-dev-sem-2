// const profile = document.getElementById('profile');
// profile.style.backgroundColor = 'tomato';
// profile.style.textAlign = 'center';
// profile.style.padding = '15px';


// //task2
// const hightlight = document.getElementsByClassName('important');
// console.log(hightlight);
// for(let i = 0; i < hightlight.length; i++){
//     hightlight[i].style.color = 'Blue';

//     hightlight[i].style.fontWeight = 'bold';
//     hightlight[i].style.fontSize = '20px';
// }

// task 3
// const task3 = document.getElementsByTagName("p");
// console.log(task3);
// for(let i = 0; i < task3.length; i++){
//     if(i % 2 === 0){
//         task3[i].style.color = 'blue';
//     } else {
//         task3[i].style.color = 'red';
//     }
//     task3[task3.length - 1].style.fontWeight = 'bold';
// }

// const task4 = document.querySelector('.box');
// task4.style.backgroundColor = 'lightblue';
// task4.style.border = '2px solid blue';
// task4.style.margin = '10px';
// task4.textContent = 'i am first box';
const section = document.getElementById('content');
const task5 = section.querySelectorAll('p');m
for(let i = 0; i < task5.length; i++){
    task5[i].style.color = 'green';
}

// const task5 = document.querySelectorAll('#content p');
// for(let i = 0; i < task5.length; i++){
//     task5[i].style.color = 'green';
// }
