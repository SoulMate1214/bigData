try {
    let url = [
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.86",
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.82",
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.83",
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.84",
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.85",
        "http://139.155.88.38:8088/live?app=live&stream=zhimakeji192.168.0.81",
        "http://139.155.88.38:8088/live?app=live&stream=shidaoxinxi192.168.0.81",
        "http://139.155.88.38:8088/live?app=live&stream=shidaoxinxi192.168.0.82",
        "http://139.155.88.38:8088/live?app=live&stream=shidaoxinxi192.168.0.83",
        "http://139.155.88.38:8088/live?app=live&stream=shidaoxinxi192.168.0.84",];
    for (let i=1; i<=10;i++) {
        let videoElement = document.getElementById('video' + i);
        let flvPlayer = flvjs.createPlayer({
            type: 'flv',
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: false,
            url: url[i-1]
        })
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}catch (e) {
    console.log(e)
}
