registerPaint('bloom', class {
  static get inputProperties() { return ['--border-outset', '--anim-var']; }

  paint(ctx, geometry, properties) {

    const borderWidth = parseInt(properties.get('--border-outset'));
    const animVar = parseInt(properties.get('--anim-var')) / 100;

    ctx.fillStyle = 'rgba(255, 0, 255, 1)';

    ctx.translate(25, 25);
    ctx.rotate(animVar * Math.PI / 180);
    ctx.fillRect(-25, -25, borderWidth, borderWidth);
    ctx.rotate(-1 * animVar * Math.PI / 180);
    ctx.translate(-25, -25);

    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.fillRect(borderWidth,
                  borderWidth,
                  geometry.width - 2 * borderWidth,
                  geometry.height - 2 * borderWidth);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

});
