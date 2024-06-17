export interface ApiData {
  products: Product[];
  total: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  oldPrice?: number | null;
}
export const fetchProducts = async (page: number, productsPerPage: number): Promise<ApiData> => {
  const response = await fetch(`https://run.mocky.io/v3/f9badcff-487f-47c9-b634-8785727c121f`);
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error('Formato de dados inválido da API');
  }

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const slicedData = data.slice(startIndex, endIndex);

  return {
    products: slicedData,
    total: data.length,
  };
};

