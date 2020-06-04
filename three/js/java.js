
<script type="module">

import * as THREE from '../build/three.module.js';
import { OrbitControls } from '../html/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../html/jsm/loaders/GLTFLoader.js';
import { ShadowMapViewer } from '../html/jsm/utils/ShadowMapViewer.js';
import { CSS2DRenderer, CSS2DObject } from '../html/jsm/renderers/CSS2DRenderer.js';
import { GUI } from '../html/jsm/libs/dat.gui.module.js';
import { EffectComposer } from '../html/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../html/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from '../html/jsm/postprocessing/ShaderPass.js';
import { OutlinePass } from '../html/jsm/postprocessing/OutlinePass.js';
import { FXAAShader } from '../html/jsm/shaders/FXAAShader.js';


</script>



var selectedObjects = [];



var params = {

    clearPass: true,
    clearColor: 'white',
    clearAlpha: 1.0,

    texturePass: true,
    texturePassOpacity: 1.0,

    cubeTexturePass: true,
    cubeTexturePassOpacity: 1.0,

    renderPass: true
};

const loadingManager = new THREE.LoadingManager(() => {

    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');

    //optional: remove loader from DOM via event listeneer
    loadingScreen.addEventListener('transitionend', onTransitionEnd);

});


var detector = new MobileDetect(window.navigator.userAgent)
console.log("Mobile: " + detector.mobile());
console.log("Phone: " + detector.phone());
console.log("Tablet: " + detector.tablet());
console.log("OS: " + detector.os());
console.log("userAgent: " + detector.userAgent());

if (detector.mobile() != null) {
    console.log("ESTAS EN MOBILE");
    validaOrientacion();
    $('#tuto').addClass('invisible');
    $('#txtInfo').addClass('invisible');

    $('#instrucciones').addClass('invisible');


    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');


} else {
    console.log("ESTAS EN DESKTOP");
    $('#plantaMobile').addClass('invisible');

    $('#acotaciones').addClass('invisible');



    $('#verticalMobile').addClass('invisible');

    loadModels();
}

$('#exampleModalCenter').on('hidden.bs.modal', function (e) {
    console.log("modal cerrado");

    const myPlayer = videojs("my-video");
    myPlayer.pause();

    //zoom out
    //camera.lookAt(0, 0, 0);
    //camera.getWorldDirection(dir);
    //camera.position.addScaledVector(dir, -speed);
})

$('#modalMobile').on('hidden.bs.modal', function (e) {

    const myPlayer = videojs("my-video2");
    myPlayer.pause();
})






window.addEventListener("orientationchange", function () {
    console.log("the orientation of the device is now " + screen.orientation.angle);
    validaOrientacion();
});

$("#iniciar").click(function () {
    //cierraBienvenida();
    inicialPlay();
});
$("#abrir").click(function () {
    cierraBienvenida();
    //inicialPlay();
});

$('#map1').click(function () {
    abreModalMobile(1);
});
$('#map1a').click(function () {
    abreModalMobile(1);
});

$('#map2').click(function () {
    abreModalMobile(2);
});
$('#map2a').click(function () {
    abreModalMobile(2);
});
$('#map3').click(function () {
    abreModalMobile(3);
});
$('#map3a').click(function () {
    abreModalMobile(3);
});
$('#map4').click(function () {
    abreModalMobile(4);
});
$('#map4a').click(function () {
    abreModalMobile(4);
});
$('#map5').click(function () {
    abreModalMobile(5);
});
$('#map5a').click(function () {
    abreModalMobile(5);
});
$('#map6').click(function () {
    abreModalMobile(6);
});
$('#map6a').click(function () {
    abreModalMobile(6);
});
$('#map7').click(function () {
    abreModalMobile(7);
});
$('#map7a').click(function () {
    abreModalMobile(7);
});
$('#map8').click(function () {
    abreModalMobile(8);
});
$('#map8a').click(function () {
    abreModalMobile(8);
});
$('#map9').click(function () {
    abreModalMobile(9);
});
$('#map9a').click(function () {
    abreModalMobile(9);
});
$('#map10').click(function () {
    abreModalMobile(10);
});
$('#map10a').click(function () {
    abreModalMobile(10);
});
$('#map11').click(function () {
    abreModalMobile(11);
});
$('#map11a').click(function () {
    abreModalMobile(11);
});
$('#map12').click(function () {
    abreModalMobile(12);
});
$('#map12a').click(function () {
    abreModalMobile(12);
});

