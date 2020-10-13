registerPaint('bloom', class {
  static get inputProperties() { return ['--border-outset']; }

  paint(ctx, geometry, properties) {
    const borderWidth = parseInt(properties.get('--border-outset')) - 12;

    ctx.fillStyle = 'rgba(255, 0, 255, 1)';

    const x = geometry.width - borderWidth * 2;
    const y = geometry.height - borderWidth * 2;

    ctx.translate(x*0.5 + borderWidth, y*0.5 + borderWidth);
    ctx.rotate(5 * Math.PI / 180);
    ctx.fillRect(-x*0.5, -y*0.5, x, y);
    ctx.rotate(-1 * 5 * Math.PI / 180);
    ctx.translate(-x*0.5 + -borderWidth, -y*0.5 + -borderWidth);

    ctx.clearRect(borderWidth,
                  borderWidth,
                  geometry.width - 2 * borderWidth,
                  geometry.height - 2 * borderWidth);

    ctx.setTransform(1, 0, 0, 1, 0, 0);

  }

});
