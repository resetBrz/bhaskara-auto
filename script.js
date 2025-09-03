function gerarExemploComDeltaPositivo() {
  let a, b, c, delta;

  do {
    a = Math.floor(Math.random() * 5) + 1;
    b = Math.floor(Math.random() * 20) - 10;
    c = Math.floor(Math.random() * 10);
    delta = b * b - 4 * a * c;
  } while (delta <= 0);

  document.getElementById('valorA').placeholder = `Ex: ${a}`;
  document.getElementById('valorB').placeholder = `Ex: ${b}`;
  document.getElementById('valorC').placeholder = `Ex: ${c}`;

  const explicacao = document.querySelector('.explicacao');
  explicacao.innerHTML = `
    <h3>Como identificar A, B e C?</h3>
    <p>A equação do segundo grau tem esta forma:</p>
    <p><strong>ax² + bx + c = 0</strong></p>
    <ul>
      <li><strong>A</strong> é o número que acompanha o x²</li>
      <li><strong>B</strong> é o número que acompanha o x</li>
      <li><strong>C</strong> é o número sozinho, sem x</li>
    </ul>
    <p>Exemplo gerado automaticamente:</p>
    <p><strong>${a}x² ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0</strong></p>
    <ul>
      <li>A = ${a}</li>
      <li>B = ${b}</li>
      <li>C = ${c}</li>
      <li>Δ = ${delta} → Como é positivo, essa equação tem duas raízes reais.</li>
    </ul>
  `;
}

function calculadoraBhaskara() {
  const form = document.getElementById('formularioBhaskara');
  const resultado = document.querySelector('.resultado');
  const botaoResetar = document.getElementById('botaoResetar');
  const botaoAjuda = document.getElementById('botaoAjuda');
  const explicacao = document.querySelector('.explicacao');

  botaoAjuda.addEventListener('click', function () {
    explicacao.style.display = explicacao.style.display === 'none' ? 'block' : 'none';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById('valorA').value.replace(',', '.'));
    const b = parseFloat(document.getElementById('valorB').value.replace(',', '.'));
    const c = parseFloat(document.getElementById('valorC').value.replace(',', '.'));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.innerHTML = '<p>Por favor, insira números válidos para A, B e C.</p>';
      return;
    }

    if (a === 0) {
      resultado.innerHTML = '<p>O valor de A não pode ser zero. Isso deixaria de ser uma equação do segundo grau.</p>';
      return;
    }

    const delta = b * b - 4 * a * c;
    let x1, x2, explicacaoRaizes;

    if (delta < 0) {
      explicacaoRaizes = '<p>Como o Delta ficou menor que zero, não existem raízes reais. A conta para encontrar x₁ e x₂ não pode ser feita com números negativos dentro da raiz.</p>';
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);

      explicacaoRaizes = `
        <p>Agora vamos calcular as raízes da equação usando a fórmula de Bhaskara:</p>
        <p>x = (-b ± √Δ) / (2a)</p>
        <p>Substituindo os valores:</p>
        <p>x = (-(${b}) ± √${delta}) / (2 × ${a})</p>
        <p>Calculando a raiz quadrada de ${delta}: √${delta} = ${Math.sqrt(delta).toFixed(2)}</p>
        <p>Agora fazemos as duas contas:</p>
        <p>x₁ = (-(${b}) + ${Math.sqrt(delta).toFixed(2)}) / (2 × ${a}) = ${x1.toFixed(2)}</p>
        <p>x₂ = (-(${b}) - ${Math.sqrt(delta).toFixed(2)}) / (2 × ${a}) = ${x2.toFixed(2)}</p>
      `;
    }

    const xv = -b / (2 * a);
    const yv = -delta / (4 * a);
    const concavidade = a > 0 ? 'para cima' : 'para baixo';

    resultado.innerHTML = `
      <h2>Resolvendo passo a passo</h2>

      <p><strong>1. Identificamos os valores:</strong></p>
      <p>A = ${a}, B = ${b}, C = ${c}</p>

      <p><strong>2. Calculamos o Delta (Δ):</strong></p>
      <p>Fórmula: Δ = b² - 4ac</p>
      <p>Primeiro fazemos b²: (${b})² = ${b * b}</p>
      <p>Depois fazemos 4 × ${a} × ${c} = ${4 * a * c}</p>
      <p>Agora fazemos a subtração: ${b * b} - ${4 * a * c} = ${delta}</p>
      <p>Então, Δ = ${delta}</p>

      <p><strong>3. Calculamos as raízes:</strong></p>
      ${explicacaoRaizes}

      <p><strong>4. Calculamos o vértice da parábola:</strong></p>
      <p>Fórmula do x do vértice: xᵥ = -b / (2a)</p>
      <p>xᵥ = -(${b}) / (2 × ${a}) = ${xv.toFixed(2)}</p>
      <p>Fórmula do y do vértice: yᵥ = -Δ / (4a)</p>
      <p>yᵥ = -(${delta}) / (4 × ${a}) = ${yv.toFixed(2)}</p>

      <p><strong>5. Concavidade da parábola:</strong></p>
      <p>Como A = ${a}, e ele é ${a > 0 ? 'positivo' : 'negativo'}, a concavidade é voltada <strong>${concavidade}</strong>.</p>

      <hr>
      <h3>✅ Resumo Final</h3>
      <ul>
        <li>Delta (Δ): ${delta}</li>
        ${delta >= 0 ? `
          <li>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</li>
        ` : `
          <li>Raízes: Não existem raízes reais</li>
        `}
        <li>Vértice: (${xv.toFixed(2)}, ${yv.toFixed(2)})</li>
        <li>Concavidade: ${concavidade}</li>
      </ul>
    `;
  });

  botaoResetar.addEventListener('click', function () {
    form.reset();
    resultado.innerHTML = '';
  });
}

gerarExemploComDeltaPositivo();
calculadoraBhaskara();
