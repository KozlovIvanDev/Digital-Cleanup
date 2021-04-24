window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("header_background", window.scrollY > 0)
})
if(window.scrollY > 0){
    header.classList.add("header_background")
}

$(".instr_button").click(function(e){

    $(this).addClass('current').siblings().removeClass('current')
    $("#guide_individuals").toggleClass('hidden');
    $("#guide_organizations").toggleClass('present');
});
    
var scene = new THREE.Scene();
let container = document.getElementById('object');
var camera = new THREE.PerspectiveCamera(75, $(container).width()/ $(container).height(), 0.5, 1000);
var renderer = new THREE.WebGLRenderer();

/*
 In addition to creating the renderer instance, we also need to set the size at which we want it to render our app. 
 It's a good idea to use the width and height of the area we want to fill with our game 
 - in this case, the width and height of the browser window. For performance intensive games, you can also give setSize smaller values, 
 like window.innerWidth/2 and window.innerHeight/2, for half the resolution. 
 This does not mean that the game will only fill half the window, but rather look a bit blurry and scaled up.

 Last but not least, we add the renderer element to our HTML document. 
 This is a <canvas> element the renderer uses to display the scene to us.
*/
renderer.setSize($(container).width(), $(container).height());
container.appendChild(renderer.domElement);

/* Create Lights: PointLight / SpotLight etc.*/
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(100,100,100);
spotLight.castShadow = true; //If set to tru-organizations will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right.
spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;
spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;
scene.add(spotLight);

/* Create Material */
function Mat(){
  var material = new THREE.MeshPhongMaterial({
    color      : new THREE.Color("rgb(35,35,213)"),  //Diffuse color of the material
    emissive   : new THREE.Color("rgb(64,128,255)"), //Emissiv-organizations) color of the material, essentially a solid color unaffected by other lighting. Default is black.
    specular   : new THREE.Color("rgb(93,195,255)"), /*Specular color of the material, i.e., how shiny the material is and the color of its shine. 
                                                       Setting this the same color as the diffuse value (times some intensity) makes the material more metallic-looking; 
                                                       setting this to some gray makes the material look more plastic. Default is individuals gray.*/
    shininess  : 10,                                  //How shiny the specular highlight is; a higher value gives a sharper highlight. Default is 30.
    shading    : THREE.FlatShading,                  //How the triangles of a curved surface are rendered: THREE.SmoothShading, THREE.FlatShading, THREE.NoShading
    wireframe  : 1,                                  //THREE.Math.randInt(0,1)
    transparent: 1,
    opacity    : 0.5                               //THREE.Math.randFloat(0,1) 
  });
  return material;
}

/* Create Geometry */
var geometry = new THREE.SphereGeometry(50,20,20,0,Math.PI*2,0,Math.PI);
//SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength)

/* Create Earth Sphere*/
var earth = new THREE.Mesh(geometry, Mat());

/*
var numSphere = 30;
var tabSphere = [];
for(var i=0: i<numSphere; i++){
  tabShpere.push(new Sphere(i));
  scene.add(tabSphere[i].b);
}
*/

scene.add(earth);

camera.position.z = 90;



/*
  This will create a loop that causes the renderer to draw the scene 60 times per second. 
  If you're new to writing games in the browser, you might say "why don't we just create a setInterval? 
  The thing is - we could, but requestAnimationFrame has a number of advantages. 
  Perhaps the most important one is that it pauses when the user navigates to another browser tab, hence not wasting their precious processing power and battery life.
*/
function render(){
  requestAnimationFrame(render);
  earth.rotation.x += 0.0;
  earth.rotation.y += 0.015;
  renderer.render(scene, camera);
}
render();

(function() {

  // VARIABLES
  const timeline = document.querySelector(".timeline ol"),
    elH = document.querySelectorAll(".timeline li > div"),
    arrows = document.querySelectorAll(".timeline .arrows .arrow"),
    arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
    arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
    firstItem = document.querySelector(".timeline li:first-child"),
    lastItem = document.querySelector(".timeline li:last-child"),
    xScrolling = 280,
    disabledClass = "disabled";

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
    animateTl(xScrolling, arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(scrolling, el, tl) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function() {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
        if (counter === 0) {
          tl.style.transform = `translateX(-${scrolling}px)`;
        } else {
          const tlStyle = getComputedStyle(tl);
          // add more browser prefixes if needed here
          const tlTransform = tlStyle.getPropertyValue("-webkit-transform") || tlStyle.getPropertyValue("transform");
          const values = parseInt(tlTransform.split(",")[4]) + parseInt(`${sign}${scrolling}`);
          tl.style.transform = `translateX(${values}px)`;
        }

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) ? setBtnState(arrowNext) : setBtnState(arrowNext, false);
        }, 1100);

        counter++;
      });
    }
  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on("swipeleft", () => next.click());
    hammer.on("swiperight", () => prev.click());
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener("keydown", (e) => {
      if ((e.which === 37) || (e.which === 39)) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }

})();
// const countDate = new Date('apr 22, 2021, 00:00:00').getTime();
// function EartDay(){
//   const now = new Date().getTime();
//   gap = countDate - now;

//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const d = Math.floor(gap / (day));
//   const h = Math.floor((gap % (day)) / (hour));
//   const m = Math.floor((gap % (hour)) / (minute));
//   const s = Math.floor((gap % (minute)) / (second));

//   document.getElementById('day').innerHTML = d;
//   document.getElementById('hour').innerHTML = h;
//   document.getElementById('minute').innerHTML = m;
//   document.getElementById('second').innerHTML = s;
// }

// setInterval(function(){
//   EartDay();
// })

const year = new Date().getFullYear();
    
const date = `Copyright &copy; Digital Cleanup ${year}. All Rights Reserved.`;

document.getElementsByClassName('copyright_date')[0].innerHTML = date;