function abreModalMobile(valor) {

    console.log('MOBILE ' + valor);
    var titulo;

    switch (valor) {

        case 1:
            titulo = "1. Cloración";
            break;

        case "1":
            titulo = "1. Cloración";
            break;

        case 2:
            titulo = "2. Recipiente de agua cruda";
            break;
        case "2":
            titulo = "2. Recipiente de agua cruda";
            break;

        case 3:
            titulo = "3. Turbidex";
            break;

        case "3":
            titulo = "3. Turbidex";
            break;

        case 4:
            titulo = "4. Carbón activado";
            break;
        case "4":
            titulo = "4. Carbón activado";
            break;

        case 5:
            titulo = "5. Suavizador";
            break;
        case "5":
            titulo = "5. Suavizador";
            break;

        case 6:
            titulo = "6. Muestreo";
            break;
        case "6":
            titulo = "6. Muestreo";
            break;

        case 7:
            titulo = "7. Ósmosis inversa";
            break;

        case "7":
            titulo = "7. Ósmosis inversa";
            break;


        case 8:
            titulo = "8. Cisterna de agua potabilizadora";
            break;

        case "8":
            titulo = "8. Cisterna de agua potabilizadora";
            break;

        case 9:
            titulo = "9. Lámpara de luz ultravioleta";
            break;

        case "9":
            titulo = "9. Lámpara de luz ultravioleta";
            break;

        case 10:
            titulo = "10. Generadora de ozono";
            break;
        case "10":
            titulo = "10. Generadora de ozono";
            break;

        case 11:
            titulo = "11. Lavado de garrafones";
            break;

        case "11":
            titulo = "11. Lavado de garrafones";
            break;

        case 12:
            titulo = "12. Llenado de garrafones";
            break;

        case "12":
            titulo = "12. Llenado de garrafones";
            break;
    }

    if (valor != 0) {
        $("#modalMobile").modal();

        $('#modalMobileTitle').text(titulo);

        const video = videojs("my-video2");
        video.src("html/video/" + valor + ".mp4");

        $('#imgZoom').attr("src", "html/img/capturas/" + valor + ".jpg");

        video.src({
            type: 'video/mp4',
            src: "html/video/" + valor + ".mp4"
        });

        const myPlayer = videojs("my-video2");
        myPlayer.play();
    }



}








function validaOrientacion() {

    if (screen.orientation.angle == 0) {
        console.log("portrait es visible");

        $('#verticalMobile').addClass('visible');
        $('#verticalMobile').removeClass('invisible');

    }

    if (screen.orientation.angle == 90) {
        console.log("portrait es invisible");

        $('#verticalMobile').addClass('invisible');
        $('#verticalMobile').removeClass('visible');

    }

}

function cierraBienvenida() {

    $('#welcome').addClass('invisible');
    $('#welcome').removeClass('visible');


}


var gui;
var labelRenderer;
var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 1024;
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var FLOOR = - 250;
var lightShadowMapViewer;
var light;

const dir = new THREE.Vector3();
const speed = 25.0;

var mouse = new THREE.Vector2(), INTERSECTED;

const scene = new THREE.Scene();
const sceneCube = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 10, 20);

const raycaster = new THREE.Raycaster();

var camPosX = 0;
var camPosY = 0;
var camPosZ = 0;

const camVector = new THREE.Vector3();

// Load a Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setClearColor(0x000000, 0.0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
//document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

document.getElementById('canvas1').appendChild(renderer.domElement);

var composer, effectFXAA, outlinePass;

composer = new EffectComposer(renderer);

var renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
composer.addPass(outlinePass);
outlinePass.edgeStrength = 5;
outlinePass.edgeThickness = 1;


effectFXAA = new ShaderPass(FXAAShader);
effectFXAA.uniforms['resolution'].value.set(1 / window.innerWidth, 1 / window.innerHeight);
composer.addPass(effectFXAA);



// Load Light
const ambientLight = new THREE.AmbientLight(0x404040);
//scene.add(ambientLight);

var luz;

const lights = [];
lights[0] = new THREE.DirectionalLight(0x4fd6ff, 1);
lights[0].position.set(1, 2, 0);
lights[1] = new THREE.DirectionalLight(0xffffff, .3);
lights[1].position.set(0, -0.2, 2);
lights[2] = new THREE.DirectionalLight(0xffffff, 2);
lights[2].position.set(-0.75, -1, 0.5);

scene.add(lights[0]);

luz = new THREE.SpotLight(0xffffff, 1);
luz.position.set(0, -1, 3);
//scene.add(luz);

