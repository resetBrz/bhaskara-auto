function gerarExemploComDeltaPositivo() {
  let a, b, c, delta;

  do {
    a = Math.floor(Math.random() * 5) + 1; // entre 1 e 5
    b = Math.floor(Math.random() * 20) - 10; // entre -10 e 9
    c = Math.floor(Math.random() * 10); // entre 0 e 9
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
    <p>Você pode usar números negativos também, como -3 ou -7. Basta digitar o sinal de menos antes do número.</p>
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
    let x1, x2, passoRaizes;

    if (delta < 0) {
      passoRaizes = '<p>Como o Delta é menor que zero, não existem raízes reais. A parábola não toca o eixo X.</p>';
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      passoRaizes = `
        <p>Usamos a fórmula: x = (-b ± √Δ) / (2a)</p>
        <p>x₁ = (-${b} + √${delta}) / (2 × ${a}) = <strong>${x1.toFixed(2)}</strong></p>
        <p>x₂ = (-${b} - √${delta}) / (2 × ${a}) = <strong>${x2.toFixed(2)}</strong></p>
      `;
    }

    const xv = -b / (2 * a);
    const yv = -delta / (4 * a);
    const concavidade = a > 0 ? 'para cima (como um sorriso 😊)' : 'para baixo (como uma carinha triste 😢)';

    resultado.innerHTML = `
      <h2>Vamos resolver juntos!</h2>
      <p><strong>Passo 1: Entendendo a equação</strong></p>
      <p>Você está resolvendo: <strong>${a}x² + ${b}x + ${c} = 0</strong></p>

      <p><strong>Passo 2: Calculando o Delta (Δ)</strong></p>
      <p>Δ = b² - 4ac = (${b})² - 4 × ${a} × ${c} = <strong>${delta}</strong></p>

      <p><strong>Passo 3: Raízes da equação</strong></p>
      ${passoRaizes}

      <p><strong>Passo 4: Vértice da parábola</strong></p>
      <ul>
        <li>xᵥ = -b / 2a = -(${b}) / (2 × ${a}) = <strong>${xv.toFixed(2)}</strong></li>
        <li>yᵥ = -Δ / 4a = -(${delta}) / (4 × ${a}) = <strong>${yv.toFixed(2)}</strong></li>
      </ul>

      <p><strong>Passo 5: Concavidade</strong></p>
      <p>Como a = ${a}, a parábola está voltada <strong>${concavidade}</strong></p>

      <hr>
      <h3>✅ Resumo Final</h3>
      <ul>
        <li><strong>Delta (Δ):</strong> ${delta}</li>
        ${delta >= 0 ? `
          <li><strong>Raízes:</strong> x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</li>
        ` : `
          <li><strong>Raízes:</strong> Não existem raízes reais</li>
        `}
        <li><strong>Vértice:</strong> (${xv.toFixed(2)}, ${yv.toFixed(2)})</li>
        <li><strong>Concavidade:</strong> ${concavidade}</li>
      </ul>
    `;
  });

  botaoResetar.addEventListener('click', function () {
    form.reset();
    resultado.innerHTML = '';
  });
}

// Inicializa tudo ao carregar a página
gerarExemploComDeltaPositivo();
calculadoraBhaskara();
