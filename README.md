# CV Builder

Aplicação pessoal para manter um currículo-base, personalizar versões para vagas e exportar em Word/PDF.

## Tecnologias
- Next.js 15 + React 19 + TypeScript
- Persistência local no navegador (`localStorage`) nesta primeira versão
- Exportação Word com `docx`
- Exportação PDF com `jspdf`
- Ícones `lucide-react`

## Rodar localmente
Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```
Acesse http://localhost:3000.

## Publicar na Vercel
1. Crie um repositório no GitHub e envie os arquivos deste projeto.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Framework Preset: Next.js (detecção automática).
4. Build Command: `npm run build`.
5. Clique em Deploy.

Não são necessárias variáveis de ambiente nesta primeira versão.

## Importante sobre os dados
Esta versão salva o currículo e o histórico no `localStorage` do navegador. Os dados ficam neste navegador/dispositivo e não são sincronizados entre aparelhos. Antes de limpar os dados do navegador, exporte/guarde as informações. O upload da foto também fica salvo localmente no navegador.

## Funcionalidades incluídas
- Dashboard e alternância Dark/Light.
- Cadastro editável de dados, experiências, formação e competências.
- Upload opcional de foto.
- Identificação básica de palavras-chave presentes na descrição da vaga.
- Pré-visualização do currículo.
- Exportação em `.docx` e `.pdf`.
- Histórico local de currículos gerados.

## Próximas melhorias possíveis
- Banco de dados e autenticação.
- Personalização semântica com IA e revisão humana.
- Mais modelos de currículo e opções de layout.
- Melhorias de acessibilidade e testes automatizados.
