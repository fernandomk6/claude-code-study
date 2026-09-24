# CLAUDE.md

Este arquivo fornece orientações ao Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## O que é este projeto

`projeto-1` é um projeto de prática independente do curso "Claude Code do Zero ao avançado, MCP, Skills, hooks, Rules". Ele contém um único arquivo estático `index.html` — sem framework, sem gerenciador de pacotes, sem etapa de build.

## Comandos

Não há ferramentas de build, lint ou testes. Para visualizar alterações, abra o `index.html` diretamente no navegador (ex.: `start index.html` no Windows).

## Arquitetura

- Arquivo único e autocontido: `index.html` embute todo o CSS e JS (sem folhas de estilo/scripts externos além do link do Google Fonts para o IBM Plex Mono).
- Estilizado com uma estética de terminal/CLI: tema escuro por padrão com uma variante `[data-theme="light"]`, alternada por um script que lê o `localStorage` e recorre à media query `prefers-color-scheme` como fallback.
- Todas as cores do tema são definidas como custom properties CSS em `:root`/`[data-theme="dark"]` e sobrescritas em `[data-theme="light"]` — adicione novas cores lá em vez de fixar valores diretamente nas regras dos componentes.
