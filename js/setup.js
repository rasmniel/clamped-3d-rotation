var renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setClearColor(0xFFFFFF, 0);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight);
camera.position.z = 100;


function render(object) {

    scene.add(object);
    // May call this at any time to render. Should call initially.
    renderer.render(scene, camera);
}
