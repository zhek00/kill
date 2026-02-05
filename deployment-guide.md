# Guia de Configuração de Subdomínio (Ingressos Sul & Serra)

Este guia orienta como configurar o subdomínio `ingressos.suiserra.com.br` (ou `suleserra.com.br` - verifique a grafia correta do seu domínio) para apontar para esta aplicação Next.js. Assumiremos o uso da **Vercel**, que é a plataforma recomendada para Next.js.

## 1. Implantar na Vercel

Se você ainda não implantou o projeto:

1.  Acesse [vercel.com](https://vercel.com) e faça login.
2.  Clique em **"Add New..."** > **"Project"**.
3.  Importe o repositório do GitHub onde este código está hospedado.
4.  Nas configurações de "Framework Preset", mantenha **Next.js**.
5.  Clique em **"Deploy"**.

## 2. Configurar o Domínio na Vercel

Após o projeto estar implantado (ou se já estiver):

1.  Vá para o painel do seu projeto na Vercel.
2.  Clique na aba **"Settings"** (Configurações).
3.  No menu lateral, clique em **"Domains"**.
4.  No campo de entrada "Add a Domain", digite o subdomínio completo:
    *   `ingressos.suiserra.com.br` (Substitua `suiserra` pelo nome correto se for diferente).
5.  Clique em **"Add"**.
6.  A Vercel mostrará uma configuração DNS necessária (geralmente um registro **CNAME** ou **A**).
    *   **Tipo:** `CNAME`
    *   **Nome:** `ingressos`
    *   **Valor:** `cname.vercel-dns.com` (ou similar, copie exatamente o que a Vercel mostrar).

## 3. Configurar o DNS no Registro.br

1.  Acesse [registro.br](https://registro.br) e faça login.
2.  Clique sobre o domínio principal (`suiserra.com.br` ou equivalente).
3.  Role até a seção **"DNS"**.
4.  Clique em **"Editar Zona"** (ou "Configurar DNS" se não estiver usando os servidores padrão do Registro.br. Se estiver usando uma hospedagem externa como HostRinger/GoDaddy para o domínio principal, você deve fazer isso no painel DELES, não no Registro.br).
    *   *Nota: Se os servidores DNS estiverem apontando para outra hospedagem (ex: ns1.hostgator.com.br), faça essa configuração lá.*
5.  Adicione um **Novo Registro**:
    *   **Tipo:** `CNAME`
    *   **Nome:** `ingressos`
        *   *Atenção: Apenas o prefixo. O ponto final não é necessário na maioria dos painéis.*
    *   **Dados/Destino:** O valor fornecido pela Vercel (ex: `cname.vercel-dns.com`).
6.  Salve as alterações.

## 4. Verificação

1.  A propagação do DNS pode levar de alguns minutos até 24 horas (geralmente é rápido).
2.  Acesse `https://ingressos.suiserra.com.br` no navegador.
3.  A Vercel gerará automaticamente o certificado SSL (HTTPS).

## Observações Importantes

*   **Middleware:** Como esta aplicação é dedicada a "Ingressos", não é necessário alterar o código para tratar subdomínios, a menos que você queira que `suiserra.com.br` (raiz) abra uma coisa e `ingressos` outra *dentro do mesmo projeto Next.js*. Se este projeto é *apenas* a parte de ingressos, a configuração acima é suficiente.
*   **Links Internos:** Verifique se não há links "hardcoded" (fixos) no código apontando para `localhost:3000`. Use caminhos relativos (ex: `/minha-rota` em vez de `http://localhost:3000/minha-rota`). Eu verifiquei o código e parece estar usando caminhos relativos corretamente.
