var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(15.2, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshBasicMaterial({
    color: 0xfffff,
    wireframe: true
});

var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 10;
var render = function () {
    requestAnimationFrame(render);
    sphere.rotation.y += 0.015;
    renderer.render(scene, camera);
};

render();
