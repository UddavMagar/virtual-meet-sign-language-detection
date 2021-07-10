const runCoco = async () => {
  // 3. TODO - Load network 
  const net = await tf.loadGraphModel('https://livelong.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json')
  console.log('hello')

  detect(net);
  
};

function detect (net) {
  const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
  
  host: '/',
  port: '3001'
})
let myVideoStream;
const myVideo = document.createElement('video')
myVideo.muted = true;
const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })
  // input value
  let text = $("input");
  // when press enter send message
  $('html').keydown(function (e) {
    if (e.which == 13 && text.val().length !== 0) {
      socket.emit('message', text.val());
      text.val('')
    }
  });
  socket.on("createMessage", message => {
    $("ul").append(`<li class="message"><b>user</b><br/>${message}</li>`);
    scrollToBottom()
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
    setInterval(async() => {
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded);
      
      const boxes = await obj[4].array()
      const classes = await obj[5].array()
      const scores = await obj[6].array()
      boxs = boxes[0]
      classs = classes[0]
      scoress = scores[0]
      const labelMap = {
        1:{name:'ThumbsUp', color:'red'},
        2:{name:'ThumbsDown', color:'yellow'},
        3:{name:'ThankYou', color:'lime'},
        4:{name:'LiveLong', color:'blue'},
      }
      
      for(let i=0; i<=boxs.length; i++){
        
        if(boxs[i] && classs[i] && scoress[i]>0.9){
            const [y,x,height,width] = boxs[i]
            const text = classs[i]
            label = labelMap[text]['name']
            document.getElementById("label").innerHTML = label;


        }
    }
        tf.dispose(img)
        tf.dispose(resized)
        tf.dispose(casted)
        tf.dispose(expanded)
        tf.dispose(obj)
    }, 20);
  })
  videoGrid.append(video);
}

function endcalls(){
  var answer = window.confirm("Do you want to end call?");
if (answer) {
   //window.location.href =
   location.replace("http://localhost:3030/");
}
else {
    
}
}



const scrollToBottom = () => {
  var d = $('.main__chat_window');
  d.scrollTop(d.prop("scrollHeight"));
}


const muteButton = document.querySelector("#muteButton");
const stopVideo = document.querySelector("#stopVideo");
muteButton.addEventListener("click", () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    html = `<i class="unmute fas fa-microphone-slash"></i>
     <span>Unmute</span>`;
   
    muteButton.innerHTML = html;
  } else {
    myVideoStream.getAudioTracks()[0].enabled = true;
    html = `<i class=" fas fa-microphone"></i>
     <span>Mute</span>`;
    
    muteButton.innerHTML = html;
  }
});

stopVideo.addEventListener("click", () => {
const enabled = myVideoStream.getVideoTracks()[0].enabled;
if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    html = `<i class="stop fas fa-video-slash"></i>
    <span>Video On</span>`;
    
    stopVideo.innerHTML = html;
  } else {
    myVideoStream.getVideoTracks()[0].enabled = true;
    html = `<i class=" fas fa-video"></i>
     <span>Video Off</span>`;
    
    stopVideo.innerHTML = html;
  }
});

const bend = document.querySelector('.main__endcall_button');
bend.addEventListener('click', function(){

    endcalls();
    
})


};




runCoco();



