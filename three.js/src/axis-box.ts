import * as THREE from "three";
import { camera, renderer, scene, render, animate } from "./init";

let pointer = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let objects: THREE.Mesh[] = [];

let helperBox = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({
		color: 0xff0000,
		opacity: 0.5,
		transparent: true,
	})
);
scene.add(helperBox);

let planes = new THREE.Mesh(
	new THREE.PlaneGeometry(10, 10).rotateX(-Math.PI / 2),
	new THREE.MeshBasicMaterial({ visible: true, color: 0xafafaf })
);

scene.add(planes);
objects.push(planes);

renderer.domElement.addEventListener("mousemove", (event) => {
	pointer.set(
		(event.clientX / window.innerWidth) * 2 - 1,
		-(event.clientY / window.innerHeight) * 2 + 1
	);

	console.log(pointer);

	raycaster.setFromCamera(pointer, camera);

	let intersects = raycaster.intersectObjects(objects, false);

	if (intersects.length > 0) {
		let intersect = intersects[0];

		//let localPointer = intersect.point;
		//localPointer.y = 0.5;

		if (intersect.face) {
			helperBox.position.copy(intersect.point);
			helperBox.position.floor();
			helperBox.position.addScalar(0.5);
		}
	}
});

const map = new THREE.TextureLoader().load("/square-outline-textured.png");
map.colorSpace = THREE.SRGBColorSpace;
let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
let cubeMaterial = new THREE.MeshLambertMaterial({
	color: 0xfeb74c,
	map: map,
});

renderer.domElement.addEventListener("click", (event) => {
	pointer.set(
		(event.clientX / window.innerWidth) * 2 - 1,
		-(event.clientY / window.innerHeight) * 2 + 1
	);

	raycaster.setFromCamera(pointer, camera);

	let intersects = raycaster.intersectObjects(objects, false);

	if (intersects.length > 0) {
		let intersect = intersects[0];

		const voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
		voxel.position.copy(intersect.point);
		voxel.position.floor();
		voxel.position.addScalar(0.5);

		objects.push(voxel);
		scene.add(voxel);
	}
});
