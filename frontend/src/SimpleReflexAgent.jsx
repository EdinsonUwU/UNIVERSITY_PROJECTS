import React, { useRef, useEffect } from "react";
import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 'black',
  });

export function SimpleReflexAgent() {
  const ref = useRef(null);
  const gr  = new PIXI.Graphics();
  gr.beginFill(0xffffff);
  gr.drawCircle(30, 30, 30);
  gr.endFill();
  app.stage.addChild(gr)
  

  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);
 
  return <div ref={ref} />;
}