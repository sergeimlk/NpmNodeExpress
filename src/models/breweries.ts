export interface Brewery {
    id: number; // Ou string si vous utilisez des UUID
    name: string;
    location: string;
    established?: string | number; // Optionnel, année d'établissement
    website?: string;  // Optionnel
    // ...autres propriétés selon vos besoins
  }