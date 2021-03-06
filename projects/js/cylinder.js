var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry(200, 200, 800, 48);
var material = new THREE.MeshBasicMaterial({
    color: 0xfffff,
    wireframe: true
});
var cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

camera.position.z = 1000;

function render() {
    requestAnimationFrame(render);
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;
    renderer.render(scene, camera);
};

render();
