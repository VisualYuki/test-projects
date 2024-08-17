let l1_vec1 = new THREE.Vector3(0, 0, 0);
let l1_vec2 = new THREE.Vector3(0, 5, -7);

let line1 = new THREE.Line(
	new THREE.BufferGeometry().setFromPoints([l1_vec1, l1_vec2]),
	new THREE.LineBasicMaterial({ color: 0x00fff0 })
);

scene.add(line1);

let l2_vec1 = new THREE.Vector3(0, 0, 1);
let l2_vec2 = new THREE.Vector3(0, 5, 6);

let line2 = new THREE.Line(
	new THREE.BufferGeometry().setFromPoints([l2_vec1, l2_vec2]),
	new THREE.LineBasicMaterial({ color: 0x00ffb0 })
);

scene.add(line2);

debugger;
//let new_line = ;
line2.position.add(line1.position);
debugger;
//scene.add(line2);
