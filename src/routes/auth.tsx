// src/auth.ts
export const isAuthenticated = (): boolean => {
    // Verifique se o usuário está autenticado (exemplo: verificação de token)
    // Retorne true se estiver autenticado, caso contrário, false
    const token = localStorage.getItem('token');
    return !!token;
};
