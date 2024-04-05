// ProductService.js

export const ProductService = {
    getProductsSmall: async () => {
      try {
        const response = await fetch('/components/themen.json');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Fehler beim Laden der Daten:', error);
        return [];
      }
    },
  };
  