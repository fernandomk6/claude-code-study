---
description: Cria um commit semântico baseado nas mudanças atuais
allowed-tools: Bash(git *)
---

# Criar Commit Semântico

Analise as mudanças staged com `git diff --staged` e crie um commit seguindo
conventional Commits.

## Regras
- Prefixo: feat fix chore docs refactor test style
- Formato: tipo(escopo): descricao curta em ingles
- Maximo de 72 caracteres na primeira linha
- Se tiver argumento ($ARGUMENTS), use como contexto extra

## O que fazer
1. Rode git status para ver o estado atual
2. Rode git diff -staged para ver o que está estaged
3. Se não houver nada staged, rode git add -A primeiro e confirme com o usuário
4. Crie a mensagem de commit ideal
5. Execute git commit -m "mensagem"

Contexto adicional do usuário: $ARGUMENTS
