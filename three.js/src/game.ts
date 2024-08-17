import * as THREE from "three";
import { camera, renderer, scene, render, animate } from "./init";

renderer.setSize(800, 600);

scene.background = new THREE.TextureLoader().load("/boxes.png");
let gridHelper = new THREE.GridHelper(5, 5);
scene.add(gridHelper);
gridHelper.position.x = 3;
gridHelper.position.y = 0;
gridHelper.rotateY(-0.1);
