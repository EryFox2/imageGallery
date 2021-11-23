posts = [
    {
        image: 'Image/IMG_0085.JPG',
        caption: 'This is a pink flower.',
        Infomation: 'I took this picture with a friends camera, I really love how the camera focuses on the details of the flower.',
        comments: []
    },
    {
        image: 'Image/IMG_0140.JPG',
        caption: 'This is a feet in the grass.',
        Infomation: 'This idea was suggested by a firend, I really loved how it turned out.',
        comments: []
    },
    {
        image: 'Image/IMG_0108.JPG',
        caption: 'This is a wall.',
        Infomation: 'I love abstruct art, It gives the eyes something unconventional to take in.',
        comments: []
    }
]


counter = -1
maximum = posts.length


const nextbut = document.getElementById('nextbut')
const prevbut = document.getElementById('prebut')
const imageElement = document.getElementById('galleryPic')
const captionElemet = document.getElementById('captxt')
const infoElement = document.getElementById('moreInfo')
const commentButton = document.getElementById('combutt')
const commentInput = document.getElementById('comTxtBox')


nextbut.onclick = goToNext
prevbut.onclick = goToPrev 
commentButton.onclick = commentText


function goToNext(){
   if (counter <= maximum){
        counter++
        readData()
   }
   limitCheck()
}

function goToPrev(){
   if (counter >= 0){
       counter--
       readData()
   }
   limitCheck()
}

function readData(){
    imageElement.src = posts[counter].image
    captionElemet.innerHTML = posts[counter].caption
    infoElement.innerHTML = posts[counter].Infomation
    const commentsStack = posts[counter].comments

   const commentP = document.getElementById('commentParent')

    const commentH = commentsStack.map((item) => {
        return `
                <div style="padding-bottom: 30px;" class="toTheSide">
                    <img class="dp" src='Image/dp6.jpg'"/>
                    <div>
                        <div style="display:flex; flex-direction: row;">
                            <p style="font-weight: bold; padding-right:10px;">Amandla</p> 
                            <p>${item.time}</p>
                        </div>
                        <p>${item.comment}</p>
                    </div>
                </div>
        `
    })

    commentP.innerHTML = commentH.join('')
    
    limitCheck()
}

function limitCheck(){
    nextbut.style.display = 'block'
    prevbut.style.display = 'block'

    if (counter >= maximum - 1){
        nextbut.style.display = 'none'
        prevbut.style.display = 'block'
    }

    else if (counter <= 0){
        nextbut.style.display = 'block'
        prevbut.style.display = 'none'
    }
}




commentInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        commentButton.click();
    }
});


function commentText(){
    let commenttxt = commentInput.value.trim()
    if (!commenttxt){
        alert('please enter a comment')
        return
    }

    const userdate = new Date()
    const usertime =  userdate.getHours() + ':' + userdate.getMinutes()
    userComment = {
        comment : commenttxt,
        time : usertime
    }
    posts[counter].comments.push(userComment)
    commentInput.value = ''
    
    readData()
}


window.onload = goToNext

