let user=[
    {
        profilepic:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        displaypic:"https://images.unsplash.com/photo-1621784564114-6eea05b89863?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:4,
        location:"Banglore,India",
        name:"Victoria",
        age:23,
        interests:[{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"},
            {
            icon:`<i class=" text-sm ri-music-fill"></i>`,
            interest:"Music"
            }]  ,
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate odit provident adipisci beatae minima aliquam aspernatur consectetur animi repellat exercitationem quas, in amet consequatur nostrum aliquid quibusdam ullam esse itaque",  
        isfriend:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypic:"https://plus.unsplash.com/premium_photo-1674069720020-41e6dea32366?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:7,
        location:"Delhi,India",
        name:"Anjali",
        age:26,
        interests:[{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writing"},
            {
            icon:`<i class=" text-sm ri-music-fill"></i>`,
            interest:"Music"
            }]  ,
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate odit provident adipisci beatae minima aliquam aspernatur consectetur animi repellat exercitationem quas, in amet consequatur nostrum aliquid quibusdam ullam esse itaque",  
        isfriend:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:2,
        location:"London,British",
        name:"Sara",
        age:28,
        interests:[{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writing"},
            {
            icon:`<i class=" text-sm ri-music-fill"></i>`,
            interest:"Music"
            }]  ,
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate odit provident adipisci beatae minima aliquam aspernatur consectetur animi repellat exercitationem quas, in amet consequatur nostrum aliquid quibusdam ullam esse itaque",  
        isfriend:null
    },
    {
        profilepic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displaypic:"https://images.unsplash.com/photo-1512646605205-78422b7c7896?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage:3,
        location:"Goa,India",
        name:"Sarfia",
        age:19,
        interests:[{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"Writing"},
            {
            icon:`<i class=" text-sm ri-music-fill"></i>`,
            interest:"Music"
            }]  ,
        bio:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate odit provident adipisci beatae minima aliquam aspernatur consectetur animi repellat exercitationem quas, in amet consequatur nostrum aliquid quibusdam ullam esse itaque",  
        isfriend:null
    },
];

let curr=0;
let isAnimating =false;
function select(elem){
    return document.querySelector(elem);
}
function setdata(index){
    select(".prflimg img").src=user[index].profilepic;
    select(".badge h5").textContent =user[index].pendingMessage;
    select(".location h3").textContent=user[index].location ;
    select(".name h1:nth-child(1)").textContent=user[index].name;
    select(".name h1:nth-child(2)").textContent=user[index].age;
    let clutter="";
    user[index].interests.forEach(function(interest){
        clutter +=`<div class="tag flex items-center bg-white/30 rounded-full px-3 py-1 gap-3 "> ${interest.icon}
        <h3 class="text-sm  tracking-tighter capitalize">${interest.interest}</h3>
    </div>`
    })
    console.log(clutter)
    select(".tags").innerHTML = clutter;
    document.querySelector(".bio p").textContent = user[index].bio;
    
}

(function selectinitial(){
    select(".maincard img").src =user[curr].displaypic;
    select(".incomingcard img").src=user[curr+1]?.displaypic;
    setdata(curr);
    curr=2;
})();


function imagechange(){
    if(!isAnimating){
        isAnimating=true;
      let t1 = gsap.timeline({
        onComplete:function(){
            isAnimating=false;
            let main=select(".maincard");
            let incoming =select(".incomingcard");

            incoming.classList.remove("z-[2]");
            incoming.classList.add("z-[3]");
            incoming.classList.remove("incomingcard");

            main.classList.remove("z-[3]");
            main.classList.add("z-[2]");
            gsap.set(main,{
                scale:1,
                opacity:1
            })
            //if images comes to an end then we are going to start again with the first image.
            if(curr==user.length)curr=0;
            select(".maincard img").src=user[curr].displaypic;
            curr++;
            main.classList.remove("maincard");
            incoming.classList.add("maincard");
            main.classList.add("incomingcard");
            
        }
      });
      t1.to(".maincard",{
        scale:1.1,
        opacity:0,
        ease:Circ,
        duration:.9},"a")

        .from(".incomingcard",{
            scale:.9,
            opacity:0,
            ease:Circ,
            duration:.9},"a")
}
}
let deny =select(".deny");
let accept =select(".accept"); 


deny.addEventListener("click",()=>{
 imagechange();
 setdata(curr-1);
 gsap.from(".details .element",{
    y:"100%",
    opacity:0,
    stagger:.06,
    ease:Power4.easeInOut,
    duration: 1
})
});

accept.addEventListener("click",()=>{
    imagechange();
    setdata(curr-1);
    gsap.from(".details .element",{
       y:"100%",
       opacity:0,
       stagger:.06,
       ease:Power4.easeInOut,
       duration: 1
   })
   });


(function containerCreator(){
    document.querySelectorAll(".element").forEach(function (element){
       let div= document.createElement("div");
       div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
       div.appendChild(element);
       select(".details").appendChild(div);
    })
})();
