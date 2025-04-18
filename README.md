# Projeto de Exercícios: Cálculos de Aluguel de Carros e Reajuste Salarial

Este repositório contém soluções para dois exercícios de programação que envolvem cálculos com condicionais e operações matemáticas.

## Exercício 1: Sistema de Cobrança para Aluguel de Carros

### Descrição
Programa que calcula o valor a ser pago pelo aluguel de um carro com base nos seguintes critérios:
- Carros populares: R$90 por dia
  - Até 100Km percorridos: R$0,20 por Km
  - Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo: R$150 por dia
  - Até 200Km percorridos: R$0,30 por Km
  - Acima de 200Km percorridos: R$0,25 por Km

### Funcionalidades
- Leitura do tipo de carro alugado (popular ou luxo)
- Cálculo de dias de aluguel
- Contabilização de quilômetros percorridos
- Cálculo do valor final a ser pago

## Exercício 2: Sistema de Reajuste Salarial

### Descrição
Programa que calcula o reajuste salarial de funcionários com base em:
- Gênero do funcionário
- Tempo de empresa
- Salário atual

### Tabela de Reajustes
**Mulheres:**
- menos de 5 anos de empresa: +4%
- de 5 a 10 anos de empresa: +7%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%

**Homens:**
- menos de 5 anos de empresa: +3%
- de 5 a 15 anos de empresa: +8%
- de 20 até 30 anos de empresa: +14%
- mais de 30 anos de empresa: +25%

### Funcionalidades
- Leitura do salário atual
- Identificação do gênero do funcionário
- Verificação do tempo de serviço na empresa
- Cálculo e exibição do novo salário com reajuste

## Ferramentas Utilizadas

- **Flowgorithm**: Para criação e visualização dos fluxogramas lógicos
- **Visual Studio Code**: Como ambiente de desenvolvimento
- **Git e GitHub**: Para controle de versão e hospedagem do código

## Como Executar

1. Clone este repositório
2. Abra os arquivos de código em seu ambiente de desenvolvimento
3. Execute os programas conforme as instruções específicas de cada arquivo

## Estrutura do Repositório

```
├── aluguel-carros/
│   ├── aluguel.js
│   ├── index.html
├────── fluxogramas/
│       └── fluxograma-aluguel.fprg
├── reajuste-salarial/
│   ├── reajuste.js
│   ├── index.html
├────── fluxogramas/
│       └── fluxograma-reajuste.fprg
└── README.md
```

