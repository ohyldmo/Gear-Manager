import React from 'react';

interface GearItem {
    name: string, 
    category: string,
    storageLocation: string, 
    packedLocation: string, 
    isPacked: boolean, 
    weight: number,
    tags: string[],
    notes: string[], 
    needsReview: boolean
  }

  export {GearItem}