luz.castShadow = true;

scene.add(lights[1]);
scene.add(lights[2]);
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();
const loader = new GLTFLoader();

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);

init();

function init() {
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = 0;
    document.getElementById('labels').appendChild(labelRenderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 1);
    //  horizontally angle control
    controls.minAzimuthAngle = -Math.PI / 14;
    controls.maxAzimuthAngle = Math.PI / 14;

    // vertical angle control
    controls.minPolarAngle = Math.PI / 5;
    controls.maxPolarAngle = Math.PI / 2.3;

    // Enable Damping
    controls.enableDamping = false;
    controls.dampingFactor = 0.9;

    // HorizontalPanning ( 0 ScreenSpacePanning is the default)
    //controls.panningMode = 0;
    controls.enablePan = false;
    //controls.screenSpacePanning = false;

    // How far you can dolly in and out ( PerspectiveCamera only )
    controls.minDistance = 15;
    controls.maxDistance = 25;


    controls.update();

    var geometry = new THREE.PlaneBufferGeometry(100, 100);
    var planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffb851 });

    var ground = new THREE.Mesh(geometry, planeMaterial);

    ground.position.set(0, FLOOR, 0);
    ground.rotation.x = - Math.PI / 2;
    ground.scale.set(100, 100, 100);

    ground.castShadow = false;
    ground.receiveShadow = true;

    scene.add(ground);

    light = new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 5, 0.3);
    light.position.set(0, 100, 0);
    light.target.position.set(0, 0, 0);

    light.castShadow = true;
    light.shadow.camera.near = 1200;
    light.shadow.camera.far = 2500;
    light.shadow.bias = 0.0001;

    light.shadow.mapSize.width = SHADOW_MAP_WIDTH;
    light.shadow.mapSize.height = SHADOW_MAP_HEIGHT;

    scene.add(light);
}



function onTransitionEnd(event) {

    event.target.remove();

}


