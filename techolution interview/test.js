function deepequal(obj1, obj2){
    if (obj1 ===obj2)return true;
      if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
    }
    
}