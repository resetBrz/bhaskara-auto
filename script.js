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
    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);
    const xv = -b / (2 * a);
    const yv = -delta / (4 * a);
    const concavidade = a > 0 ? 'para cima' : 'para baixo';

    resultado.innerHTML = `
      <h2>Resolvendo a equação passo a passo</h2>

      <p><strong>1. Identificando os valores:</strong></p>
      <p>A = ${a}, B = ${b}, C = ${c}</p>

      <p><strong>2. Calculando o Delta (Δ):</strong></p>
      <p>Fórmula: Δ = b² - 4ac</p>
      <p>Substituindo os valores: Δ = (${b})² - 4 × ${a} × ${c}</p>
      <p>Calculando: Δ = ${b * b} - ${4 * a * c}</p>
      <p>Resultado: Δ = ${delta}</p>

      <p><strong>3. Calculando a raiz quadrada de Δ:</strong></p>
      <p>√Δ = √${delta} = ${raizDelta.toFixed(2)}</p>

      <p><strong>4. Aplicando a fórmula de Bhaskara:</strong></p>
      <p>Fórmula: x = (-b ± √Δ) / (2a)</p>

      <p><strong>Calculando x₁:</strong></p>
      <p>x₁ = (-(${b}) + ${raizDelta.toFixed(2)}) / (2 × ${a})</p>
      <p>x₁ = (${(-b).toFixed(2)} + ${raizDelta.toFixed(2)}) / ${2 * a}</p>
      <p>x₁ = ${(x1).toFixed(2)}</p>

      <p><strong>Calculando x₂:</strong></p>
      <p>x₂ = (-(${b}) - ${raizDelta.toFixed(2)}) / (2 × ${a})</p>
      <p>x₂ = (${(-b).toFixed(2)} - ${raizDelta.toFixed(2)}) / ${2 * a}</p>
      <p>x₂ = ${(x2).toFixed(2)}</p>

      <p><strong>5. Calculando o vértice da parábola:</strong></p>
      <p>xᵥ = -b / (2a) = -(${b}) / (2 × ${a}) = ${xv.toFixed(2)}</p>
      <p>yᵥ = -Δ / (4a) = -(${delta}) / (4 × ${a}) = ${yv.toFixed(2)}</p>

      <p><strong>6. Concavidade da parábola:</strong></p>
      <p>Como A = ${a}, a parábola é voltada <strong>${concavidade}</strong>.</p>

      <hr>
      <h3>✅ Resumo Final</h3>
      <ul>
        <li>Delta (Δ): ${delta}</li>
        <li>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</li>
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
