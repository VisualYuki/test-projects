import "./style.css";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

// INIT

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x000);
//scene.add(new THREE.GridHelper(10, 10));
scene.add(new THREE.AxesHelper(100));

let camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	1,
	10000
);

camera.position.z = 3;
//camera.position.set(5, 20, 15);
//camera.lookAt(0, 0, 0);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.appendChild(renderer.domElement);

//  ORBIT CONTROL
let controls: OrbitControls;
controls = new OrbitControls(camera, renderer.domElement);
function animate() {
	requestAnimationFrame(animate);
	render();
}

animate();

function render() {
	renderer.render(scene, camera);
}

const ambientLight = new THREE.AmbientLight(0x606060, 3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(1, 0.75, 0.5).normalize();
scene.add(directionalLight);

render();

export { renderer, scene, camera, render, animate };
