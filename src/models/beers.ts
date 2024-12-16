export interface Beer {
    id: number; // Ou string si vous utilisez des UUID par exemple
    name: string;
    brewery: string; // Ou un objet Brewery si vous avez un modèle Brewery
    style: string;
    abv: number;
    ibu?: number; // Optionnel
    description?: string; // Optionnel
    imageUrl?: string; // Optionnel
    // ...autres propriétés selon vos besoins
  }