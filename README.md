# VivendoDeSure - Landing Page

Landing Page de alta conversão para a comunidade VivendoDeSure, focada em arbitragem esportiva (Surebets), bugs e métodos matemáticos.

## Estrutura do Projeto

```
LP-VivendoDeSure/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos (Design System Dark + Roxo Neon)
├── js/
│   └── main.js             # Interações (FAQ, Carrossel, Animações)
├── assets/
│   └── images/             # Imagens (logo, fotos, prints)
└── README.md               # Este arquivo
```

## Como Usar

### 1. Adicionar as Imagens

Coloque suas imagens na pasta `assets/images/`:

| Arquivo | Descrição |
|---------|-----------|
| `logo.png` | Logo da VivendoDeSure |
| `vini.jpg` | Foto do mentor Vini |
| `resultado-1.jpg` até `resultado-6.jpg` | Prints de resultados/saques |
| `og-image.jpg` | Imagem para compartilhamento (1200x630px recomendado) |

### 2. Configurar o Link do Botão CTA

Abra o `index.html` e substitua os `href="#"` dos botões CTA pelo link de checkout:

```html
<!-- Localizar e substituir -->
<a href="#" class="btn btn-primary btn-glow btn-large">

<!-- Por exemplo, para Hotmart -->
<a href="https://pay.hotmart.com/SEU_PRODUTO" class="btn btn-primary btn-glow btn-large">
```

### 3. Configurar Redes Sociais

No footer, atualize os links das redes sociais:

```html
<a href="https://instagram.com/SEU_USUARIO" class="social-link">
<a href="https://wa.me/5511999999999" class="social-link">
```

### 4. Atualizar os Prints de Resultados

No `index.html`, localize a seção de resultados e substitua os placeholders:

```html
<!-- De -->
<div class="result-placeholder">...</div>

<!-- Para -->
<img src="assets/images/resultado-1.jpg" alt="Resultado de saque">
```

### 5. Atualizar a Foto do Mentor

Localize a seção do mentor e substitua:

```html
<!-- De -->
<div class="mentor-photo-placeholder">...</div>

<!-- Para -->
<img src="assets/images/vini.jpg" alt="Vini - Fundador VivendoDeSure">
```

## Hospedagem

### Opção 1: Netlify (Recomendado)
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto para o deploy
3. Pronto! Seu site estará online

### Opção 2: Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Importe o repositório ou faça upload
3. Deploy automático

### Opção 3: GitHub Pages
1. Faça push para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch principal

### Opção 4: Hostinger/Hostgator
1. Acesse o painel de controle
2. Faça upload dos arquivos via File Manager ou FTP
3. Certifique-se que `index.html` está na raiz

## Personalização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;           /* Fundo principal */
    --accent-primary: #9D00FF;        /* Roxo neon */
    --accent-secondary: #B44DFF;      /* Roxo hover */
}
```

### Fontes

As fontes são carregadas do Google Fonts:
- **Outfit** - Textos gerais
- **Space Grotesk** - Títulos e destaques

Para alterar, edite o link no `<head>` do `index.html`.

### Preço

Localize a seção de preço no `index.html`:

```html
<span class="price-old">De R$ 247,00</span>
<span class="price-amount">187</span>
<span class="price-cents">,90</span>
```

## Funcionalidades

- **FAQ Acordeão**: Clique nas perguntas para expandir/recolher
- **Carrossel**: Navegue pelos prints com as setas ou arraste
- **Animações Scroll**: Elementos aparecem suavemente ao rolar
- **Parallax Hero**: Efeito de profundidade no background
- **Responsivo**: Adaptado para todos os dispositivos

## Suporte

Para dúvidas ou suporte, entre em contato através das redes sociais da VivendoDeSure.

---

Copyright © 2026 VivendoDeSure. Todos os direitos reservados.

