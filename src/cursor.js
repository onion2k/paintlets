registerPaint('bloom', class {
  static get inputProperties() { return ['--border-outset', '--anim-var']; }

  paint(ctx, geometry, properties) {
    const borderWidth = parseInt(properties.get('--border-outset'));
    const animVar1 = parseInt(properties.get('--anim-var'));
    const animVar2 = parseInt(properties.get('--anim-var')) / 100;

    ctx.clearRect(0, 0, geometry.width, geometry.height);

    const w = geometry.width - borderWidth * 2;
    let x = borderWidth - 5;
    let y = borderWidth - 5;

    switch(Math.floor(animVar2 / 25)) {
      case 0:
        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
        x +=  (w / 2500) * animVar1;
        break;
      case 1:
        ctx.fillStyle = 'rgba(255, 0, 255, 1)';
        x +=  w;
        y +=  (w / 2500) * (animVar1 - 2500);
        break;
      case 2:
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        x +=  (w / 2500) * (2500 - (animVar1 - 5000));
        y +=  w;
        break;
      case 3:
        ctx.fillStyle = 'rgba(0, 255, 0, 1)';
        y +=  (w / 2500) * (2500 - (animVar1 - 7500));
        break;            
    }

    ctx.translate(x, y);
    ctx.fillRect(0, 0, 10, 10);
    ctx.translate(-x, -y);

  }

});
