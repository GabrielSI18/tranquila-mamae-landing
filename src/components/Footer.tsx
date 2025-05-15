
const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary/10 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Mamãe Tranquila</h3>
            <p className="text-muted-foreground max-w-md mb-4">
              Ajudando mães de primeira viagem a vivenciarem a maternidade com mais tranquilidade, confiança e alegria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-foreground hover:bg-primary/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9.3v2.9h2.6c0.2 0 0.3 0.1 0.3 0.3l-0.4 1.9c0 0.1-0.2 0.2-0.3 0.2H14V21h-3v-6.3H9.3c-0.2 0-0.3-0.1-0.3-0.3v-1.9c0-0.2 0.1-0.3 0.3-0.3H11V9c0-1.7 1.3-3 3-3h2.7c0.2 0 0.3 0.1 0.3 0.3v2.4c0 0.2-0.1 0.3-0.3 0.3h-2.4C14.1 9 14 9.1 14 9.3z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-foreground hover:bg-primary/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary-foreground hover:bg-primary/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12001 4 3.40001 4.46C2.92921 4.59318 2.50197 4.84824 2.16131 5.19941C1.82065 5.55057 1.57875 5.98541 1.46001 6.46C1.14522 8.20556 0.991243 9.97631 1.00001 11.75C0.988802 13.537 1.14276 15.3213 1.46001 17.08C1.59097 17.5398 1.83833 17.9581 2.17817 18.2945C2.518 18.6308 2.93883 18.8738 3.40001 19C5.12001 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#beneficios" className="text-muted-foreground hover:text-primary-foreground transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-muted-foreground hover:text-primary-foreground transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">Política de Reembolso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Mamãe Tranquila. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
