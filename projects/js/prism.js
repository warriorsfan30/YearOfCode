var camera, controls, scene, renderer100
var objects = [];

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 10, -5000);
    camera.position.z = 5000;

    controls = new THREE.TrackballControls(camera);

    scene = new THREE.Scene();

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000, 0.0002);

    var geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
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
    objects.forEach(function(obj) {
        obj.rotation.x += Math.random() * 0.025;
        obj.rotation.y += Math.random() * 0.025;
    });
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    renderer.render(scene, camera);
}
