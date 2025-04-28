  function toggleSkinOverlay() {
    const skinOverlay = document.getElementById('skinOverlay');
    if (skinOverlay.style.display === 'none' || skinOverlay.style.display === '') {
        skinOverlay.style.display = 'block';
    } else {
        skinOverlay.style.display = 'none';
    }
}

function toggleBoneOverlay() {
    const boneOverlayBottom = document.getElementById('boneBehind');
    const boneOverlayTop = document.getElementById('boneFront');

    const isHidden = (boneBehind.style.display === 'none' || boneFront.style.display === '');

    if (isHidden) {
        boneBehind.style.display = 'block';
        boneFront.style.display = 'block';
    } else {
        boneBehind.style.display = 'none';
        boneFront.style.display = 'none';
    }
}
