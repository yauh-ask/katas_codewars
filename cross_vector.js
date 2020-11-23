function crossProduct (v1, v2) {
  if ( !Array.isArray( v1 ) || 
    !Array.isArray( v2 ) || 
    v1.length !== 3 ||
    v2.length !== 3 ||
    v1.concat( v1 ).some(isNaN) ) {
    
    throw "Arguments are not 3D vectors!";
  }
  
  return [ v1[1]*v2[2] - v1[2]*v2[1], v1[2]*v2[0] - v1[0]*v2[2], v1[0]*v2[1] - v1[1]*v2[0] ];
}
