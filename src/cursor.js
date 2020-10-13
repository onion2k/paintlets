registerPaint('bloom', class {
  static get inputProperties() { return ['--border-outset', '--anim-var']; }

  paint(ctx, geometry, properties) {

    const borderWidth = parseInt(properties.get('--border-outset'));
    const animVar1 = parseInt(properties.get('--anim-var'));
    const animVar2 = parseInt(properties.get('--anim-var')) / 100;

    ctx.clearRect(0, 0, geometry.width, geometry.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';

    // const total = geometry.width * 2 + geometry.height * 2;

    const dims = [8,8];

    const w = geometry.width - borderWidth * 2;
    const h = geometry.height - borderWidth * 2;

    let x = borderWidth - dims[0] * 0.5;
    let y = borderWidth - dims[1] * 0.5;

    switch(Math.floor(animVar2 / 25)) {
      case 0:
        x +=  (w / 2500) * animVar1;
        break;
      case 1:
        x +=  w;
        y +=  (h / 2500) * (animVar1 - 2500);
        break;
      case 2:
        x +=  (w / 2500) * (2500 - (animVar1 - 5000));
        y +=  w;
        break;
      case 3:
        y +=  (h / 2500) * (2500 - (animVar1 - 7500));
        break;            
    }

    ctx.translate(x, y);
    ctx.fillRect(0, 0, dims[0], dims[1]);
    ctx.translate(-x, -y);

  }

});
