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

  botaoAjuda.addEventListener('click', () => {
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
    const x1Numerador = -b + raizDelta;
    const x2Numerador = -b - raizDelta;
    const denominador = 2 * a;
    const x1 = x1Numerador / denominador;
    const x2 = x2Numerador / denominador;
    const xvNumerador = -b;
    const xv = xvNumerador / denominador;
    const yvNumerador = -delta;
    const yv = yvNumerador / (4 * a);

    resultado.innerHTML = `
      <h2>Resolvendo a equação passo a passo</h2>
      <p><strong>1. Identificando os valores:</strong></p>
      <p>A = ${a}, B = ${b}, C = ${c}</p>

      <p><strong>2. Calculando o Delta (Δ):</strong></p>
      <p>Δ = b² - 4ac</p>
      <p>Δ = (${b})² - 4 × ${a} × ${c}</p>
      <p>Δ = ${b * b} - 4 × ${a} × ${c}</p>
      <p>Δ = ${b * b} - ${4 * a * c}</p>
      <p>Δ = ${delta}</p>

      <p><strong>3. Calculando a raiz quadrada de Δ:</strong></p>
      <p>√Δ = √${delta} = ${raizDelta.toFixed(2)}</p>

      <p><strong>4. Aplicando a fórmula de Bhaskara:</strong></p>
      <p>x = (-b ± √Δ) / (2a)</p>

      <p><strong>Calculando x₁:</strong></p>
      <p>x₁ = (-(${b}) + ${raizDelta.toFixed(2)}) / (2 × ${a})</p>
      <p>x₁ = (${(-b).toFixed(2)} + ${raizDelta.toFixed(2)}) / ${denominador}</p>
      <p>x₁ = ${(x1Numerador).toFixed(2)} / ${denominador}</p>
      <p>x₁ = ${x1.toFixed(2)}</p>

      <p><strong>Calculando x₂:</strong></p>
      <p>x₂ = (-(${b}) - ${raizDelta.toFixed(2)}) / (2 × ${a})</p>
      <p>x₂ = (${(-b).toFixed(2)} - ${raizDelta.toFixed(2)}) / ${denominador}</p>
      <p>x₂ = ${(x2Numerador).toFixed(2)} / ${denominador}</p>
      <p>x₂ = ${x2.toFixed(2)}</p>

      <p><strong>5. Calculando o vértice da parábola:</strong></p>
      <p>xᵥ = -b / (2a)</p>
      <p>xᵥ = -(${b}) / (2 × ${a})</p>
      <p>xᵥ = ${xvNumerador} / ${denominador}</p>
      <p>xᵥ = ${xv.toFixed(2)}</p>

      <p>yᵥ = -Δ / (4a)</p>
      <p>yᵥ = -(${delta}) / (4 × ${a})</p>
      <p>yᵥ = ${yvNumerador} / ${4 * a}</p>
      <p>yᵥ = ${yv.toFixed(2)}</p>

      <p><strong>6. Concavidade da parábola:</strong></p>
      <p>Para saber se a parábola é voltada para cima ou para baixo, olhamos o valor de A.</p>
      <p>Se A for positivo (maior que zero), a parábola é voltada para cima.</p>
      <p>Se A for negativo (menor que zero), a parábola é voltada para baixo.</p>
      <p>Como A = ${a} é ${a > 0 ? 'positivo' : 'negativo'}, a parábola é voltada <strong>${a > 0 ? 'para cima' : 'para baixo'}</strong>.</p>

      <hr>
      <h3>✅ Resumo Final</h3>
      <ul>
        <li>Delta (Δ): ${delta}</li>
        <li>Raízes: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}</li>
        <li>Vértice: (${xv.toFixed(2)}, ${yv.toFixed(2)})</li>
        <li>Concavidade: ${a > 0 ? 'para cima' : 'para baixo'}</li>
      </ul>
    `;

    const pontosX = [];
    const pontosY = [];
    const inicio = xv - 10;
    const fim = xv + 10;
    for (let x = inicio; x <= fim; x += 0.5) {
      const y = a * x * x + b * x + c;
      pontosX.push(x.toFixed(2));
      pontosY.push(y.toFixed(2));
    }

    const ctx = document.getElementById('graficoParabola').getContext('2d');
    if (window.graficoBhaskara) {
      window.graficoBhaskara.destroy();
    }

    window.graficoBhaskara = new Chart(ctx, {
      type: 'line',
      data: {
        labels: pontosX,
        datasets: [{
          label: 'Parábola',
          data: pontosY,
          borderColor: 'rgb(13, 106, 134)',
          backgroundColor: 'rgba(13, 106, 134, 0.2)',
          fill: true,
          pointRadius: 0,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            title: { display: true, text: 'x' }
          },
          y: {
            title: { display: true, text: 'y' }
          }
        }
      }
    });
  });

  botaoResetar.addEventListener('click', function () {
    form.reset();
    resultado.innerHTML = '';
    if (window.graficoBhaskara) {
      window.graficoBhaskara.destroy();
    }
  });
}

gerarExemploComDeltaPositivo();
calculadoraBhaskara();

