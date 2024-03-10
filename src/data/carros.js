// Função para obter os carros armazenados no localStorage
export const getCarros = () => {
    const carros = localStorage.getItem('carros');
    return carros ? JSON.parse(carros) : [];
};

// Função para definir os carros no localStorage
export const setCarros = (carros) => {
    localStorage.setItem('carros', JSON.stringify(carros));
};

