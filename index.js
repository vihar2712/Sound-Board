const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.addEventListener('click',()=>{
        stopSongs();
        document.getElementById(sound).play();
    })
    btn.innerHTML = sound;
    document.getElementById('buttons').appendChild(btn);
})

function stopSongs(){
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime=0;
    })
}