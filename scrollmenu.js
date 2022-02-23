
gsap.registerPlugin(Draggable);
    



Draggable.create(".box", {
  type:"x,y", 
  edgeResistance:0.65, 
  bounds:"#container", 
  // inertia:true
});

