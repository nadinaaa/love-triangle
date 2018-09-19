/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]) {
  
  preferences.unshift(null);
  pl=preferences.length;
  var kol=0, k,l,m; 
  for(var i=1;i<pl;i++)
  {
    k=preferences[i];
    
    l=preferences[k];
    
    if(k==l || k==null|| l==null) continue;
    m=preferences[l];
    
    if(m==i)
    {
    kol++;
    preferences[i]=null;
    preferences[k]=null;
    preferences[l]==null;
    }
  }
  return kol;
 
};