function loadModels() {

    const loader = new GLTFLoader(loadingManager);
    const onLoad = (gltf, position) => {

        const model = gltf.scene.children[0];

        model.position.copy(position);
        const animation = gltf.animations[0];
        const mixer = new THREE.AnimationMixer(model);
        // mixers.push(mixer);
        // const action = mixer.clipAction(animation);
        //  action.play();

        model.castShadow = false;
        model.receiveShadow = true;
        scene.add(model);

        const dentro = [];

        model.traverse(function (child) {



            if (!child.isMesh) {
                if (child.name != "Null" && child.name)
                    console.log("child.isMesh " + child.name);

                dentro.push(child);

            }

        });

        etiqueta();

        console.log(dentro.length);

        function etiqueta() {

            for (paso = 1; paso < dentro.length - 1; paso++) {
                var earthDiv;
                var earthLabel;
                var paso;

                var idNombre = paso;
                console.log("label " + paso + " " + dentro[paso].userData.name);



                //earthDiv.className = dentro[paso].userData.name;
                earthDiv = document.createElement('kbd');
                //earthDiv.textContent = dentro[paso].userData.name;

                earthDiv.textContent = idNombre;
                earthDiv.style.marginTop = '-1em';
                earthLabel = new CSS2DObject(earthDiv);
                earthLabel.position.set(0, .6, 0);
                dentro[paso].add(earthLabel);
                $(earthDiv).attr('id', idNombre);

            };

        }


        function onTouchMove(event) {

            var x, y;

            if (event.changedTouches) {

                x = event.changedTouches[0].pageX;
                y = event.changedTouches[0].pageY;

            } else {

                x = event.clientX;
                y = event.clientY;

            }

            mouse.x = (x / window.innerWidth) * 2 - 1;
            mouse.y = - (y / window.innerHeight) * 2 + 1;

            checkIntersection();

        }


        function addSelectedObject(object) {

            selectedObjects = [];
            selectedObjects.push(object);




            var idNombre = selectedObjects[0].parent.userData.name;

            if (idNombre != undefined) {

                idNombre = '#' + selectedObjects[0].parent.userData.name.charAt(0) + selectedObjects[0].parent.userData.name.charAt(5);

                $('#2c').addClass('invisible');

            }


            // $("#"+selectedObjects[0].parent.userData.name).addClass("visible");





        }


        function checkIntersection() {

            raycaster.setFromCamera(mouse, camera);

            var intersects = raycaster.intersectObjects([scene], true);

            if (intersects.length > 0) {


                var selectedObject = intersects[0].object;





                var str_pos = selectedObject.name.indexOf("0");





                if (selectedObject.name == 0) {




                } else {
                    $('kbd').remove();

                    addSelectedObject(selectedObject);

                    outlinePass.selectedObjects = selectedObjects;

                    $('#txtInfo').text(selectedObject.parent.userData.name);

                    // outlinePass.selectedObjects = [];

                    //$("." + selectedObject.name).remove();




                }



            }

        }


        function clicked(event) {

            if (detector.mobile() != null) {
                console.log("ESTAS EN MOBILE");
                mouse.x = +(event.targetTouches[0].pageX / window.innerWidth) * 2 + -1;
                mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
            } else {
                console.log("ESTAS EN DESKTOP");
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;








                raycaster.setFromCamera(mouse, camera);

                const arreglo = [];

                const intersects = raycaster.intersectObject(model, true);

                //console.log("intersects = "+ intersects);


                console.log("El nombre se llama: " + intersects[0].object.position.x);

                if (intersects[0].object.userData.name != 0) {

                    const posClick = new THREE.Vector3();
                    //const objeto = new THREE.object();

                    //scene.updateMatrixWorld();
                    //model.updateMatrixWorld();

                    camPosX = intersects[0].object.position.x;
                    camPosY = intersects[0].object.position.y;
                    camPosZ = intersects[0].object.position.z;

                    //(intersects[0].object).getWorldPosition(camVector.position);


                    //scene.updateMatrixWorld();

                    //camVector.setFromMatrixPosition ((intersects[0].object).matrixWorld.position);

                    //camVector = intersects[0].object.matrixWorld;

                    intersects[0].object.updateMatrixWorld();

                    intersects[0].object.parent.children[0].getWorldPosition(camVector);



                    console.log("camVector = " + camVector.x)

                    //console.log(" CAMARA ESTA EN "+ camPosX + " "+camPosY+" "+camPosZ );

                    //camera.position.set(camVector.x+.5, camVector.y, camVector.z+6); // Set position like this
                    //camera.lookAt(new THREE.Vector3(camVector.x, camVector.y, camVector.z-6)); // Set look at coordinate like this
                }


                // posClick.setFromMatrixPosition(intersects[0].object.matrixWorld);}

                if (intersects[0].object.name != 0) {

                    console.log("abreModalMObile " + intersects[0].object.name);

                    abreModalMobile(intersects[0].object.name);

                }


                console.log("abreModalMObile " + intersects[0].object.name);

                abreModalMobile(intersects[0].object.name);




            }

        }

        window.addEventListener('mousemove', onTouchMove);
        window.addEventListener('touchmove', onTouchMove);

        if (detector.mobile() != null) {
            console.log("ESTAS EN MOBILE");
            renderer.domElement.addEventListener('touchstart', function (event) {
                // find intersections
                clicked(event);
                camera.updateMatrixWorld();
            });
        } else {
            console.log("ESTAS EN DESKTOP");
            renderer.domElement.addEventListener('dblclick', function (event) {
                // find intersections
                clicked(event);
                camera.updateMatrixWorld();
            });
        }








    };


    const onProgress = () => { };


    const onError = (errorMessage) => {
        console.log(errorMessage);
    };


    const demoroomPosition = new THREE.Vector3(0, 0, 0);
    loader.load('html/models/demoRoom3.gltf', gltf => onLoad(gltf, demoroomPosition), onProgress, onError);



}

createHUD();

function createHUD() {

    lightShadowMapViewer = new ShadowMapViewer(light);
    lightShadowMapViewer.position.x = 10;
    lightShadowMapViewer.position.y = SCREEN_HEIGHT - (SHADOW_MAP_HEIGHT / 4) - 10;
    lightShadowMapViewer.size.width = SHADOW_MAP_WIDTH / 4;
    lightShadowMapViewer.size.height = SHADOW_MAP_HEIGHT / 4;
    lightShadowMapViewer.update();

}


function render() {

    labelRenderer.render(scene, camera);

    renderer.toneMappingExposure = 0.65;




    renderer.render(scene, camera);
    composer.render();

    requestAnimationFrame(render);



}

window.requestAnimationFrame(render);


window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseMove(event) {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;


}



function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
}

function onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}


//inicialPlay();


function inicialPlay() {

    $("#exampleModalCenter").modal();



    $('#exampleModalLongTitle').text("Mantenimiento");


    const myPlayer = videojs("my-video");
    myPlayer.play();


}

imageMapResize();


     