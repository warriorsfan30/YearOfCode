var camera, controls, scene, renderer;
var objects = [];

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    camera.position.z = 500;

    controls = new THREE.TrackballControls(camera);

    scene = new THREE.Scene();

    var geometry = new THREE.CubeGeometry(100, 100, 100);;
    var material = new THREE.MeshBasicMaterial({
        color: 0x6A50A7,
        wireframe: true
    });

    for (var i = 0; i < 100; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;

        mesh.rotation.x = Math.random();
        mesh.rotation.y = Math.random();
        mesh.rotation.z = Math.random();

        scene.add(mesh);
        objects.push(mesh);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);
}

function animate() {
    objects.forEach(function(obj) {
        obj.rotation.x += .01;
    });
    requestAnimationFrame(animate);
    controls.update();
    render();;
}

function render() {
    renderer.render(scene, camera);
}
