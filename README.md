# GS Estética Avançada — Gabrielly Sampaio

Site institucional e editorial de alto padrão para a **GS Estética Avançada**, desenvolvido com identidade visual refinada, foco em UX/UI de luxo e total respeito às diretrizes éticas e de conformidade da clínica.

---

## 🎨 Identidade & Direção Visual

- **Paleta de Cores de Luxo**:
  - Marfim (`#FAF7F3`)
  - Branco Quente (`#FFFCF9`)
  - Rosa Nude (`#EAD7D3`)
  - Malva Suave (`#C6AAB9`)
  - Dourado Discreto (`#B69A60`)
  - Grafite (`#292625`)
- **Tipografia Editorial**:
  - *Cormorant Garamond*: Títulos editoriais refinados e elegantes.
  - *Inter* & *Manrope*: Textos de apoio, clareza funcional e botões modernos.
- **Microinterações**: Transições suaves, sombras sutis, lightbox de alta definição e accordions acessíveis.

---

## 🚀 Como Executar Localmente

Como o projeto é construído em arquitetura estática pura e moderna (Zero-Config), você pode executá-lo com qualquer servidor local:

### Opção 1: Abrir diretamente no Navegador
Basta dar um duplo clique no arquivo:
```
index.html
```

### Opção 2: Com VS Code (Live Server)
1. Abra a pasta `clinica 4` no Visual Studio Code.
2. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.

### Opção 3: Via Terminal (Node / Python)
```bash
# Com npx serve:
npx serve .

# Ou com Python 3:
python -m http.server 3000
```
Em seguida, acesse no navegador: `http://localhost:3000`

---

## ⚙️ Arquivo de Configuração Central

Todas as informações da clínica, status de confirmação e tratamentos estão centralizados em:
```
src/config/business.ts
```

Neste arquivo você pode alterar facilmente:
- Nome da clínica e da profissional
- Número oficial do WhatsApp
- Endereço físico e link do Google Maps
- Horários de funcionamento
- Lista de tratamentos e descrições

> **Nota de Integridade:** As informações de WhatsApp, endereço e horário físico estão intencionalmente sinalizadas como `"pending"` na interface, apresentando avisos educados de que serão liberados em breve, sem exibir mapas fictícios ou links quebrados.

---

## 📋 Informações Pendentes para Finalizar a Publicação

Para colocar o site em produção definitiva com 100% dos dados completos, basta fornecer:

1. **WhatsApp Oficial**: Número com DDD para habilitar o link direto `https://wa.me/55...`.
2. **Endereço Completo**: Rua, número, bairro, cidade, CEP e link oficial do Google Maps.
3. **Horários de Funcionamento**: Dias de atendimento e faixa de horários (ou indicação formal de plantão de atendimento).
4. **Logomarca Definitiva (Opcional)**: Caso possua o arquivo vetorial `.svg` da logo oficial da clínica, basta substituir `public/images/logo.svg`.
