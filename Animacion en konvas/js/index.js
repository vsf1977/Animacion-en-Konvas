var cuadrante = 1;

var stage = new Konva.Stage
({
    container: 'dibujo',   
    width: 556 ,
    height: 316   
  });
  

var layer = new Konva.Layer();

function addStar(layer, stage) {

  var star = new Konva.Star({
      x: Math.random() * stage.getWidth(),
      y: Math.random() * stage.getHeight(),
      numPoints: 5,
      innerRadius: 30,
      outerRadius: 50,
      fill: '#f9f120',
      draggable: true,
  });

  layer.add(star);
  var angularSpeed = 90;
  
  var anim = new Konva.Animation(function(frame) {
      var angleDiff = frame.timeDiff * angularSpeed / 1000;
      star.rotate(angleDiff);
  }, layer);
  
  anim.start();

  var escalar = new Konva.Animation(function(frame) {
    var scale = Math.sin((frame.time * 2 * Math.PI) / 2000) + 0.001;
    // scale x and 2000
    star.scale({ x: scale, y: scale }); 
    }, layer);
  
    escalar.start();
};

for(var n = 0; n < 10; n++) {
  addStar(layer, stage);
}

stage.add(layer);

layer.draw();

  