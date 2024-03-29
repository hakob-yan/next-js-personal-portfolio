export interface IParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  initialX: number;
  initialY: number;
  allowedRadius: number;
  newDirection: boolean;
  featurePath: {
    dictance: number;
    finalX: number;
    finalY: number;
  };

  update: (mouse: IMouse) => void;
  draw: () => void;
}

export interface ILine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  allowedDistance: number;
  update: (key: string, x: number, y: number, mouse: IMouse) => void;
  draw: () => void;
}

export interface IParticles {
  [key: string]: IParticle;
}
export interface ILines {
  [key: string]: ILine[];
}

export interface IAnimate {
  start: () => void;
  end: () => void;
}
export interface IGet {
  createRandomParticle: (padding: number) => IParticle;
  createLine: (x1: number, y1: number, x2: number, y2: number) => ILine;
}

export interface IFeaturePath {
  speedX: number;
  speedY: number;
  initialX: number;
  initialY: number;
  allowedRadius: number;
  x: number;
  y: number;
}

export interface IMouse {
  x: undefined | number;
  y: undefined | number;
  radius: number;
}
