import "./style.css";

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(100, 5, 5);

scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff);
pointLight2.position.set(-100, 15, 5);

//scene.add(pointLight2);

renderer.render(scene, camera);

cube.rotateX(90)

const animate = () => {
    requestAnimationFrame(animate);
//    cube.rotation.x += 0.01;
//    cube.rotation.y += 0.01;
//    cube.rotation.z += 0.01;
    pointLight.position.x = Math.sin(Date.now() * 0.001) * 10;
    renderer.render(scene, camera);
};

animate();
