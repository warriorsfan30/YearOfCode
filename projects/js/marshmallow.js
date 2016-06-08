var camera, controls, scene, renderer100
var objects = [];

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    camera.position.z = 500;

    controls = new THREE.TrackballControls(camera);

    scene = new THREE.Scene();

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000, 0.0002);

    var geometry = new THREE.CylinderGeometry(50, 50, 100, 48);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: false
    });

    for (var i = 0; i < 200; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 1000;
        mesh.position.y = (Math.random() - 0.5) * 1000;
        mesh.position.z = (Math.random() - 0.5) * 1000;

        mesh.rotation.x = Math.random();
        mesh.rotation.y = Math.random();
        mesh.rotation.z = Math.random();

        scene.add(mesh);
        objects.push(mesh);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(scene.fog.color);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    renderer.render(scene, camera);
}
