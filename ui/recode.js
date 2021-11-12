let file = document.querySelector('#files');
let form =document.getElementById("code")
const videoUploads =[]

if(form){
form.addEventListener('submit',(e)=>{
    e.preventDefault();
window.location.href = 'http://127.0.0.1:5500/ui/student.html'

})

 
file.addEventListener('change',(e)=>{
     console.log(e, '----------')
     let videoFile = e.target.files[0];
     let blobURL = URL.createObjectURL(videoFile);
     const videoObj ={
        src: blobURL,
        name
     }
     videoUploads.push(videoObj);

     console.log(blobURL)
     localStorage.setItem('videoUploads', JSON.stringify(videoUploads))
 })
}
 const uploads = document.querySelector('#view');
 const videos = JSON.parse(localStorage.getItem('videoUploads'))||[];
 console.log('videos---', videos)
 if(uploads){
 videos.forEach(video => {
 uploads.innerHTML+=`
 <div class="box">
 <h3>${video.name}</h3>
 <video width="250" height="300" src=${video.src} controls></video>
 </div>
 `
});
 }
