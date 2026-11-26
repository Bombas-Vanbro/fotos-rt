# Fotos RT · Vanbro

App do celular para fotografar as bombas com o **nº do RT** (orçamento): cada foto vai com a parte (elétrico ou mecânico) e uma legenda opcional para a pasta **Fotos RT** do Google Drive da Assistência Técnica. A ferramenta **Laudo Técnico** (repositório privado `Bombas-Vanbro/laudo-tecnico`) puxa essas fotos para o laudo quando o PDF do RT é lido, e depois de 15 dias as transfere para o arquivo na rede.

**Abrir / instalar:** https://bombas-vanbro.github.io/fotos-rt/ no Chrome do celular › menu ⋮ › **Instalar app**. Na 1ª vez o app pede a **chave de acesso** (peça a quem administra). Funciona sem internet: as fotos ficam guardadas e sobem quando a conexão voltar.

## O que tem aqui

Só a tela do app e o ícone, **sem dados**: nenhuma foto, cliente ou chave fica neste repositório. As fotos vão direto do celular para o Google Apps Script da Vanbro (endereço em `config.js`), que recusa qualquer pedido sem a chave.

| Arquivo | O que é |
|---|---|
| `index.html` | Tela do app (câmera, nº do RT, histórico de 15 dias, fila sem internet) |
| `config.js` | Endereço do Apps Script (`/exec`) |
| `sw.js` | Guarda a tela no celular para abrir sem internet |
| `manifest.webmanifest`, `icone-*.png`, `apple-touch-icon.png` | Instalação como app e ícones |

## Não edite aqui

Estes arquivos são **gerados** no repositório `laudo-tecnico` (`celular/fotos-rt.html` + `pwa/`, montados por `tools\build-pwa.ps1`) e copiados para cá. Alterações feitas direto aqui se perdem na próxima publicação.

Publicação: GitHub Pages, branch `main`, pasta raiz.
