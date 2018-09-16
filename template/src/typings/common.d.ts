declare module '*.css' {
  const styles: {readonly [key: string]: string};
  export = styles;
}

declare module '*.pcss' {
  const styles: {readonly [key: string]: string};
  export = styles;
}

declare module '*.svg' {
  const icon: any;
  export = icon;
}
