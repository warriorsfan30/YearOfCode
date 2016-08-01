var randomColor = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
};

var camera, controls, scene, renderer;
var objects = [];

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
    camera.position.z = 5000;

    controls = new THREE.TrackballControls(camera);

    scene = new THREE.Scene();
    
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000, 0.0002);

    var geometry = new THREE.CubeGeometry(100, 100, 100);

    for (var i = 0; i < 10000; i++) {
        var material = new THREE.MeshBasicMaterial({
            color: randomColor(),
            wireframe: false
        });
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
    requestAnimationFrame(animate);
    controls.update();
    render();;
}

function render() {
    renderer.render(scene, camera);
}
