var animation = bodymovin.loadAnimation({
    container: document.getElementById('nerve-layers'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
  })