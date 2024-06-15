export const fetchProducts = async (page: number, productsPerPage: number) => {
    const response = await fetch('https://run.mocky.io/v3/f9badcff-487f-47c9-b634-8785727c121f');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const data = await response.json();
    
    if (!Array.isArray(data)) {
      throw new Error('Formato de dados inválido da API');
    }
  
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    return {
      products: data.slice(start, end),
      total: data.length,
    };
  };
  